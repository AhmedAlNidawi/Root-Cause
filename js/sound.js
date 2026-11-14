// we will make the sound fully digitally, instead of saving it as it is easier to do it natively.
let soundOn = true;
let audio = null;
function beep(freq, length, type, volume, delay) {
  if (!soundOn) return;
  if (!audio) audio = new AudioContext();

  let start = audio.currentTime + (delay || 0);
  let osc = audio.createOscillator();
  let gain = audio.createGain();

  osc.type = type || 'sine';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume || 0.1, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + length);

  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start(start);
  osc.stop(start + length);
}
//reminder: Test each sound before submission
function playSound(name) {
  switch (name) {
    case 'click':
      beep(620, 0.05, 'triangle', 0.08);
      break;
    case 'alarm':
      for (let i = 0; i < 4; i++) beep(i % 2 ? 620 : 880, 0.2, 'square', 0.06, i * 0.24);
      break;
    case 'radio':
      beep(2500, 0.15, 'sine', 0.04);
      break;
    case 'spend':
      beep(260, 0.15, 'sawtooth', 0.05);
      break;
    case 'reveal':
      beep(400, 0.2, 'sine', 0.06);
      beep(700, 0.3, 'sine', 0.06, 0.15);
      break;
    case 'right':
      beep(660, 0.12, 'triangle', 0.1);
      beep(880, 0.2, 'triangle', 0.1, 0.1);
      break;
    case 'miss':
      beep(240, 0.3, 'sine', 0.1);
      break;
    case 'wrong':
      beep(160, 0.25, 'sawtooth', 0.08);
      beep(120, 0.3, 'sawtooth', 0.08, 0.12);
      break;
    case 'stamp':
      beep(90, 0.3, 'sine', 0.4);
      break;
    case 'win':
      beep(523, 0.2, 'triangle', 0.1);
      beep(659, 0.2, 'triangle', 0.1, 0.12);
      beep(784, 0.2, 'triangle', 0.1, 0.24);
      beep(1047, 0.4, 'triangle', 0.1, 0.36);
      break;
  }
}

function toggleSound() { 
  soundOn = !soundOn;
  save('rootcause-sound', soundOn ? 'on' : 'off');
  showSoundButton();
  playSound('click');
}

function showSoundButton() {
  document.getElementById('sound-btn').textContent = soundOn ? t('soundOn') : t('soundOff');
}
