const cases = [
  {
    id: 'dimDay',
    guide: 'full',
    hours: 8,
    readings: [
      { chart: 'solar', peak: true },
      { chart: 'battery' },
      { chart: 'insight' },
      { chart: 'weather' }
    ],
    suspects: ['dust', 'storm', 'wiring', 'meter'],
    tests: [
      { id: 'sky', chart: 'sky', cost: 1 },
      { id: 'compare', chart: 'panels', cost: 2 },
      { id: 'wiring', chart: 'wiring', cost: 1 },
      { id: 'meter', chart: 'meter', cost: 1 }
    ],
    causes: [
      {
        root: 'dust', problem: 'dust', warn: ['solar', 'battery'],
        answers: { sky: 1, compare: 0, wiring: 1, meter: 1 },
        expertPath: ['sky', 'compare']
      },
      {
        root: 'storm', problem: 'storm', warn: ['solar', 'battery'],
        answers: { sky: 0, compare: 1, wiring: 1, meter: 1 },
        expertPath: ['sky']
      }
    ],
    fixes: [
      { cost: 2, fixes: ['dust'] },
      { cost: 1, fixes: ['storm'], helps: ['dust'] },
      { cost: 3 }
    ],
    choice: [{ hours: 1 }, { hours: 0 }],
    link: 'https://www.nasa.gov/missions/insight/nasas-insight-still-hunting-marsquakes-as-power-levels-diminish'
  },

  {
    id: 'coldLettuce',
    guide: 'look',
    hours: 10,
    readings: [
      { chart: 'growth' },
      { chart: 'battery' },
      { chart: 'solar', peak: true },
      { chart: 'weather' }
    ],
    suspects: ['lights', 'water', 'heater', 'battery', 'seeds', 'sensor'],
    tests: [
      { id: 'ghTemp', chart: 'greenhouse', cost: 1 },
      { id: 'lights', chart: 'lights', cost: 1 },
      { id: 'soil', chart: 'soil', cost: 1 },
      { id: 'heater', chart: 'heaterTest', cost: 2 },
      { id: 'powerLog', chart: 'powerLog', cost: 1 },
      { id: 'batteryTest', chart: 'batteryTest', cost: 2 },
      { id: 'sensor', chart: 'growthSensor', cost: 1 }
    ],
    causes: [
      {
        root: 'battery', problem: 'battery', warn: ['growth'],
        answers: { ghTemp: 1, lights: 0, soil: 0, heater: 0, powerLog: 1, batteryTest: 1, sensor: 0 },
        expertPath: ['ghTemp', 'powerLog', 'batteryTest']
      },
      {
        root: 'heater', problem: 'heater', warn: ['growth'],
        answers: { ghTemp: 1, lights: 0, soil: 0, heater: 1, powerLog: 0, batteryTest: 0, sensor: 0 },
        expertPath: ['ghTemp', 'heater']
      },
      {
        root: 'water', problem: 'clog', warn: ['growth'],
        answers: { ghTemp: 0, lights: 0, soil: 1, heater: 0, powerLog: 0, batteryTest: 0, sensor: 0 },
        expertPath: ['soil']
      }
    ],
    fixes: [
      { cost: 2, fixes: ['battery'] },
      { cost: 1, helps: ['battery', 'heater'] },
      { cost: 2, fixes: ['heater'] },
      { cost: 1 },
      { cost: 1, fixes: ['water'] }
    ],
    choice: [{ hours: -1 }, { hours: 0 }],
    link: 'https://www.nasa.gov/solar-system/nasas-insight-sees-power-levels-stabilize-after-dust-storm/'
  },

  {
    id: 'stuffyAir',
    hours: 7,
    readings: [
      { chart: 'co2' },
      { chart: 'oxygen' },
      { chart: 'growth' },
      { chart: 'weather' }
    ],
    suspects: ['fans', 'sensor', 'cartridge', 'exercise', 'plants'],
    tests: [
      { id: 'co2Meter', chart: 'co2Meter', cost: 1 },
      { id: 'vents', chart: 'vents', cost: 1 },
      { id: 'exercise', chart: 'exercise', cost: 1 },
      { id: 'scrubber', chart: 'scrubber', cost: 2 },
      { id: 'cartridge', chart: 'cartridge', cost: 1 }
    ],
    causes: [
      {
        root: 'cartridge', problem: 'cartridge', warn: ['co2'],
        answers: { co2Meter: 0, vents: 0, exercise: 0, scrubber: 1, cartridge: 1 },
        expertPath: ['scrubber', 'cartridge']
      },
      {
        root: 'fans', problem: 'fans', warn: ['co2'],
        answers: { co2Meter: 0, vents: 1, exercise: 0, scrubber: 0, cartridge: 0 },
        expertPath: ['vents']
      }
    ],
    fixes: [
      { cost: 1, helps: ['cartridge', 'fans'] },
      { cost: 1 },
      { cost: 2, fixes: ['fans'] },
      { cost: 1, fixes: ['cartridge'] }
    ],
    choice: [{ hours: -1 }, { hours: 0 }],
    link: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-350/ch-13-4.html'
  },

  {
    id: 'lyingSensor',
    hours: 6,
    readings: [
      { chart: 'oxygen' },
      { chart: 'pressure' },
      { chart: 'co2' },
      { chart: 'weather' }
    ],
    suspects: ['maker', 'leak', 'crew', 'sensor'],
    tests: [
      { id: 'o2Meter', chart: 'o2Meter', cost: 1 },
      { id: 'maker', chart: 'o2Maker', cost: 1 },
      { id: 'blood', chart: 'crewBlood', cost: 1 },
      { id: 'testGas', chart: 'testGas', cost: 1 }
    ],
    causes: [
      {
        root: 'sensor', problem: 'sensor', warn: ['oxygen'],
        answers: { o2Meter: 1, maker: 0, blood: 0, testGas: 1 },
        expertPath: ['o2Meter', 'testGas']
      },
      {
        root: 'maker', problem: 'maker', warn: ['oxygen'],
        answers: { o2Meter: 0, maker: 1, blood: 0, testGas: 0 },
        expertPath: ['o2Meter', 'maker']
      }
    ],
    fixes: [
      { cost: 1, helps: ['maker'] },
      { cost: 1, fixes: ['sensor'] },
      { cost: 1, helps: ['sensor'] },
      { cost: 2, fixes: ['maker'] }
    ],
    choice: [{ hours: -1 }, { hours: 0 }],
    link: 'https://www.nasa.gov/blogs/stationreport/2015/01/14/iss-daily-summary-report-01-14-15/'
  },

  {
    id: 'slowLeak',
    hours: 8,
    readings: [
      { chart: 'pressure' },
      { chart: 'airTank' },
      { chart: 'habitat' },
      { chart: 'weather' }
    ],
    suspects: ['hole', 'seal', 'gauge', 'cold'],
    tests: [
      { id: 'pressureGauge', chart: 'pressureGauge', cost: 1 },
      { id: 'rooms', chart: 'rooms', cost: 2 },
      { id: 'hull', chart: 'hullScan', cost: 2 },
      { id: 'seal', chart: 'doorSeal', cost: 1 }
    ],
    causes: [
      {
        root: 'seal', problem: 'seal', warn: ['pressure', 'airTank'],
        answers: { pressureGauge: 0, rooms: 1, hull: 1, seal: 1 },
        expertPath: ['rooms', 'seal']
      },
      {
        root: 'hole', problem: 'hole', warn: ['pressure', 'airTank'],
        answers: { pressureGauge: 0, rooms: 1, hull: 0, seal: 0 },
        expertPath: ['rooms', 'hull']
      }
    ],
    fixes: [
      { cost: 1, helps: ['seal', 'hole'] },
      { cost: 1, fixes: ['seal'] },
      { cost: 2, fixes: ['hole'] }
    ],
    choice: [{ hours: 1 }, { hours: -1 }],
    link: 'https://www.nasa.gov/blogs/spacestation/2020/08/20/crew-spending-weekend-in-stations-russian-segment/'
  },

  {
    id: 'stormIncoming',
    hours: 6,
    readings: [
      { chart: 'shelter' },
      { chart: 'mainTank' },
      { chart: 'radiation' },
      { chart: 'weather' }
    ],
    suspects: ['crack', 'gauge', 'pump', 'drinking'],
    tests: [
      { id: 'dipstick', chart: 'dipstick', cost: 1 },
      { id: 'floor', chart: 'floor', cost: 1 },
      { id: 'flow', chart: 'flow', cost: 1 },
      { id: 'pump', chart: 'pumpTanks', cost: 1 }
    ],
    causes: [
      {
        root: 'pump', problem: 'pump', warn: ['shelter'],
        answers: { dipstick: 1, floor: 1, flow: 1, pump: 1 },
        expertPath: ['flow', 'pump']
      },
      {
        root: 'crack', problem: 'crack', warn: ['shelter'],
        answers: { dipstick: 1, floor: 0, flow: 0, pump: 0 },
        expertPath: ['floor']
      }
    ],
    fixes: [
      { cost: 1 },
      { cost: 1, helps: ['pump'] },
      { cost: 2, fixes: ['pump'] },
      { cost: 2, fixes: ['crack'] }
    ],
    choice: [{ hours: -1 }, { hours: 0 }],
    link: 'https://www.nasa.gov/solar-system/planets/mars/nasa-watches-mars-light-up-during-epic-solar-storm'
  }
];
