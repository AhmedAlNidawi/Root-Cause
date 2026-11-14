const languages = {};
// Use AI to translate to add multi language support. 
// reminder: this overrides whatever we wrote
// this might of been a mistake, perhaps we should of used json instead (more portable)
languages.en = {
  name: 'English',
  dir: 'ltr',

  place: 'Suhail Base, Gale Crater, Mars',
  title: 'Root Cause',
  intro: 'Something is wrong at the Mars base, and it is your job to find out what.',
  motto: 'Thinking is free, but testing costs time.',
  aiNotice: 'Arabic, French and Spanish translations were made with AI (Claude) and may contain mistakes.',
  start: 'Start',
  soundOn: 'Sound on',
  soundOff: 'Sound off',
  back: 'Back',
  caseFiles: 'Case files',
  rank: 'Rank: {rank}',
  ranks: ['Trainee', 'Junior Controller', 'Flight Controller', 'Flight Director'],
  comingSoon: 'Coming soon',
  caseTitle: 'Case {n}: {title}',

  crewHours: 'Crew hours',
  tests: 'Tests',
  readings: 'Readings',
  free: 'Free',
  crewRadio: 'Crew radio',
  evidence: 'Evidence',
  emptyScreen: 'Tap a reading or run a test',
  notes: 'Case notes',
  suspects: 'Suspects',
  ruleOutHint: 'Tap a suspect to rule it out',
  testsHint: 'Each test uses crew hours',
  callIt: 'Call it',

  masterAlarm: 'Master alarm',
  pressAlarm: 'Press the alarm to start',
  peakToday: '{unit} peak today',
  normalNote: 'Dotted line = a normal day.',
  nightNote: 'Dark stripes = night.',
  openTests: 'Open the tests',
  openSuspects: 'Open the suspects',

  testUses: 'This test uses',
  whatWillYouSee: 'What will you see?',
  justRun: 'Just run it',
  notNow: 'Not now',
  running: 'Running the test...',
  calledIt: 'Called it!',
  notExpected: 'Not what you guessed.',

  step: 'Step {n} of 3',
  whatsTheCause: "What's the root cause?",
  wrongCallCosts: 'A wrong call uses',
  keepLooking: 'Keep looking',
  chainTitle: 'Put the chain in order',
  chainHint: 'One card is fake.',
  chainFirst: 'Root cause',
  chainLast: 'What the crew saw',
  fixTitle: 'How do you fix it?',
  fixHint: 'Fix the cause, not the symptom.',
  helped: 'That helped a bit, but the cause is still there.',
  didntWork: "That didn't work.",

  caseClosed: 'Case closed',
  starFixed: 'Found the cause and fixed it',
  starPar: 'Used {par} tests or fewer',
  starGuess: 'Guessed every test right',
  expertWay: 'The expert way',
  realMission: 'Real mission',
  source: 'Source',
  nextCase: 'Next case',
  playAgain: 'Play again',
  outOfTime: 'Out of time',
  outOfTimeTitle: 'The crew ran out of hours',
  outOfTimeTip: 'Tip: check the free readings first.',
  tryAgain: 'Try again',

  dataButton: 'NASA data used',
  dataTitle: 'NASA data used',
  dataIntro: 'Every number on this page is real. Here is where it comes from and where you meet it in the game.',
  usedIn: 'In the game',
  askButton: 'Ask Mission Control',
  askHint: 'Messages take 4 to 24 minutes to travel between Mars and Earth, each way. Asking uses 2 crew hours.',
  askSent: 'Message sent to Earth. Now we wait for the reply...',
  hintTest: 'We looked at your data. Try this next: {test}.',
  hintCall: 'You have what you need. Call it!',
  guideLook: 'Tap here first. Looking is free!',
  guideTest: 'Run this test',
  guideCall: 'Know the cause? Call it!',
  choiceTitle: 'Quick decision',
  nextSol: 'Next sol',
  wrongCardCosts: 'A wrong card uses',
  help: {
    sol: 'A sol is one day on Mars. It lasts 24 hours and 40 minutes.',
    kW: 'kW (kilowatts) tells you how much power is being made right now.',
    Wh: 'Wh (watt-hours) tells you how much energy was made in a whole sol.',
    ppm: 'ppm means parts per million. 5,000 ppm means 5,000 bits of CO₂ in every million bits of air.',
    kPa: 'kPa (kilopascals) measures air pressure. Air on Earth at sea level is about 101 kPa.',
    Pa: 'Pa (pascals) also measures air pressure. 1,000 Pa is 1 kPa. The air outside on Mars is only about 860 Pa.',
    ohms: 'Ohms measure how hard it is for electricity to get through a wire. A higher number means a worse wire.',
    mm: 'mm means millimetres. 10 mm make 1 cm.',
    uGy: 'µGy (micrograys) measures how much radiation a body soaks up.'
  },

  crew: {
    layla: 'Commander Layla',
    omar: 'Engineer Omar',
    sara: 'Botanist Sara',
    houston: 'Mission Control'
  },

  chart: {
    kW: 'kW',
    charge: '% charge',
    ofNormal: '% of normal',
    degrees: '°C',
    opacity: 'dust in the sky',
    kWPanel: 'kW per panel',
    ohms: 'ohms',
    brightness: '% brightness',
    moisture: '% water',
    onOff: 'on / off',
    sol: 'Sol {n}',
    noon: 'noon',
    now: 'now',
    normal: 'Normal',
    solar: 'Solar output',
    battery: 'Battery',
    growth: 'Lettuce growth',
    habitat: 'Habitat air',
    sky: 'Dust in the sky',
    cleaned: 'Panel you cleaned',
    dusty: 'Dusty panel',
    wires: 'Wire resistance',
    spareMeter: 'Spare meter',
    oldMeter: 'Old meter',
    greenhouse: 'Greenhouse air',
    lights: 'Light brightness',
    soil: 'Soil water',
    heater: 'Heater temperature',
    thisBattery: 'This battery',
    healthyBattery: 'Healthy battery',
    heaterPower: 'Heater power at night',
    spareSensor: 'Spare sensor',
    oldSensor: 'Old sensor',
    reserve: 'reserve',
    storm: 'dust storm',
    tooCold: 'too cold for lettuce',
    tooDry: 'too dry',
    broken: 'broken',
    afterCleaning: 'hours after cleaning',
    wireNumber: 'wire',
    minutesOn: 'minutes switched on',
    hoursOnTest: 'hours on test',
    ppm: 'ppm',
    co2: 'CO₂ in the air',
    headaches: 'headaches start',
    airIn: 'Air going in',
    airOut: 'Air coming out',
    handheld: 'Handheld meter',
    wallSensor: 'Base sensor',
    vent: 'air vent',
    airflow: 'Airflow',
    tooWeak: 'too weak',
    minutes: 'minutes',
    workouts: 'Workout time',
    usual: 'Usual',
    kg: 'kg',
    weight: 'Cartridge weight',
    newCartridge: 'New one',
    yourCartridge: 'Yours',
    full: 'full',
    oxygen: 'Oxygen',
    percentO2: '% oxygen',
    alarmLevel: 'alarm',
    oxygenMade: 'Oxygen made',
    bloodOxygen: 'Blood oxygen',
    bloodUnit: '% in the blood',
    crewNames: ['Layla', 'Omar', 'Sara'],
    tooLow: 'too low',
    realGas: 'Test gas',
    sensorSays: 'Sensor says',
    pressure: 'Cabin pressure',
    kPa: 'kPa',
    airTank: 'Spare air tank',
    percentFull: '% full',
    percent: '%',
    spareGauge: 'Spare gauge',
    oldGauge: 'Old gauge',
    rooms: ['Habitat', 'Lab', 'Greenhouse', 'Airlock'],
    pressureLoss: 'Air lost',
    paPerHour: 'Pa lost per hour',
    hissNoise: 'Hissing noise',
    leak: 'leak',
    doorGap: 'Gap in the seal',
    sides: ['Top', 'Left', 'Bottom', 'Right'],
    mm: 'mm',
    shelterWater: 'Shelter water',
    shieldNeeds: 'shield needs this much',
    mainWater: 'Main water tank',
    flowOut: 'Water leaving the shelter',
    litresPerHour: 'litres per hour',
    waterTaken: 'Water the pump took',
    tanks: ['Main tank', 'Shelter tank'],
    litres: 'litres today',
    gaugeSays: 'Gauge',
    byHand: 'By hand',
    floorWater: 'Water on the floor',
    wet: 'wet',
    insight: 'InSight\'s solar power',
    whPerSol: 'Wh per sol',
    insightLanding: 'Landing, 2018',
    insightLate: 'Spring 2022',
    outsideAir: 'Air outside',
    weatherNote: 'Real weather from NASA\'s Curiosity rover at Gale Crater, sols 4189 and 4190 (May 19 and 20, 2024). Outside air pressure: 860 Pa.',
    radiation: 'Radiation dose',
    uGy: 'µGy',
    normalSol: 'Normal sol',
    stormDay: 'May 20, 2024',
    radiationNote: 'Real readings from Curiosity\'s RAD detector. A normal sol is about 210 µGy. The May 2024 storm gave 8,100 µGy, about 30 chest X-rays.'
  },


  nasaData: [
    {
      title: 'InSight lander: solar power',
      detail: 'InSight\'s panels made about 5,000 watt-hours per sol after it landed in 2018. By spring 2022, dust had cut that to about 500.',
      usedIn: 'Dim Day: the "InSight\'s solar power" reading, and how dust dims your panels.',
      source: 'NASA / JPL',
      url: 'https://www.nasa.gov/missions/insight/nasas-insight-still-hunting-marsquakes-as-power-levels-diminish'
    },
    {
      title: 'Curiosity rover: REMS weather station',
      detail: 'Gale Crater, sol 4189 (May 19, 2024): low -68 °C, high -5 °C, 861 Pa. Sol 4190 (May 20, 2024): low -69 °C, high -3 °C, 860 Pa.',
      usedIn: 'The "Air outside" reading in every case.',
      source: 'NASA / JPL and Centro de Astrobiología (REMS team)',
      url: 'https://mars.nasa.gov/msl/mission/weather/'
    },
    {
      title: 'DONKI space weather database',
      detail: 'Coronal mass ejection 2024-05-20T05:36:00-CME-001, from Sun region 13664, at about 2,678 km per second.',
      usedIn: 'Storm Incoming: the space weather alert from Mission Control.',
      source: 'NASA Community Coordinated Modeling Center',
      url: 'https://kauai.ccmc.gsfc.nasa.gov/DONKI/'
    },
    {
      title: 'Curiosity rover: RAD radiation detector',
      detail: 'On May 20, 2024, RAD measured 8,100 micrograys, about 30 chest X-rays. On a normal sol it measures about 180 to 225 micrograys.',
      usedIn: 'Storm Incoming: the "Radiation dose" reading.',
      source: 'NASA / JPL',
      url: 'https://www.nasa.gov/solar-system/planets/mars/nasa-watches-mars-light-up-during-epic-solar-storm'
    },
    {
      title: 'Earth to Mars message delay',
      detail: 'Messages take 4 to 24 minutes to travel between Earth and Mars, each way.',
      usedIn: 'The "Ask Mission Control" button, which costs crew hours.',
      source: 'NASA',
      url: 'https://www.nasa.gov/centers-and-facilities/goddard/space-communications-7-things-you-need-to-know/'
    },
    {
      title: 'Real mission stories',
      detail: 'Apollo 13 (1970), the InSight lander (2018 to 2022) and the International Space Station (2015 and 2020).',
      usedIn: 'The "Real mission" box at the end of each case. Each one links to its NASA page.',
      source: 'NASA',
      url: 'https://www.nasa.gov/'
    }
  ],

  comingSoonCases: [],

  cases: {
    dimDay: {
      title: 'Dim Day',
      tag: 'Tutorial',
      alarm: 'Solar power is way below normal',
      briefing: [
        { who: 'omar', text: 'The solar panels are making way less power. The battery never fills up.' },
        { who: 'layla', text: 'Find out why. Looking is free, but tests cost crew time.' }
      ],
      choice: {
        question: 'The battery is low tonight. What about the science lab?',
        options: [
          { name: 'Switch the lab off', note: 'The lab crew can help you investigate', nextSol: 'The battery stayed safe all night, but a whole sol of lab work was lost.' },
          { name: 'Keep the lab running', note: 'The experiments keep going', nextSol: 'The experiments finished, but the battery hit its reserve and the greenhouse heater was cut for a few hours.' }
        ]
      },
      suspects: {
        dust: { name: 'Dust on the panels', note: 'Mars dust gets on everything' },
        storm: { name: 'Dust storm', note: 'A dusty sky blocks the Sun' },
        wiring: { name: 'Broken wiring', note: 'Power gets lost on the way' },
        meter: { name: 'Broken power meter', note: 'Power is fine, the number is wrong' }
      },
      wrongCall: {
        dust: { who: 'omar', text: 'I brushed a panel clean. It made no difference.' },
        storm: { who: 'houston', text: 'The sky is clear over the base. It is not a storm.' },
        wiring: { who: 'omar', text: 'I swapped a cable. Still low power.' },
        meter: { who: 'omar', text: 'The new meter says the same thing.' }
      },
      tests: {
        sky: {
          name: 'Check the sky for dust',
          desc: 'Above 2 means a dust storm.',
          options: ['Dusty: a storm', 'Clear: no storm'],
          results: ['The sky is full of dust. A storm is blocking the Sun.', 'The sky is clear. No storm is blocking the Sun.']
        },
        compare: {
          name: 'Clean one panel and compare',
          desc: 'Brush one panel. Leave the one next to it dusty.',
          options: ['Clean one makes more', 'Both the same'],
          results: ['The clean panel makes almost double. Only the dust was different, so this is a fair test.', 'Cleaning made no difference. The dust on the panels is not the problem.']
        },
        wiring: {
          name: 'Test the wiring',
          desc: 'Above 1 ohm means a broken wire.',
          options: ['One wire is bad', 'All wires are fine'],
          results: ['One wire is damaged.', 'All six wires are fine.']
        },
        meter: {
          name: 'Try a spare power meter',
          desc: 'Compare it with the old meter.',
          options: ['Spare reads higher', 'Both agree'],
          results: ['The old meter was wrong.', 'Both meters agree. The power really is low.']
        }
      },
      chains: {
        dust: ['Dust covers the panels', 'Less sunlight gets in', 'The panels make half the power', 'The battery never fills up'],
        storm: ['A dust storm fills the sky', 'Less sunlight gets through', 'The panels make half the power', 'The battery never fills up']
      },
      decoys: {
        dust: 'A dust storm darkens the sky',
        storm: 'Dust covers the panels'
      },
      fixes: [
        { name: 'Clean all six panels', fixed: 'Power is back to normal by noon!', wrong: 'The panels are spotless, but the sky is still too dark.' },
        { name: 'Turn off the lab to save power', fixed: 'Good call. The base waits out the storm on low power, and the sky clears a few sols later.', symptom: 'That saves power, but the panels are still dusty.' },
        { name: 'Replace the wiring', wrong: 'New wires, same low power.' }
      ],
      fact: 'When NASA\'s InSight lander touched down on Mars in 2018, its solar panels made about 5,000 watt-hours each sol. By spring 2022, dust had cut that to about 500. It had no wipers, and NASA expected the dust to end the mission by the end of 2022.',
      source: 'NASA'
    },

    coldLettuce: {
      title: 'Cold Lettuce',
      tag: '',
      alarm: 'The lettuce has almost stopped growing',
      briefing: [
        { who: 'sara', text: 'The lettuce was fine two days ago. Now it\'s droopy and dark.' },
        { who: 'sara', text: 'The grow lights are on, at least.' },
        { who: 'layla', text: 'Find the real cause, not just the symptom.' }
      ],
      choice: {
        question: 'It will be very cold tonight. Move the lettuce trays into the habitat?',
        options: [
          { name: 'Move them', note: 'Carrying them takes time', nextSol: 'The lettuce stayed warm overnight. The habitat smelled like salad, though.' },
          { name: 'Leave them', note: 'No time spent', nextSol: 'The lettuce lost a few more leaves before your fix kicked in.' }
        ]
      },
      suspects: {
        lights: { name: 'Grow lights failing', note: 'Plants need strong light' },
        water: { name: 'Water pump clogged', note: 'Dry roots wilt fast' },
        heater: { name: 'Heater broken', note: 'Lettuce hates the cold' },
        battery: { name: 'Weak battery', note: 'Batteries wear out' },
        seeds: { name: 'Bad seeds', note: 'Some seeds grow badly' },
        sensor: { name: 'Broken growth sensor', note: 'Maybe the plants are fine' }
      },
      wrongCall: {
        lights: { who: 'sara', text: 'New bulbs, same droopy lettuce.' },
        water: { who: 'sara', text: 'I cleaned the pump. The soil was already wet.' },
        heater: { who: 'omar', text: 'I swapped the heater. The lettuce is still droopy.' },
        battery: { who: 'omar', text: 'The battery passed its test. It\'s fine.' },
        seeds: { who: 'sara', text: 'The new seedlings are drooping too.' },
        sensor: { who: 'sara', text: 'I measured a leaf by hand. The sensor was right.' }
      },
      tests: {
        ghTemp: {
          name: 'Check the greenhouse temperature',
          desc: 'Below 10 °C is too cold for lettuce.',
          options: ['Warm all the time', 'Cold at night', 'Cold all the time'],
          results: ['The greenhouse stays warm day and night.', 'Warm in the day, freezing at night. Why only at night?', 'It is cold all the time.']
        },
        lights: {
          name: 'Test the grow lights',
          desc: 'Turn them on full and measure.',
          options: ['Full brightness', 'Dim or flickering'],
          results: ['The lights work fine.', 'The lights are failing.']
        },
        soil: {
          name: 'Check the soil',
          desc: 'Below 40% is too dry.',
          options: ['Wet enough', 'Too dry'],
          results: ['The soil is wet. The pump works.', 'The soil is bone dry. The roots are thirsty!']
        },
        heater: {
          name: 'Test the heater',
          desc: 'Plug it straight into power.',
          options: ['It heats up', 'It stays cold'],
          results: ['The heater works when it gets power.', 'It stays cold even with power. The heater is broken!']
        },
        powerLog: {
          name: 'Read the power manager\'s log',
          desc: 'The power manager decides which machines get power.',
          options: ['Heater on every night', 'Heater turned off at night'],
          results: ['The heater had power every night.', 'It turned the heater off at night. It only does that when the battery can\'t last until morning.']
        },
        batteryTest: {
          name: 'Test the battery',
          desc: 'A healthy battery lasts 10 hours on this test.',
          options: ['Lasts 10 hours', 'Runs out early'],
          results: ['It lasts the full 10 hours. The battery is healthy.', 'Empty after 6 hours. It only holds about 60% of what it should.']
        },
        sensor: {
          name: 'Try a spare growth sensor',
          desc: 'Compare it with the old sensor.',
          options: ['Both agree', 'Spare reads normal'],
          results: ['Both agree. The lettuce really is growing slowly.', 'The old sensor was wrong.']
        }
      },
      chains: {
        battery: ['The battery wears out', 'It can\'t last the night', 'The heater gets switched off', 'The greenhouse freezes at night', 'The cold lettuce grows slowly'],
        heater: ['The heater breaks', 'It stops making heat', 'The greenhouse freezes at night', 'The cold lettuce grows slowly'],
        water: ['The water pump clogs up', 'Water stops reaching the roots', 'The soil dries out', 'The thirsty lettuce droops']
      },
      decoys: {
        battery: 'The grow lights get dim',
        heater: 'The battery wears out',
        water: 'The heater breaks'
      },
      fixes: [
        { name: 'Put in the spare battery', fixed: 'The heater stays on all night. The lettuce perks up!', wrong: 'New battery, same droopy lettuce.' },
        { name: 'Cover the plants at night', symptom: 'It helps a little, but the real problem is still there.', wrong: 'Warm leaves, but the roots are still thirsty.' },
        { name: 'Replace the heater', fixed: 'The new heater keeps the greenhouse warm all night. The lettuce perks up!', wrong: 'New heater, same droopy lettuce.' },
        { name: 'Leave the lights on longer', wrong: 'That just uses more power. Still droopy.' },
        { name: 'Unclog the water pump', fixed: 'Water is flowing again. By the next sol the lettuce perks up!', wrong: 'The pump was fine. Still droopy.' }
      ],
      fact: 'Real missions switch things off to save power. In January 2022 a dust storm cut the power of NASA\'s InSight lander, so it went into safe mode and turned off its science instruments until the sky cleared.',
      source: 'NASA'
    },

    stuffyAir: {
      title: 'Stuffy Air',
      tag: '',
      alarm: 'CO₂ is way above normal',
      briefing: [
        { who: 'sara', text: 'Is it just me or is it really stuffy in here? I\'ve had a headache all day.' },
        { who: 'omar', text: 'Same. I can\'t stop yawning.' },
        { who: 'layla', text: 'CO₂ is way up. Find out why before it gets worse.' }
      ],
      choice: {
        question: 'Everyone has a headache. Let the crew rest?',
        options: [
          { name: 'Rest', note: 'Resting people breathe out less CO₂', nextSol: 'The crew woke up feeling better, and the CO₂ rose more slowly overnight.' },
          { name: 'Keep working', note: 'No time lost', nextSol: 'Lots got done, but Omar\'s headache lasted into the next sol.' }
        ]
      },
      suspects: {
        fans: { name: 'Air fans broken', note: 'Stale air just sits there' },
        sensor: { name: 'Broken CO₂ sensor', note: 'Maybe the air is fine' },
        cartridge: { name: 'Scrubber cartridge full', note: 'It soaks up CO₂ until it can\'t' },
        exercise: { name: 'Crew working out more', note: 'Hard breathing makes more CO₂' },
        plants: { name: 'Plants not helping', note: 'Plants eat CO₂' }
      },
      wrongCall: {
        fans: { who: 'omar', text: 'The fans are blowing fine. Still stuffy.' },
        sensor: { who: 'sara', text: 'My handheld meter says the same. The CO₂ really is high.' },
        cartridge: { who: 'omar', text: 'The cartridge is still light. It isn\'t full.' },
        exercise: { who: 'layla', text: 'Nobody has been working out more than usual.' },
        plants: { who: 'sara', text: 'The lettuce is growing great. It\'s not the plants.' }
      },
      tests: {
        co2Meter: {
          name: 'Check with a handheld CO₂ meter',
          desc: 'Does it agree with the base sensor?',
          options: ['They agree', 'Handheld reads normal'],
          results: ['Both say the same thing. The CO₂ really is high.', 'The base sensor was wrong.']
        },
        vents: {
          name: 'Test the air vents',
          desc: 'Measure how hard each vent blows. Under 50% is too weak.',
          options: ['All blowing fine', 'Some are weak'],
          results: ['All four vents are blowing normally.', 'The vents are barely blowing. The fans are broken!']
        },
        exercise: {
          name: 'Read the exercise log',
          desc: 'More exercise means more breathing.',
          options: ['Same as usual', 'Way more than usual'],
          results: ['The crew worked out the same as always.', 'The crew worked out way more than usual.']
        },
        scrubber: {
          name: 'Test the CO₂ scrubber',
          desc: 'Measure CO₂ in the air going in and coming out. A good scrubber makes it much lower.',
          options: ['Out is much lower', 'Hardly any difference'],
          results: ['The air coming out is much cleaner. The scrubber itself works.', 'The air coming out is nearly as bad as the air going in. The scrubber has stopped cleaning.']
        },
        cartridge: {
          name: 'Weigh the scrubber cartridge',
          desc: 'A cartridge gets heavier as it fills up with CO₂.',
          options: ['Light, like a new one', 'Heavy, it\'s full'],
          results: ['It is light, like a new one. Not full.', 'It\'s full. It can\'t soak up any more CO₂.']
        }
      },
      chains: {
        cartridge: ['The scrubber cartridge fills up', 'It stops soaking up CO₂', 'CO₂ builds up in the air', 'The crew get headaches'],
        fans: ['The air fans break', 'Stale air stops reaching the scrubber', 'CO₂ builds up in the air', 'The crew get headaches']
      },
      decoys: {
        cartridge: 'The air fans stop blowing',
        fans: 'The scrubber cartridge fills up'
      },
      fixes: [
        { name: 'Give the crew headache pills', symptom: 'Headaches gone, but the CO₂ is still going up.' },
        { name: 'Turn the fans up', wrong: 'Turning the fans up didn\'t help. The CO₂ is still high.' },
        { name: 'Replace the fan motors', fixed: 'Air is moving again, so the scrubber can do its job. The air is clear by evening!', wrong: 'New fans, same CO₂.' },
        { name: 'Tape a spare cartridge into the scrubber', fixed: 'The spares are the wrong shape, but tape sorts that out. The air is clear in an hour!', wrong: 'Fresh cartridge, but the CO₂ is still high.' }
      ],
      fact: 'On Apollo 13 in 1970, CO₂ built up inside the lunar module. The spare filters were square but the holes were round, so Mission Control came up with a fix using plastic bags, cardboard and tape. The crew made it home.',
      source: 'NASA'
    },

    lyingSensor: {
      title: 'Oxygen Alarm',
      tag: '',
      alarm: 'Oxygen alarm! The sensor says it is dropping',
      briefing: [
        { who: 'layla', text: 'The oxygen alarm says we\'re running low.' },
        { who: 'sara', text: 'But I feel fine. No headache, nothing.' },
        { who: 'omar', text: 'Every time we blamed a sensor before, it wasn\'t the sensor. Just saying.' }
      ],
      choice: {
        question: 'The rules say: when the oxygen alarm goes off, masks on. Follow the rules?',
        options: [
          { name: 'Masks on', note: 'Safe, but slow to work in', nextSol: 'The masks used up two oxygen bottles. Safe, but they need replacing.' },
          { name: 'Skip the masks', note: 'No time lost', nextSol: 'Mission Control was not happy. The rules are there in case the alarm is real.' }
        ]
      },
      suspects: {
        maker: { name: 'Oxygen maker broken', note: 'It splits water to make oxygen' },
        leak: { name: 'Air leaking out', note: 'Oxygen escapes with the air' },
        crew: { name: 'Crew using more oxygen', note: 'Busy people breathe more' },
        sensor: { name: 'Oxygen sensor broken', note: 'Sensors get old and drift' }
      },
      wrongCall: {
        maker: { who: 'omar', text: 'The oxygen maker is working perfectly. That wasn\'t it.' },
        leak: { who: 'houston', text: 'Cabin pressure is rock steady. There\'s no leak.' },
        crew: { who: 'sara', text: 'We\'re breathing normally. We feel great, actually.' },
        sensor: { who: 'omar', text: 'I tested the sensor. It reads correctly.' }
      },
      tests: {
        o2Meter: {
          name: 'Check with a handheld oxygen meter',
          desc: 'Compare it with the sensor on the wall.',
          options: ['Both read low', 'Handheld reads normal'],
          results: ['The handheld says it\'s low too. The oxygen really is dropping!', 'The handheld says 21%, totally normal. Only the wall sensor says it\'s low.']
        },
        maker: {
          name: 'Check the oxygen maker',
          desc: 'How much oxygen did it make each sol?',
          options: ['Same as usual', 'Much less than usual'],
          results: ['It made the same amount as always.', 'It is making way less oxygen than usual!']
        },
        blood: {
          name: 'Check the crew\'s blood oxygen',
          desc: 'A finger clip measures the oxygen in your blood. Under 90% is too low.',
          options: ['Everyone is normal', 'Someone is low'],
          results: ['Everyone is fine, for now. Their bodies are getting enough oxygen.', 'Someone is low.']
        },
        testGas: {
          name: 'Test the sensor with a test gas',
          desc: 'Puff gas with exactly 20.9% oxygen at the sensor.',
          options: ['It reads 20.9%', 'It reads too low'],
          results: ['The sensor reads 20.9%, exactly right. It is not lying.', 'The gas is 20.9% but the sensor says 17%. The sensor is lying!']
        }
      },
      chains: {
        sensor: ['The oxygen sensor gets old', 'It starts reading too low', 'The computer thinks oxygen is dropping', 'The oxygen alarm goes off'],
        maker: ['The oxygen maker breaks down', 'No new oxygen is made', 'The crew slowly use up the oxygen', 'The oxygen alarm goes off']
      },
      decoys: {
        sensor: 'Air leaks out of the base',
        maker: 'The oxygen sensor gets old'
      },
      fixes: [
        { name: 'Open the backup oxygen tanks', symptom: 'Oxygen goes back up, but the backup tanks will run out.', wrong: 'Now there\'s too much oxygen, and that makes fires easier to start!' },
        { name: 'Put in a new oxygen sensor', fixed: 'It reads 20.9%. Alarm off. Everyone can relax.', wrong: 'New sensor, same low oxygen. The reading was right.' },
        { name: 'Switch the alarm off', symptom: 'It\'s quiet now, but you still can\'t trust that sensor.', wrong: 'It\'s quiet, but the oxygen is still dropping. Dangerous!' },
        { name: 'Repair the oxygen maker', fixed: 'The oxygen maker is splitting water again. Oxygen is back to 20.9%.', wrong: 'The oxygen maker was fine. The alarm is still going.' }
      ],
      fact: 'In January 2015 an alarm on the International Space Station warned of a toxic ammonia leak, so the crew moved to the Russian side. NASA found it was a false alarm, set off by a wrong signal from a computer box.',
      source: 'NASA'
    },

    slowLeak: {
      title: 'Slow Leak',
      tag: '',
      alarm: 'Cabin pressure is dropping',
      briefing: [
        { who: 'omar', text: 'Cabin pressure keeps going down. Slowly, but it won\'t stop.' },
        { who: 'layla', text: 'And the spare air tank is emptying fast trying to keep up.' },
        { who: 'sara', text: 'My ears popped this morning. Weird.' }
      ],
      choice: {
        question: 'Pressure is dropping. Top the air up from the spare tank now?',
        options: [
          { name: 'Top it up', note: 'Everyone feels better and works faster', nextSol: 'Everyone felt fine, but the spare tank is much lower now.' },
          { name: 'Save the tank', note: 'Popping ears slow everyone down', nextSol: 'The spare tank is still there for a real emergency.' }
        ]
      },
      suspects: {
        hole: { name: 'Hole in the wall', note: 'Tiny space rocks hit Mars' },
        seal: { name: 'Airlock door not sealing', note: 'Doors need a tight seal' },
        gauge: { name: 'Broken pressure gauge', note: 'Maybe the air is fine' },
        cold: { name: 'The base got colder', note: 'Cold air takes up less space' }
      },
      wrongCall: {
        hole: { who: 'omar', text: 'I listened to every wall. No holes anywhere.' },
        seal: { who: 'sara', text: 'The airlock seal is spotless. That\'s not it.' },
        gauge: { who: 'omar', text: 'The spare gauge reads the same. The air really is leaking.' },
        cold: { who: 'sara', text: 'It\'s 21 °C in here, same as always.' }
      },
      tests: {
        pressureGauge: {
          name: 'Check with a spare pressure gauge',
          desc: 'Does it agree with the old one?',
          options: ['They agree', 'Spare reads normal'],
          results: ['Both gauges agree. Air really is getting out.', 'The old gauge was wrong.']
        },
        rooms: {
          name: 'Close the doors between rooms',
          desc: 'Shut every door, then see which room loses air.',
          options: ['Every room loses air', 'Only one room does'],
          results: ['Every room is losing air.', 'Only one room is losing air. Look at the chart to see which one!']
        },
        hull: {
          name: 'Listen to the walls for leaks',
          desc: 'A listening tool can hear leaking air hiss. Checking every wall takes a while.',
          options: ['A loud hiss somewhere', 'Quiet everywhere'],
          results: ['There\'s a loud hiss in the greenhouse wall. A tiny hole!', 'The habitat, lab and greenhouse walls are all quiet. No holes.']
        },
        seal: {
          name: 'Look at the airlock door seal',
          desc: 'Measure the gap around the rubber seal. Over 0.5 mm leaks.',
          options: ['Tight all the way round', 'A gap at the bottom'],
          results: ['The seal is tight all the way round.', 'There\'s red dust stuck in the bottom of the seal. Air is sneaking out through the gap.']
        }
      },
      chains: {
        seal: ['Dust gets stuck in the airlock seal', 'The door can\'t close tightly', 'Air slowly leaks out', 'Cabin pressure drops'],
        hole: ['A tiny space rock hits the greenhouse', 'It makes a pinhole in the wall', 'Air slowly leaks out', 'Cabin pressure drops']
      },
      decoys: {
        seal: 'A tiny space rock makes a hole',
        hole: 'Dust gets stuck in the airlock seal'
      },
      fixes: [
        { name: 'Pump in more air from the tank', symptom: 'Pressure goes back up, but it\'s still leaking and the tank is nearly empty.' },
        { name: 'Clean the seal and close the door', fixed: 'Pressure is holding steady. No more leak!', wrong: 'The seal was already clean. Still leaking.' },
        { name: 'Patch the leaking wall', fixed: 'The patch holds. Pressure is steady again!', wrong: 'There was no hole to patch. Still leaking.' }
      ],
      fact: 'In 2020 the space station had a slow air leak. The crew closed the hatches between modules so Mission Control could watch the air pressure in each one and work out where the air was escaping.',
      source: 'NASA'
    },

    stormIncoming: {
      title: 'Storm Incoming',
      tag: '',
      alarm: 'Storm shelter shield check failed',
      briefing: [
        { who: 'houston', text: 'Space weather alert! NASA\'s DONKI database shows a huge blast from the Sun, flying out at 2,678 km per second. It\'s the real storm that hit Mars on May 20, 2024.' },
        { who: 'omar', text: 'Bad news. The shelter walls are filled with water to block radiation, and they\'re half empty.' },
        { who: 'sara', text: 'Weird. I fixed the greenhouse pump yesterday and the plants have never looked better.' },
        { who: 'layla', text: 'We have 6 hours. Find out where that water went.' }
      ],
      choice: {
        question: 'The rover is parked outside. Drive it into the garage before the storm?',
        options: [
          { name: 'Bring it in', note: 'Takes a crew member away', nextSol: 'The rover was safe inside. Its cameras work perfectly.' },
          { name: 'Leave it outside', note: 'No time lost', nextSol: 'The rover\'s cameras filled with white specks from the radiation, just like Curiosity\'s did in May 2024.' }
        ]
      },
      suspects: {
        crack: { name: 'Shelter tank cracked', note: 'Water leaks out of cracks' },
        gauge: { name: 'Broken water gauge', note: 'Maybe the tank is full' },
        pump: { name: 'Pump on the wrong tank', note: 'Pipes can get mixed up' },
        drinking: { name: 'Crew drinking the shelter water', note: 'Thirsty crew?' }
      },
      wrongCall: {
        crack: { who: 'omar', text: 'The floor under the shelter is bone dry. No crack.' },
        gauge: { who: 'omar', text: 'I measured it by hand. It really is half empty.' },
        pump: { who: 'sara', text: 'The pump takes water from the main tank, like it should.' },
        drinking: { who: 'layla', text: 'We drink from the main tank. Nobody touched the shelter water.' }
      },
      tests: {
        dipstick: {
          name: 'Measure the water by hand',
          desc: 'Check the shelter tank with a dipstick.',
          options: ['It\'s full, the gauge was wrong', 'It really is low'],
          results: ['It\'s full. The gauge was wrong.', 'The dipstick agrees with the gauge. The water really is gone.']
        },
        floor: {
          name: 'Check under the shelter',
          desc: 'A leaking tank would make the floor wet.',
          options: ['Wet floor', 'Dry floor'],
          results: ['The floor is soaked! Water is leaking out of the tank.', 'Completely dry. The tank isn\'t leaking.']
        },
        flow: {
          name: 'Watch the shelter water pipe',
          desc: 'Is any water leaving the shelter tank through the pipe?',
          options: ['Nothing leaves', 'Water leaves twice a day'],
          results: ['No water leaves through the pipe.', 'Every morning and evening, water flows out. That\'s exactly when the plants get watered.']
        },
        pump: {
          name: 'Check the greenhouse pump',
          desc: 'Which tank is it taking water from?',
          options: ['The main tank', 'The shelter tank'],
          results: ['It takes water from the main tank, like it should.', 'It\'s hooked up to the shelter tank! The pipes got swapped when the pump was fixed.']
        }
      },
      chains: {
        pump: ['The pump gets hooked to the wrong tank', 'The plants drink the shelter\'s water', 'The shelter walls lose water', 'The shield check fails'],
        crack: ['The shelter tank cracks', 'Water leaks out under the floor', 'The shelter walls lose water', 'The shield check fails']
      },
      decoys: {
        pump: 'The solar storm cracks the tank',
        crack: 'The pump gets hooked to the wrong tank'
      },
      fixes: [
        { name: 'Hide in the shelter anyway', wrong: 'Half a shield isn\'t enough. Mission Control says no way.' },
        { name: 'Turn the greenhouse pump off', symptom: 'The water stops draining, but the walls are still half empty.', wrong: 'The tank keeps leaking anyway.' },
        { name: 'Swap the pipes back and refill the shelter', fixed: 'Shield check passed! Everyone is safe inside when the storm hits.', wrong: 'The pipes were fine. The tank is still losing water.' },
        { name: 'Seal the crack and refill the shelter', fixed: 'Crack sealed, tank full. Shield check passed! Everyone is safe inside.', wrong: 'There is no crack to seal.' }
      ],
      fact: 'On May 20, 2024 a huge solar storm hit Mars. NASA\'s Curiosity rover measured a radiation dose of 8,100 micrograys, about the same as 30 chest X-rays. Anyone standing outside would have needed a shelter.',
      source: 'NASA'
    }
  }
};
