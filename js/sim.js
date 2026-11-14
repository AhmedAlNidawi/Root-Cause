function runOutpost(problem) {
  let dust = 1;
  let batterySize = 80;
  let skyDust = 0.6;
  if (problem === 'dust') dust = 0.55;
  if (problem === 'battery') batterySize = 48;
  if (problem === 'storm') skyDust = 2.4;

  let seed = 11;
  function random() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  } //had multiple errors here but should be fixed now

  let charge = batterySize * 0.9;
  let greenhouse = 20;
  let plants = 1;
  let soil = 62;
  let heaterOn = true;

  let data = {
    problem: problem,
    batterySize: batterySize,
    solar: [],
    battery: [],
    greenhouse: [],
    heater: [],
    sky: [],
    growth: [],
    soil: [],
    cleanPanel: [],
    dustyPanel: []
  };

  for (let hour = 0; hour < 48; hour++) {
    let time = hour % 24;
    let night = time < 6 || time >= 18;

    let sun = 0;
    if (!night) sun = Math.sin(Math.PI * (time - 6) / 12);

    let sky = skyDust + (random() - 0.5) * 0.06;
    let cleanPower = 20 * sun * Math.exp(-0.3 * sky);
    let solar = cleanPower * dust;

    let lightsOn = time >= 6 && time < 22;

    if (time === 18) {
      let nightUse = 12 * 3.1 + 4 * 1.8;
      heaterOn = charge - nightUse > batterySize * 0.2;
    }
    if (time === 6) heaterOn = true;

    let use = 1.2;
    if (night) use += 0.9;
    else use += 0.4;
    if (lightsOn) use += 1.8;
    if (time >= 8 && time < 17) use += 1.2;
    if (night && heaterOn) use += 1.0;

    charge = charge + solar - use;
    if (charge > batterySize) charge = batterySize;
    if (charge < 0) charge = 0;

    let target = 19;
    if (sun > 0.15) target = 22;
    if (night && (!heaterOn || problem === 'heater')) target = 2;
    greenhouse += 0.35 * (target - greenhouse);

    if (problem === 'clog') soil -= 0.7;

    if (greenhouse < 10 || soil < 40) plants = Math.max(0.3, plants - 0.04);
    else plants = Math.min(1, plants + 0.004);

    let light = 0;
    if (lightsOn) light = 1;
    else if (sun > 0.3) light = 0.35;

    let warmth = 1;
    if (greenhouse < 16) warmth = Math.max(0, (greenhouse - 4) / 12);

    data.solar.push(round(solar + (random() - 0.5) * 0.25 * sun, 2));
    data.battery.push(round(charge / batterySize * 100, 1));
    data.greenhouse.push(round(greenhouse + (random() - 0.5) * 0.6, 1));
    data.heater.push(night ? (heaterOn ? 1 : 0) : null);
    data.sky.push(round(sky, 2));
    data.growth.push(light * warmth * plants);
    data.soil.push(round(soil + Math.sin(hour / 4) * 3, 1));
    data.cleanPanel.push(round(cleanPower / 6, 2));
    data.dustyPanel.push(round(solar / 6, 2));
  }

  Object.assign(data, runLifeSupport(problem));
  return data;
}

function runLifeSupport(problem) {
  let co2 = 2600;
  let cartridge = 0.1;
  if (problem === 'cartridge') cartridge = 0.7;
  let airflow = 1;
  if (problem === 'fans') airflow = 0.3;
  let drift = 0;
  let oxygenLost = 0;
  let pressure = 101;
  let airTank = 90;
  let shelter = 100;
  let mainTank = 80;

  let air = {
    co2: [],
    scrubberOut: [],
    oxygen: [],
    o2Sensor: [],
    pressure: [],
    airTank: [],
    shelter: [],
    mainTank: [],
    shelterFlow: [],
    floor: []
  };

  for (let hour = 0; hour < 48; hour++) {
    let time = hour % 24;
    let night = time < 6 || time >= 18;
    let wobble = Math.sin(hour * 1.3);

    let breathing = night ? 150 : 250;
    let cleaned = (1 - cartridge) * (co2 - 400) * 0.1 * airflow;
    co2 = co2 + breathing - cleaned;
    if (problem === 'cartridge') cartridge = Math.min(0.97, cartridge + 0.006);
    air.co2.push(Math.round(co2 + wobble * 40));
    air.scrubberOut.push(Math.round(400 + (co2 - 400) * cartridge));

    if (problem === 'maker') oxygenLost += 0.035;
    if (problem === 'sensor') drift += 0.08;
    let oxygen = 20.9 - oxygenLost + wobble * 0.1;
    air.oxygen.push(round(oxygen, 1));
    air.o2Sensor.push(round(oxygen - drift, 1));

    if (problem === 'seal' || problem === 'hole') {
      pressure -= 0.07;
      airTank -= 0.6;
    } else {
      airTank -= 0.04;
    }
    air.pressure.push(round(pressure + wobble * 0.05, 2));
    air.airTank.push(round(airTank, 1));

    let watering = time === 7 || time === 19;
    let flow = 0;
    mainTank -= 0.2;
    if (watering && problem === 'pump') {
      shelter -= 14;
      flow = 30;
    } else if (watering) {
      mainTank -= 6;
    }
    if (problem === 'crack') shelter -= 1.15;
    air.shelter.push(round(shelter, 1));
    air.mainTank.push(round(mainTank, 1));
    air.shelterFlow.push(flow);

    let wet = 2 + wobble * 0.5;
    if (problem === 'crack') wet = Math.min(70, 2 + hour * 1.6) + wobble;
    air.floor.push(round(wet, 1));
  }

  air.cartridge = cartridge;
  return air;
}

const curiosityWeather = [
  { sol: 4189, low: -68, high: -5, pressure: 861 },
  { sol: 4190, low: -69, high: -3, pressure: 860 }
];

function marsWeather() {
  let temps = [];
  for (let h = 0; h < 48; h++) {
    let day = curiosityWeather[Math.floor(h / 24)];
    let nextLow = curiosityWeather[1].low;
    let time = h % 24;
    let temp;
    if (time < 6) temp = smooth(day.high, day.low, (time + 10) / 16);
    else if (time <= 14) temp = smooth(day.low, day.high, (time - 6) / 8);
    else temp = smooth(day.high, nextLow, (time - 14) / 16);
    temps.push(round(temp, 1));
  }
  return temps;
}

function smooth(from, to, part) {
  return from + (to - from) * (1 - Math.cos(Math.PI * part)) / 2;
}

function round(num, places) {
  return Number(num.toFixed(places));
}

function dailyGrowth(data, normal) {
  let days = [];
  for (let day = 0; day < 2; day++) {
    let mine = 0;
    let usual = 0;
    for (let h = day * 24; h < day * 24 + 24; h++) {
      mine += data.growth[h];
      usual += normal.growth[h];
    }
    days.push(Math.round(mine / usual * 100));
  }
  return days;
}

function hourly(fn) {
  let list = [];
  for (let h = 0; h < 48; h++) list.push(fn(h));
  return list;
}

function getChart(name, data, normal) {
  let w = text.chart;
  let sols = [fill(w.sol, { n: 1 }), fill(w.sol, { n: 2 })];
  let problem = data.problem;

  switch (name) {
    case 'solar':
      return {
        unit: w.kW, min: 0, max: 20, hours: true, help: ['kW'],
        lines: [{ name: w.solar, data: data.solar }, { name: w.normal, data: normal.solar, normal: true }]
      };

    case 'battery':
      return {
        unit: w.charge, min: 0, max: 100, hours: true, limit: 20, limitLabel: w.reserve,
        lines: [{ name: w.battery, data: data.battery }, { name: w.normal, data: normal.battery, normal: true }]
      };

    case 'insight':
      return {
        unit: w.whPerSol, min: 0, max: 6000, bars: true, labels: [w.insightLanding, w.insightLate], help: ['Wh'],
        lines: [{ name: w.insight, data: [5000, 500] }]
      };

    case 'weather':
      return {
        unit: w.degrees, min: -100, max: 20, hours: true, note: w.weatherNote, help: ['Pa'],
        lines: [{ name: w.outsideAir, data: marsWeather() }]
      };

    case 'radiation':
      return {
        unit: w.uGy, min: 0, max: 9000, bars: true, labels: [w.normalSol, w.stormDay], warn: true,
        note: w.radiationNote, help: ['uGy'],
        lines: [{ name: w.radiation, data: [210, 8100] }]
      };

    case 'growth':
      return {
        unit: w.ofNormal, min: 0, max: 120, bars: true, labels: sols,
        lines: [{ name: w.growth, data: dailyGrowth(data, normal) }]
      };

    case 'habitat':
      return {
        unit: w.degrees, min: 0, max: 30, hours: true,
        lines: [{ name: w.habitat, data: hourly(h => round(21 + Math.sin(h * 1.7) * 0.4, 1)) }]
      };

    case 'sky':
      return {
        unit: w.opacity, min: 0, max: 3, hours: true, limit: 2, limitLabel: w.storm,
        lines: [{ name: w.sky, data: data.sky }]
      };

    case 'panels':
      return {
        unit: w.kWPanel, min: 0, max: 3.5, xLabel: w.afterCleaning, help: ['kW'],
        lines: [
          { name: w.cleaned, data: data.cleanPanel.slice(30, 43) },
          { name: w.dusty, data: data.dustyPanel.slice(30, 43) }
        ]
      };

    case 'wiring':
      return {
        unit: w.ohms, min: 0, max: 2, bars: true, labels: ['1', '2', '3', '4', '5', '6'],
        xLabel: w.wireNumber, limit: 1, limitLabel: w.broken, help: ['ohms'],
        lines: [{ name: w.wires, data: [0.41, 0.39, 0.42, 0.4, 0.43, 0.4] }]
      };

    case 'meter':
      return {
        unit: w.kW, min: 0, max: 20, hours: true, help: ['kW'],
        lines: [
          { name: w.spareMeter, data: data.solar.map(v => round(v * 1.01, 2)) },
          { name: w.oldMeter, data: data.solar }
        ]
      };

    case 'greenhouse':
      return {
        unit: w.degrees, min: 0, max: 30, hours: true, limit: 10, limitLabel: w.tooCold,
        lines: [{ name: w.greenhouse, data: data.greenhouse }, { name: w.normal, data: normal.greenhouse, normal: true }]
      };

    case 'lights':
      return {
        unit: w.brightness, min: 0, max: 120, xLabel: w.minutesOn,
        lines: [{ name: w.lights, data: [0, 98, 100, 99, 100, 100, 99, 100] }]
      };

    case 'soil':
      return {
        unit: w.moisture, min: 0, max: 100, hours: true, limit: 40, limitLabel: w.tooDry,
        lines: [{ name: w.soil, data: data.soil }]
      };

    case 'heaterTest': {
      let heat = [4, 12, 21, 27, 31, 33, 34, 34];
      if (problem === 'heater') heat = [4, 4, 5, 4, 4, 5, 4, 4];
      return {
        unit: w.degrees, min: 0, max: 40, xLabel: w.minutesOn,
        lines: [{ name: w.heater, data: heat }]
      };
    }

    case 'batteryTest': {
      let mine = [];
      let healthy = [];
      let size = data.batterySize / 80;
      for (let i = 0; i <= 10; i++) {
        mine.push(round(Math.max(0, 100 - i * 10 / size), 1));
        healthy.push(100 - i * 10);
      }
      return {
        unit: w.charge, min: 0, max: 100, xLabel: w.hoursOnTest,
        lines: [{ name: w.thisBattery, data: mine }, { name: w.healthyBattery, data: healthy }]
      };
    }

    case 'powerLog':
      return {
        unit: w.onOff, min: 0, max: 1.2, hours: true, step: true,
        lines: [{ name: w.heaterPower, data: data.heater }, { name: w.normal, data: normal.heater, normal: true }]
      };

    case 'growthSensor': {
      let growth = dailyGrowth(data, normal);
      return {
        unit: w.ofNormal, min: 0, max: 120, bars: true, labels: sols,
        lines: [{ name: w.spareSensor, data: growth.map(v => v + 1) }, { name: w.oldSensor, data: growth }]
      };
    }

    case 'co2':
      return {
        unit: w.ppm, min: 0, max: 10000, hours: true, limit: 5000, limitLabel: w.headaches, help: ['ppm'],
        lines: [{ name: w.co2, data: data.co2 }, { name: w.normal, data: normal.co2, normal: true }]
      };

    case 'scrubber':
      return {
        unit: w.ppm, min: 0, max: 10000, hours: true, help: ['ppm'],
        lines: [{ name: w.airIn, data: data.co2 }, { name: w.airOut, data: data.scrubberOut }]
      };

    case 'co2Meter':
      return {
        unit: w.ppm, min: 0, max: 10000, hours: true, help: ['ppm'],
        lines: [{ name: w.handheld, data: data.co2.map(v => Math.round(v * 1.02)) }, { name: w.wallSensor, data: data.co2 }]
      };

    case 'vents': {
      let flow = [98, 101, 97, 100];
      if (problem === 'fans') flow = [31, 28, 35, 30];
      return {
        unit: w.ofNormal, min: 0, max: 120, bars: true, labels: ['1', '2', '3', '4'],
        xLabel: w.vent, limit: 50, limitLabel: w.tooWeak,
        lines: [{ name: w.airflow, data: flow }]
      };
    }

    case 'exercise':
      return {
        unit: w.minutes, min: 0, max: 120, bars: true, labels: sols,
        lines: [{ name: w.workouts, data: [61, 58] }, { name: w.usual, data: [60, 60] }]
      };

    case 'cartridge':
      return {
        unit: w.kg, min: 0, max: 4, bars: true, labels: [w.newCartridge, w.yourCartridge],
        limit: 2.8, limitLabel: w.full,
        lines: [{ name: w.weight, data: [2, round(2 + data.cartridge * 0.9, 1)] }]
      };

    case 'oxygen':
      return {
        unit: w.percentO2, min: 14, max: 24, hours: true, limit: 19.5, limitLabel: w.alarmLevel,
        lines: [{ name: w.oxygen, data: data.o2Sensor }, { name: w.normal, data: normal.o2Sensor, normal: true }]
      };

    case 'o2Meter':
      return {
        unit: w.percentO2, min: 14, max: 24, hours: true,
        lines: [{ name: w.handheld, data: data.oxygen }, { name: w.wallSensor, data: data.o2Sensor }]
      };

    case 'o2Maker': {
      let made = [5.5, 5.4];
      if (problem === 'maker') made = [3.1, 2.8];
      return {
        unit: w.kg, min: 0, max: 8, bars: true, labels: sols,
        lines: [{ name: w.oxygenMade, data: made }, { name: w.usual, data: [5.5, 5.5] }]
      };
    }

    case 'crewBlood': {
      let blood = [98, 97, 98];
      if (problem === 'maker') blood = [96, 95, 96];
      return {
        unit: w.bloodUnit, min: 0, max: 100, bars: true, labels: w.crewNames,
        limit: 90, limitLabel: w.tooLow,
        lines: [{ name: w.bloodOxygen, data: blood }]
      };
    }

    case 'testGas': {
      let error = data.oxygen[47] - data.o2Sensor[47];
      return {
        unit: w.percentO2, min: 0, max: 25, bars: true, labels: [w.realGas, w.sensorSays],
        lines: [{ name: w.oxygen, data: [20.9, round(20.9 - error, 1)] }]
      };
    }

    case 'pressure':
      return {
        unit: w.kPa, min: 90, max: 105, hours: true, help: ['kPa'],
        lines: [{ name: w.pressure, data: data.pressure }, { name: w.normal, data: normal.pressure, normal: true }]
      };

    case 'airTank':
      return {
        unit: w.percentFull, min: 0, max: 100, hours: true,
        lines: [{ name: w.airTank, data: data.airTank }, { name: w.normal, data: normal.airTank, normal: true }]
      };

    case 'pressureGauge':
      return {
        unit: w.kPa, min: 90, max: 105, hours: true, help: ['kPa'],
        lines: [{ name: w.spareGauge, data: data.pressure.map(v => round(v + 0.05, 2)) }, { name: w.oldGauge, data: data.pressure }]
      };

    case 'rooms': {
      let lost = [1, 2, 1, 1];
      let leakRoom = problem === 'hole' ? 2 : 3;
      lost[leakRoom] = Math.round((data.pressure[0] - data.pressure[47]) / 47 * 1000);
      return {
        unit: w.paPerHour, min: 0, max: 100, bars: true, labels: w.rooms, help: ['Pa'],
        lines: [{ name: w.pressureLoss, data: lost }]
      };
    }

    case 'hullScan': {
      let hiss = [3, 5, 2];
      if (problem === 'hole') hiss = [3, 5, 62];
      return {
        unit: w.percent, min: 0, max: 100, bars: true, labels: w.rooms.slice(0, 3),
        limit: 30, limitLabel: w.leak,
        lines: [{ name: w.hissNoise, data: hiss }]
      };
    }

    case 'doorSeal': {
      let gap = [0.1, 0.1, 0.1, 0.2];
      if (problem === 'seal') gap = [0.1, 0.1, 1.4, 0.2];
      return {
        unit: w.mm, min: 0, max: 2, bars: true, labels: w.sides,
        limit: 0.5, limitLabel: w.leak, help: ['mm'],
        lines: [{ name: w.doorGap, data: gap }]
      };
    }

    case 'shelter':
      return {
        unit: w.percentFull, min: 0, max: 100, hours: true, limit: 80, limitLabel: w.shieldNeeds,
        lines: [{ name: w.shelterWater, data: data.shelter }, { name: w.normal, data: normal.shelter, normal: true }]
      };

    case 'mainTank':
      return {
        unit: w.percentFull, min: 0, max: 100, hours: true,
        lines: [{ name: w.mainWater, data: data.mainTank }, { name: w.normal, data: normal.mainTank, normal: true }]
      };

    case 'flow':
      return {
        unit: w.litresPerHour, min: 0, max: 40, hours: true, step: true,
        lines: [{ name: w.flowOut, data: data.shelterFlow }, { name: w.normal, data: normal.shelterFlow, normal: true }]
      };

    case 'pumpTanks': {
      let fromShelter = 0;
      for (let h = 24; h < 48; h++) fromShelter += data.shelterFlow[h];
      return {
        unit: w.litres, min: 0, max: 80, bars: true, labels: w.tanks,
        lines: [{ name: w.waterTaken, data: [60 - fromShelter, fromShelter] }]
      };
    }

    case 'dipstick':
      return {
        unit: w.percentFull, min: 0, max: 100, bars: true, labels: [w.gaugeSays, w.byHand],
        limit: 80, limitLabel: w.shieldNeeds,
        lines: [{ name: w.shelterWater, data: [data.shelter[47], data.shelter[47] - 1] }]
      };

    case 'floor':
      return {
        unit: w.percent, min: 0, max: 100, hours: true, limit: 20, limitLabel: w.wet,
        lines: [{ name: w.floorWater, data: data.floor }]
      };
  }
}
