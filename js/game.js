let progress = loadProgress();
let lang = loadSaved('rootcause-language') || 'en';
let text = null;
let currentCase = null;
let words = null;
let game = null;
let timers = [];
//Please keep all game logic here!!!!
function fill(str, values) {
  for (let key in values) {
    str = str.replace('{' + key + '}', values[key]);
  }
  return str;
}

function t(key, values) {
  return fill(text[key], values || {});
}

function addMissing(from, into) {
  for (let key in from) {
    if (into[key] === undefined) {
      into[key] = from[key];
    } else if (typeof from[key] === 'object' && !Array.isArray(from[key])) {
      addMissing(from[key], into[key]);
    }
  }
}

function loadSaved(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    return;
  }
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('rootcause-stars')) || {};
  } catch (e) {
    return {};
  }
}

function later(fn, ms) {
  timers.push(setTimeout(fn, ms));
}

function stopTimers() {
  for (let timer of timers) clearTimeout(timer);
  timers = [];
  cancelAnimationFrame(chartTimer);
}

function setLanguage(code) {
  lang = code;
  text = languages[code];
  save('rootcause-language', code);

  document.documentElement.lang = code;
  document.documentElement.dir = text.dir;
  for (let el of document.querySelectorAll('[data-text]')) {
    el.textContent = t(el.dataset.text);
  }
  showSoundButton();
  showLanguageButtons();
}

function showLanguageButtons() {
  let codes = Object.keys(languages);
  let html = '';
  if (codes.length > 1) {
    for (let code of codes) {
      let picked = code === lang ? 'picked' : '';
      html += `<button class="key ${picked}" onclick="setLanguage('${code}'); playSound('click')">${languages[code].name}</button>`;
    }
  }
  document.getElementById('language-buttons').innerHTML = html;
}

function showScreen(id) {
  for (let screen of document.querySelectorAll('.screen')) {
    screen.classList.remove('active');
  }
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function showModal(html) {
  let box = document.getElementById('modal-box');
  box.classList.remove('shake');
  box.innerHTML = html;
  document.getElementById('modal').hidden = false;
}

function closeModal() {
  document.getElementById('modal').hidden = true;
}

function shake(el) {
  el.classList.remove('shake');
  setTimeout(() => el.classList.add('shake'), 10);
}

function showStamp(message) {
  let stamp = document.getElementById('stamp');
  stamp.textContent = message;
  stamp.classList.remove('go');
  setTimeout(() => stamp.classList.add('go'), 10);
}

function lamps(count, color) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<i class="lamp ${color || 'on'}"></i>`;
  }
  return html;
}

function findTest(id) {
  return currentCase.tests.find(test => test.id === id);
}

function answerOf(id) {
  return game.cause.answers[id];
}

function fixResult(fix) {
  let root = game.cause.root;
  if (fix.fixes && fix.fixes.includes(root)) return 'fixed';
  if (fix.helps && fix.helps.includes(root)) return 'symptom';
  return 'wrong';
}

function totalStars() {
  let total = 0;
  for (let id in progress) total += progress[id];
  return total;
}

function rankName(stars) {
  let level = 0;
  if (stars >= 3) level = 1;
  if (stars >= 8) level = 2;
  if (stars >= 14) level = 3;
  return text.ranks[level];
}

function starIcons(count) {
  let html = '';
  for (let i = 0; i < 3; i++) {
    html += `<span class="star ${i < count ? 'on' : ''}">★</span>`;
  }
  return html;
}

function openCaseList() {
  stopTimers();
  playSound('click');
  closeModal();

  let stars = totalStars();
  document.getElementById('rank').innerHTML = `${t('rank', { rank: rankName(stars) })} <span class="star on">★</span> ${stars}`;

  let html = '';
  cases.forEach((c, i) => {
    let caseWords = text.cases[c.id];
    let best = progress[c.id] || 0;
    let tag = caseWords.tag ? ` <em>${caseWords.tag}</em>` : '';
    html += `
      <button class="case-row" onclick="startCase(${i})">
        <span class="case-num">${i + 1}</span>
        <span class="case-name">${caseWords.title}${tag}</span>
        <span class="stars">${starIcons(best)}</span>
      </button>`;
  });
  text.comingSoonCases.forEach((c, i) => {
    html += `
      <div class="case-row locked">
        <span class="case-num">${cases.length + i + 1}</span>
        <span class="case-name">${c.title}<small>${c.teaser}</small></span>
        <span class="soon">${t('comingSoon')}</span>
      </div>`;
  });
  document.getElementById('case-list').innerHTML = html;
  showScreen('cases-screen');
}

function openDataScreen() {
  playSound('click');
  let html = '';
  for (let item of text.nasaData) {
    html += `
      <div class="data-item">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
        <p class="data-use"><b>${t('usedIn')}:</b> ${item.usedIn}</p>
        <a href="${item.url}" target="_blank">${t('source')}: ${item.source}</a>
      </div>`;
  }
  document.getElementById('data-list').innerHTML = html;
  showScreen('data-screen');
}

function startCase(index) {
  stopTimers();
  currentCase = cases[index];
  words = text.cases[currentCase.id];
  let cause = currentCase.causes[Math.floor(Math.random() * currentCase.causes.length)];
  game = {
    index: index,
    cause: cause,
    par: cause.expertPath.length,
    data: runOutpost(cause.problem),
    normal: runOutpost('none'),
    hoursLeft: currentCase.hours,
    maxHours: currentCase.hours,
    choice: 0,
    testsUsed: 0,
    guesses: 0,
    rightGuesses: 0,
    looked: false,
    done: {},
    ruledOut: [],
    triedFixes: [],
    over: false
  };

  document.getElementById('case-title').textContent = t('caseTitle', { n: index + 1, title: words.title });
  document.getElementById('alarm-strip').textContent = words.alarm;
  document.getElementById('radio').innerHTML = '';
  document.getElementById('notes').innerHTML = '';
  clearEvidence();
  showTab('suspects');
  renderHours();
  renderTestCount();
  renderReadings();
  renderSuspects();
  renderTests();
  updateAskButton();
  showScreen('case-screen');

  playSound('alarm');
  showModal(`
    <div class="alarm-box">
      <button class="master-alarm" onclick="beginCase()">${t('masterAlarm')}</button>
      <h3>${words.alarm}</h3>
      <div class="cost-line">${t('crewHours')} <span class="lamp-row">${lamps(currentCase.hours)}</span></div>
      <p class="hint">${t('pressAlarm')}</p>
    </div>
  `);
}

function beginCase() {
  playSound('click');
  let buttons = '';
  words.choice.options.forEach((option, i) => {
    let hours = currentCase.choice[i].hours;
    let effect = '';
    if (hours > 0) effect = `+${hours} ${lamps(hours, 'green')}`;
    if (hours < 0) effect = `${hours} ${lamps(-hours, 'red')}`;
    buttons += `
      <button class="choice" onclick="pickChoice(${i})">
        <span><b>${option.name}</b><small>${option.note}</small></span>
        <span class="lamp-row">${effect}</span>
      </button>`;
  });

  showModal(`
    <p class="modal-top">${t('choiceTitle')}</p>
    <h3>${words.choice.question}</h3>
    <div class="choices list">${buttons}</div>
  `);
}

function pickChoice(i) {
  playSound('click');
  let hours = currentCase.choice[i].hours;
  game.choice = i;
  game.hoursLeft += hours;
  if (hours > 0) game.maxHours += hours;
  renderHours();
  renderTests();
  updateAskButton();
  closeModal();
  say(words.briefing);
  updateGuide();
}

function say(lines) {
  lines.forEach((line, i) => {
    later(() => {
      let box = document.getElementById('radio');
      box.insertAdjacentHTML('beforeend', `<p class="radio-line"><b>${text.crew[line.who]}</b>${line.text}</p>`);
      while (box.children.length > 3) box.firstElementChild.remove();
      playSound('radio');
    }, i * 1500);
  });
}

function guideSteps() {
  if (currentCase.guide === 'look') return ['reading-0'];
  if (currentCase.guide !== 'full') return [];
  let steps = ['reading-0'];
  for (let id of game.cause.expertPath) steps.push('test-' + id);
  steps.push('call-it');
  return steps;
}

function stepDone(target) {
  if (target === 'reading-0') return game.looked;
  if (target.startsWith('test-')) return game.done[target.slice(5)];
  return false;
}

function updateGuide() {
  for (let el of document.querySelectorAll('.glow')) el.classList.remove('glow');
  if (game.over) return;

  let target = guideSteps().find(step => !stepDone(step));
  if (!target) return;

  let el = document.getElementById(target);
  let tip = t('guideLook');
  if (target.startsWith('test-')) tip = t('guideTest');
  if (target === 'call-it') tip = t('guideCall');
  if (target.startsWith('test-') && document.getElementById('tests-box').hidden) {
    el = document.getElementById('tab-tests');
    tip = t('openTests');
  }
  if (!el) return;
  el.dataset.tip = tip;
  el.classList.add('glow');
}

function renderHours() {
  let html = '';
  for (let i = 0; i < game.maxHours; i++) {
    let color = '';
    if (i < game.hoursLeft) color = game.hoursLeft <= 2 ? 'red' : 'on';
    html += `<i class="lamp ${color}"></i>`;
  }
  document.getElementById('hours').innerHTML = html;
}

function spendHours(n) {
  if (n <= 0) return;
  game.hoursLeft = Math.max(0, game.hoursLeft - n);
  renderHours();
  renderTests();
  updateAskButton();
  playSound('spend');
}

function updateAskButton() {
  document.getElementById('ask-btn').disabled = game.over || game.hoursLeft < 2;
}

function renderTestCount() {
  let html = '';
  let total = Math.max(game.par, game.testsUsed);
  for (let i = 0; i < total; i++) {
    if (i >= game.testsUsed) html += '<i class="lamp"></i>';
    else if (i < game.par) html += '<i class="lamp green"></i>';
    else html += '<i class="lamp red"></i>';
  }
  document.getElementById('tests-used').innerHTML = html;
}

function renderReadings() {
  let html = '';
  currentCase.readings.forEach((reading, i) => {
    let chart = getChart(reading.chart, game.data, game.normal);
    let warn = chart.warn || game.cause.warn.includes(reading.chart);
    let values = chart.lines[0].data;
    let value = values[values.length - 1];
    let unit = chart.unit;
    if (reading.peak) {
      value = Math.max(...values.slice(-24));
      unit = t('peakToday', { unit: chart.unit });
    }
    html += `
      <button class="reading ${warn ? 'warn' : ''}" id="reading-${i}" onclick="showReading(${i})">
        <span class="reading-name">${chart.lines[0].name}</span>
        <i class="lamp ${warn ? 'on' : 'green'}"></i>
        <span class="reading-value"><bdi>${Math.round(value)}</bdi> <small>${unit}</small></span>
        ${sparkline(values, chart.min, chart.max)}
      </button>`;
  });
  document.getElementById('readings').innerHTML = html;
}

function showReading(i) {
  playSound('click');
  game.looked = true;
  let chart = getChart(currentCase.readings[i].chart, game.data, game.normal);
  showChart(chart.lines[0].name, chart);

  let note = '';
  if (chart.lines.length > 1 && chart.lines[1].normal) note += t('normalNote') + ' ';
  if (chart.hours) note += t('nightNote') + ' ';
  if (chart.note) note += chart.note;
  document.getElementById('note').innerHTML = note;
  updateGuide();
}

function showChart(title, chart) {
  document.getElementById('evidence-title').textContent = title;
  document.getElementById('crt-empty').hidden = true;
  document.getElementById('legend').innerHTML = chartLegend(chart);

  let help = [];
  if (chart.hours) help.push(text.help.sol);
  for (let key of chart.help || []) help.push(text.help[key]);
  document.getElementById('units').innerHTML = help.join(' ');

  let canvas = document.getElementById('chart');
  canvas.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  drawChart(canvas, chart, true);
}

function clearEvidence() {
  cancelAnimationFrame(chartTimer);
  let canvas = document.getElementById('chart');
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('crt-empty').hidden = false;
  document.getElementById('evidence-title').textContent = t('evidence');
  document.getElementById('legend').innerHTML = '';
  document.getElementById('units').innerHTML = '';
  document.getElementById('note').innerHTML = '';
}

function showTab(name) {
  document.getElementById('suspects-box').hidden = name !== 'suspects';
  document.getElementById('tests-box').hidden = name !== 'tests';
  document.getElementById('tab-suspects').classList.toggle('active', name === 'suspects');
  document.getElementById('tab-tests').classList.toggle('active', name === 'tests');
  if (game) updateGuide();
}

function renderSuspects() {
  let html = '';
  for (let id of currentCase.suspects) {
    let suspect = words.suspects[id];
    let out = game.ruledOut.includes(id);
    html += `
      <li>
        <button class="suspect ${out ? 'out' : ''}" id="suspect-${id}" onclick="toggleSuspect('${id}')">
          <i class="lamp ${out ? '' : 'on'}"></i>
          <span><b>${suspect.name}</b><small>${suspect.note}</small></span>
        </button>
      </li>`;
  }
  document.getElementById('suspects').innerHTML = html;
}

function toggleSuspect(id) {
  playSound('click');
  if (game.ruledOut.includes(id)) {
    game.ruledOut = game.ruledOut.filter(x => x !== id);
  } else {
    game.ruledOut.push(id);
  }
  renderSuspects();
  updateGuide();
}

function renderTests() {
  let html = '';
  for (let test of currentCase.tests) {
    let testWords = words.tests[test.id];
    let done = game.done[test.id];
    let tooExpensive = !done && test.cost > game.hoursLeft;
    let result = done ? `<small>${testWords.options[answerOf(test.id)]}</small>` : '';
    let cost = done ? '' : lamps(test.cost);

    html += `
      <li>
        <button class="test ${done ? 'done' : ''}" id="test-${test.id}" onclick="openTest('${test.id}')" ${tooExpensive ? 'disabled' : ''}>
          <span><b>${testWords.name}</b>${result}</span>
          <span class="lamp-row">${cost}</span>
        </button>
      </li>`;
  }
  document.getElementById('tests').innerHTML = html;
}

function showTestResult(id, verdict) {
  let testWords = words.tests[id];
  let answer = answerOf(id);
  document.getElementById('note').innerHTML = `${verdict}<b class="note-head">${testWords.options[answer]}</b>${testWords.results[answer]}`;
}

function openTest(id) {
  let test = findTest(id);
  let testWords = words.tests[id];
  playSound('click');

  if (game.done[id]) {
    showChart(testWords.name, getChart(test.chart, game.data, game.normal));
    showTestResult(id, '');
    return;
  }

  let buttons = '';
  testWords.options.forEach((option, i) => {
    buttons += `<button class="choice" onclick="runTest('${id}', ${i})">${option}</button>`;
  });

  showModal(`
    <p class="modal-top cost-line">${t('testUses')} <span class="lamp-row">${lamps(test.cost)}</span></p>
    <h3>${testWords.name}</h3>
    <p>${testWords.desc}</p>
    <p class="ask">${t('whatWillYouSee')}</p>
    <div class="choices">${buttons}</div>
    <div class="modal-buttons">
      <button class="key" onclick="runTest('${id}', -1)">${t('justRun')}</button>
      <button class="key" onclick="closeModal(); playSound('click')">${t('notNow')}</button>
    </div>
  `);
}

function runTest(id, guess) {
  let test = findTest(id);
  let testWords = words.tests[id];
  let answer = answerOf(id);
  closeModal();
  game.done[id] = true;
  game.testsUsed++;
  renderTestCount();
  spendHours(test.cost);

  showChart(testWords.name, getChart(test.chart, game.data, game.normal));
  document.getElementById('note').innerHTML = `<span class="dim">${t('running')}</span>`;
  playSound('reveal');

  later(() => {
    let verdict = '';
    if (guess >= 0) {
      game.guesses++;
      if (guess === answer) {
        game.rightGuesses++;
        verdict = `<span class="good">${t('calledIt')}</span>`;
        showStamp(t('calledIt'));
        playSound('right');
      } else {
        verdict = `<span class="miss">${t('notExpected')}</span>`;
        playSound('miss');
      }
    }

    showTestResult(id, verdict);
    document.getElementById('notes').insertAdjacentHTML('afterbegin',
      `<li><button onclick="openTest('${id}')"><b>${testWords.name}:</b> ${testWords.options[answer]}</button></li>`);
    renderTests();
    updateGuide();

    if (game.hoursLeft <= 0) outOfTime();
  }, 1000);
}

function askMissionControl() {
  if (game.over || game.hoursLeft < 2) return;
  playSound('click');
  spendHours(2);
  say([{ who: 'layla', text: t('askSent') }]);

  let next = game.cause.expertPath.find(id => !game.done[id]);
  let reply = t('hintCall');
  if (next) reply = t('hintTest', { test: words.tests[next].name });

  later(() => {
    say([{ who: 'houston', text: reply }]);
    if (game.hoursLeft <= 0) later(outOfTime, 1500);
  }, 3000);
}

function callIt() {
  if (game.over) return;
  playSound('click');

  let buttons = '';
  for (let id of currentCase.suspects) {
    let out = game.ruledOut.includes(id);
    buttons += `<button class="choice ${out ? 'out' : ''}" onclick="pickRoot('${id}')">${words.suspects[id].name}</button>`;
  }

  showModal(`
    <p class="modal-top">${t('step', { n: 1 })}</p>
    <h3>${t('whatsTheCause')}</h3>
    <p class="cost-line">${t('wrongCallCosts')} <span class="lamp-row">${lamps(2, 'red')}</span></p>
    <div class="choices list">${buttons}</div>
    <div class="modal-buttons">
      <button class="key" onclick="closeModal(); playSound('click')">${t('keepLooking')}</button>
    </div>
  `);
}

function pickRoot(id) {
  if (id !== game.cause.root) {
    playSound('wrong');
    shake(document.getElementById('modal-box'));
    later(() => {
      closeModal();
      spendHours(2);
      if (!game.ruledOut.includes(id)) game.ruledOut.push(id);
      renderSuspects();
      say([words.wrongCall[id]]);
      updateGuide();
      if (game.hoursLeft <= 0) outOfTime();
    }, 400);
    return;
  }

  playSound('right');
  game.chain = words.chains[game.cause.root];
  game.chainStep = 0;
  game.cards = game.chain.concat([words.decoys[game.cause.root]]);
  game.cards.sort(() => Math.random() - 0.5);
  showChain();
}

function showChain() {
  let last = game.chain.length - 1;
  let slots = '';
  game.chain.forEach((step, i) => {
    if (i < game.chainStep) slots += `<li class="filled">${step}</li>`;
    else if (i === 0) slots += `<li class="label">${t('chainFirst')}</li>`;
    else if (i === last) slots += `<li class="label">${t('chainLast')}</li>`;
    else slots += '<li></li>';
  });

  let cards = '';
  game.cards.forEach((card, i) => {
    let place = game.chain.indexOf(card);
    let used = place > -1 && place < game.chainStep;
    if (!used) cards += `<button class="chain-card" onclick="pickCard(${i}, this)">${card}</button>`;
  });

  showModal(`
    <p class="modal-top">${t('step', { n: 2 })}</p>
    <h3>${t('chainTitle')}</h3>
    <p>${t('chainHint')}</p>
    <p class="cost-line">${t('wrongCardCosts')} <span class="lamp-row">${lamps(1, 'red')}</span></p>
    <ol class="chain">${slots}</ol>
    <div class="cards">${cards}</div>
  `);
}

function pickCard(i, button) {
  if (game.cards[i] !== game.chain[game.chainStep]) {
    playSound('miss');
    shake(button);
    spendHours(1);
    if (game.hoursLeft <= 0) outOfTime();
    return;
  }

  playSound('click');
  game.chainStep++;
  showChain();
  if (game.chainStep === game.chain.length) {
    later(() => showFixes(''), 600);
  }
}

function showFixes(message) {
  let buttons = '';
  let canAfford = 0;
  currentCase.fixes.forEach((fix, i) => {
    if (game.triedFixes.includes(i)) return;
    let tooExpensive = fix.cost > game.hoursLeft;
    if (!tooExpensive) canAfford++;
    buttons += `<button class="choice" onclick="pickFix(${i})" ${tooExpensive ? 'disabled' : ''}>${words.fixes[i].name}<span class="lamp-row">${lamps(fix.cost)}</span></button>`;
  });

  if (canAfford === 0) {
    outOfTime();
    return;
  }

  let intro = `<p>${t('fixHint')}</p>`;
  if (message) intro = `<p class="warning">${message}</p>`;

  showModal(`
    <p class="modal-top">${t('step', { n: 3 })}</p>
    <h3>${t('fixTitle')}</h3>
    ${intro}
    <div class="choices list">${buttons}</div>
  `);
}

function pickFix(i) {
  let fix = currentCase.fixes[i];
  if (fix.cost > game.hoursLeft) return;
  let result = fixResult(fix);
  let message = words.fixes[i][result];

  if (result === 'fixed') {
    spendHours(fix.cost);
    finishCase(message);
    return;
  }

  game.triedFixes.push(i);
  spendHours(fix.cost);
  playSound('wrong');
  if (game.hoursLeft <= 0) {
    outOfTime();
    return;
  }

  let headline = result === 'symptom' ? t('helped') : t('didntWork');
  showFixes(`<b>${headline}</b> ${message}`);
  shake(document.getElementById('modal-box'));
}

function finishCase(message) {
  game.over = true;
  closeModal();
  updateGuide();
  updateAskButton();
  showStamp(t('caseClosed'));
  playSound('stamp');

  for (let reading of document.querySelectorAll('.reading')) reading.classList.add('fixed');
  say([{ who: 'layla', text: message }]);

  let stars = [
    true,
    game.testsUsed <= game.par,
    game.guesses > 0 && game.rightGuesses === game.guesses
  ];
  let count = stars.filter(s => s).length;
  if (count > (progress[currentCase.id] || 0)) {
    progress[currentCase.id] = count;
    save('rootcause-stars', JSON.stringify(progress));
  }

  later(() => showResult(stars), 1800);
}

function showResult(stars) {
  let labels = [t('starFixed'), t('starPar', { par: game.par }), t('starGuess')];

  let starList = '';
  stars.forEach((on, i) => {
    starList += `<li class="${on ? 'on' : ''}"><span class="big-star" style="animation-delay: ${0.3 + i * 0.4}s">★</span>${labels[i]}</li>`;
  });

  let expertSteps = '';
  for (let id of game.cause.expertPath) expertSteps += `<li>${words.tests[id].name}</li>`;

  let next = cases[game.index + 1];
  let nextButton = '';
  if (next) {
    nextButton = `<button class="key lit big" onclick="startCase(${game.index + 1})">${t('nextCase')}: ${text.cases[next.id].title}</button>`;
  }

  document.getElementById('result').innerHTML = `
    <p class="modal-top">${t('caseTitle', { n: game.index + 1, title: words.title })}</p>
    <h2>${t('caseClosed')}</h2>
    <ul class="result-stars">${starList}</ul>
    <div class="box">
      <b>${t('nextSol')}</b>
      <p>${words.choice.options[game.choice].nextSol}</p>
    </div>
    <div class="box">
      <b>${t('expertWay')}</b>
      <ol>${expertSteps}</ol>
    </div>
    <div class="box">
      <b>${t('realMission')}</b>
      <p>${words.fact}</p>
      <a href="${currentCase.link}" target="_blank">${t('source')}: ${words.source}</a>
    </div>
    <div class="modal-buttons">
      ${nextButton}
      <button class="key" onclick="startCase(${game.index})">${t('playAgain')}</button>
      <button class="key" onclick="openCaseList()">${t('caseFiles')}</button>
    </div>
  `;
  showScreen('result-screen');
  playSound('win');
}

function outOfTime() {
  game.over = true;
  updateGuide();
  updateAskButton();
  playSound('wrong');
  showModal(`
    <p class="modal-top red">${t('outOfTime')}</p>
    <h3>${t('outOfTimeTitle')}</h3>
    <p>${t('outOfTimeTip')}</p>
    <div class="modal-buttons">
      <button class="key lit" onclick="startCase(${game.index})">${t('tryAgain')}</button>
      <button class="key" onclick="openCaseList()">${t('caseFiles')}</button>
    </div>
  `);
}

for (let code in languages) addMissing(languages.en, languages[code]);
if (!languages[lang]) lang = 'en';
soundOn = loadSaved('rootcause-sound') !== 'off';
setLanguage(lang);
