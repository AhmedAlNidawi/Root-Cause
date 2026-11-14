// French translation. Made with AI (Claude), so it may contain mistakes.
// Keys must match en.js. Anything missing falls back to English.
//   is a non-breaking space (French puts one before : ? ! and %).
languages.fr = {
  name: 'Français',
  dir: 'ltr',

  place: 'Base Suhail, cratère Gale, Mars',
  title: 'Cause profonde',
  intro: "Quelque chose ne va pas à la base martienne, et c'est à toi de découvrir quoi.",
  motto: 'Réfléchir ne coûte rien, mais tester prend du temps.',
  aiNotice: 'Cette traduction a été réalisée par une IA (Claude) et peut contenir des erreurs.',
  start: 'Commencer',
  soundOn: 'Son activé',
  soundOff: 'Son coupé',
  back: 'Retour',
  caseFiles: 'Dossiers',
  rank: 'Rang : {rank}',
  ranks: ['Stagiaire', 'Contrôleur junior', 'Contrôleur de vol', 'Directeur de vol'],
  comingSoon: 'Bientôt',
  caseTitle: 'Dossier {n} : {title}',

  crewHours: "Heures d'équipage",
  tests: 'Tests',
  readings: 'Relevés',
  free: 'Gratuit',
  crewRadio: "Radio de l'équipage",
  evidence: 'Preuves',
  emptyScreen: 'Touche un relevé ou lance un test',
  notes: 'Notes du dossier',
  suspects: 'Suspects',
  ruleOutHint: "Touche un suspect pour l'écarter",
  testsHint: "Chaque test consomme des heures d'équipage",
  callIt: 'Donner la cause',

  masterAlarm: 'Alarme générale',
  pressAlarm: "Appuie sur l'alarme pour commencer",
  peakToday: "Pic de {unit} aujourd'hui",
  normalNote: 'Ligne en pointillés = une journée normale.',
  nightNote: 'Bandes sombres = nuit.',
  openTests: 'Ouvre les tests',
  openSuspects: 'Ouvre les suspects',

  testUses: 'Ce test utilise',
  whatWillYouSee: 'Que vas-tu voir ?',
  justRun: 'Lancer sans deviner',
  notNow: 'Pas maintenant',
  running: 'Test en cours...',
  calledIt: 'Bien vu !',
  notExpected: 'Pas ce que tu pensais.',

  step: 'Étape {n} sur 3',
  whatsTheCause: 'Quelle est la cause profonde ?',
  wrongCallCosts: 'Une mauvaise réponse coûte',
  keepLooking: 'Continuer à chercher',
  chainTitle: "Remets la chaîne dans l'ordre",
  chainHint: 'Une carte est fausse.',
  chainFirst: 'Cause profonde',
  chainLast: "Ce que l'équipage a vu",
  fixTitle: 'Comment le répares-tu ?',
  fixHint: 'Répare la cause, pas le symptôme.',
  helped: 'Ça a un peu aidé, mais la cause est toujours là.',
  didntWork: "Ça n'a pas marché.",

  caseClosed: 'Dossier clos',
  starFixed: 'Cause trouvée et réparée',
  starPar: '{par} tests ou moins',
  starGuess: 'Toutes tes prédictions étaient justes',
  expertWay: "La méthode de l'expert",
  realMission: 'Mission réelle',
  source: 'Source',
  nextCase: 'Dossier suivant',
  playAgain: 'Rejouer',
  outOfTime: 'Temps écoulé',
  outOfTimeTitle: "L'équipage n'a plus d'heures",
  outOfTimeTip: "Astuce : regarde d'abord les relevés gratuits.",
  tryAgain: 'Réessayer',

  dataButton: 'Données NASA utilisées',
  dataTitle: 'Données NASA utilisées',
  dataIntro: "Tous les chiffres de cette page sont réels. Voici d'où ils viennent et où tu les retrouves dans le jeu.",
  usedIn: 'Dans le jeu',
  askButton: 'Demander au Contrôle de mission',
  askHint: "Un message met de 4 à 24 minutes pour aller de Mars à la Terre, dans chaque sens. Demander coûte 2 heures d'équipage.",
  askSent: 'Message envoyé vers la Terre. Il faut attendre la réponse...',
  hintTest: 'Nous avons regardé tes données. Essaie ceci : {test}.',
  hintCall: "Tu as tout ce qu'il faut. Donne la cause !",
  guideLook: "Touche ici d'abord. Observer ne coûte rien !",
  guideTest: 'Lance ce test',
  guideCall: 'Tu connais la cause ? Donne-la !',
  choiceTitle: 'Décision rapide',
  nextSol: 'Sol suivant',
  wrongCardCosts: 'Une mauvaise carte coûte',
  help: {
    sol: 'Un sol est un jour sur Mars. Il dure 24 heures et 40 minutes.',
    kW: "Les kW (kilowatts) disent combien d'énergie est produite en ce moment.",
    Wh: "Les Wh (wattheures) disent combien d'énergie a été produite pendant un sol entier.",
    ppm: "ppm veut dire parties par million. 5 000 ppm, c'est 5 000 morceaux de CO₂ dans chaque million de morceaux d'air.",
    kPa: "Les kPa (kilopascals) mesurent la pression de l'air. Sur Terre, au bord de la mer, l'air est à environ 101 kPa.",
    Pa: "Les Pa (pascals) mesurent aussi la pression de l'air. 1 000 Pa font 1 kPa. Dehors, sur Mars, l'air n'est qu'à environ 860 Pa.",
    ohms: "Les ohms disent à quel point l'électricité a du mal à passer dans un fil. Plus le chiffre est grand, plus le fil est mauvais.",
    mm: 'mm veut dire millimètres. 10 mm font 1 cm.',
    uGy: 'Les µGy (micrograys) mesurent la quantité de radiation que le corps absorbe.'
  },

  crew: {
    layla: 'Commandante Layla',
    omar: 'Ingénieur Omar',
    sara: 'Botaniste Sara',
    houston: 'Contrôle de mission'
  },

  chart: {
    kW: 'kW',
    charge: '% de charge',
    ofNormal: '% de la normale',
    degrees: '°C',
    opacity: 'poussière dans le ciel',
    kWPanel: 'kW par panneau',
    ohms: 'ohms',
    brightness: '% de luminosité',
    moisture: "% d'eau",
    onOff: 'marche / arrêt',
    sol: 'Sol {n}',
    noon: 'midi',
    now: 'maintenant',
    normal: 'Normal',
    solar: 'Production solaire',
    battery: 'Batterie',
    growth: 'Croissance de la laitue',
    habitat: "Air de l'habitat",
    sky: 'Poussière dans le ciel',
    cleaned: 'Panneau nettoyé',
    dusty: 'Panneau poussiéreux',
    wires: 'Résistance des fils',
    spareMeter: 'Compteur de rechange',
    oldMeter: 'Ancien compteur',
    greenhouse: 'Air de la serre',
    lights: 'Luminosité des lampes',
    soil: 'Eau du sol',
    heater: 'Température du chauffage',
    thisBattery: 'Cette batterie',
    healthyBattery: 'Batterie saine',
    heaterPower: 'Courant du chauffage la nuit',
    spareSensor: 'Capteur de rechange',
    oldSensor: 'Ancien capteur',
    reserve: 'réserve',
    storm: 'tempête de poussière',
    tooCold: 'trop froid pour la laitue',
    tooDry: 'trop sec',
    broken: 'cassé',
    afterCleaning: 'heures après le nettoyage',
    wireNumber: 'fil',
    minutesOn: "minutes depuis l'allumage",
    hoursOnTest: 'heures de test',
    ppm: 'ppm',
    co2: "CO₂ dans l'air",
    headaches: 'début des maux de tête',
    airIn: 'Air qui entre',
    airOut: 'Air qui sort',
    handheld: 'Appareil portable',
    wallSensor: 'Capteur de la base',
    vent: "bouche d'aération",
    airflow: "Débit d'air",
    tooWeak: 'trop faible',
    minutes: 'minutes',
    workouts: "Temps d'entraînement",
    usual: 'Habituel',
    kg: 'kg',
    weight: 'Poids de la cartouche',
    newCartridge: 'Neuve',
    yourCartridge: 'La tienne',
    full: 'pleine',
    oxygen: 'Oxygène',
    percentO2: "% d'oxygène",
    alarmLevel: 'alarme',
    oxygenMade: 'Oxygène produit',
    bloodOxygen: 'Oxygène dans le sang',
    bloodUnit: '% dans le sang',
    crewNames: ['Layla', 'Omar', 'Sara'],
    tooLow: 'trop bas',
    realGas: 'Gaz test',
    sensorSays: 'Capteur',
    pressure: 'Pression de la cabine',
    kPa: 'kPa',
    airTank: "Réservoir d'air de secours",
    percentFull: '% plein',
    percent: '%',
    spareGauge: 'Manomètre de rechange',
    oldGauge: 'Ancien manomètre',
    rooms: ['Habitat', 'Labo', 'Serre', 'Sas'],
    pressureLoss: 'Air perdu',
    paPerHour: 'Pa perdus par heure',
    hissNoise: 'Bruit de sifflement',
    leak: 'fuite',
    doorGap: 'Jeu dans le joint',
    sides: ['Haut', 'Gauche', 'Bas', 'Droite'],
    mm: 'mm',
    shelterWater: "Eau de l'abri",
    shieldNeeds: 'niveau requis pour le bouclier',
    mainWater: "Réservoir d'eau principal",
    flowOut: "Eau qui sort de l'abri",
    litresPerHour: 'litres par heure',
    waterTaken: 'Eau prise par la pompe',
    tanks: ['Principal', 'Abri'],
    litres: "litres aujourd'hui",
    gaugeSays: 'Jauge',
    byHand: 'À la main',
    floorWater: 'Eau sur le sol',
    wet: 'mouillé',
    insight: "Énergie solaire d'InSight",
    whPerSol: 'Wh par sol',
    insightLanding: 'Arrivée, 2018',
    insightLate: 'Printemps 2022',
    outsideAir: 'Air extérieur',
    weatherNote: "Vraie météo du rover Curiosity de la NASA dans le cratère Gale, sols 4189 et 4190 (19 et 20 mai 2024). Pression de l'air dehors : 860 Pa.",
    radiation: 'Dose de radiation',
    uGy: 'µGy',
    normalSol: 'Sol normal',
    stormDay: '20 mai 2024',
    radiationNote: "Vraies mesures du détecteur RAD de Curiosity. Un sol normal donne environ 210 µGy. La tempête de mai 2024 a donné 8 100 µGy, environ 30 radios du thorax."
  },

  nasaData: [
    {
      title: 'Atterrisseur InSight : énergie solaire',
      detail: "Les panneaux d'InSight produisaient environ 5 000 wattheures par sol après son arrivée en 2018. Au printemps 2022, la poussière avait fait tomber ce chiffre à environ 500.",
      usedIn: "Journée sombre : le relevé « Énergie solaire d'InSight », et comment la poussière assombrit tes panneaux.",
      source: 'NASA / JPL',
      url: 'https://www.nasa.gov/missions/insight/nasas-insight-still-hunting-marsquakes-as-power-levels-diminish'
    },
    {
      title: 'Rover Curiosity : station météo REMS',
      detail: 'Cratère Gale, sol 4189 (19 mai 2024) : minimum -68 °C, maximum -5 °C, 861 Pa. Sol 4190 (20 mai 2024) : minimum -69 °C, maximum -3 °C, 860 Pa.',
      usedIn: 'Le relevé « Air extérieur » dans chaque dossier.',
      source: 'NASA / JPL et Centro de Astrobiología (équipe REMS)',
      url: 'https://mars.nasa.gov/msl/mission/weather/'
    },
    {
      title: 'Base de données de météo spatiale DONKI',
      detail: 'Éjection de masse coronale 2024-05-20T05:36:00-CME-001, partie de la région solaire 13664 à environ 2 678 km par seconde.',
      usedIn: "Tempête en approche : l'alerte de météo spatiale du Contrôle de mission.",
      source: 'Community Coordinated Modeling Center de la NASA',
      url: 'https://kauai.ccmc.gsfc.nasa.gov/DONKI/'
    },
    {
      title: 'Rover Curiosity : détecteur de radiation RAD',
      detail: 'Le 20 mai 2024, RAD a mesuré 8 100 micrograys, environ 30 radios du thorax. Pendant un sol normal, il mesure environ 180 à 225 micrograys.',
      usedIn: 'Tempête en approche : le relevé « Dose de radiation ».',
      source: 'NASA / JPL',
      url: 'https://www.nasa.gov/solar-system/planets/mars/nasa-watches-mars-light-up-during-epic-solar-storm'
    },
    {
      title: 'Délai des messages entre la Terre et Mars',
      detail: 'Un message met de 4 à 24 minutes pour aller de la Terre à Mars, dans chaque sens.',
      usedIn: "Le bouton « Demander au Contrôle de mission », qui coûte des heures d'équipage.",
      source: 'NASA',
      url: 'https://www.nasa.gov/centers-and-facilities/goddard/space-communications-7-things-you-need-to-know/'
    },
    {
      title: 'Vraies histoires de mission',
      detail: "Apollo 13 (1970), l'atterrisseur InSight (2018 à 2022) et la Station spatiale internationale (2015 et 2020).",
      usedIn: "L'encadré « Mission réelle » à la fin de chaque dossier. Chacun a un lien vers sa page NASA.",
      source: 'NASA',
      url: 'https://www.nasa.gov/'
    }
  ],

  comingSoonCases: [],

  cases: {
    dimDay: {
      title: 'Journée sombre',
      tag: 'Tutoriel',
      alarm: "L'énergie solaire est bien plus basse que la normale",
      briefing: [
        { who: 'omar', text: "Les panneaux solaires produisent beaucoup moins d'énergie. La batterie ne se remplit jamais." },
        { who: 'layla', text: "Trouve pourquoi. Observer ne coûte rien, mais les tests prennent du temps à l'équipage." }
      ],
      choice: {
        question: 'La batterie est faible ce soir. Que fait-on du labo de sciences ?',
        options: [
          { name: 'Éteindre le labo', note: "L'équipe du labo peut t'aider à enquêter", nextSol: 'La batterie est restée en sécurité toute la nuit, mais un sol entier de travail au labo a été perdu.' },
          { name: 'Laisser le labo allumé', note: 'Les expériences continuent', nextSol: 'Les expériences sont finies, mais la batterie est tombée sur sa réserve et le chauffage de la serre a été coupé quelques heures.' }
        ]
      },
      suspects: {
        dust: { name: 'Poussière sur les panneaux', note: "La poussière de Mars s'accroche à tout" },
        storm: { name: 'Tempête de poussière', note: 'Un ciel poussiéreux cache le Soleil' },
        wiring: { name: 'Câblage défectueux', note: "L'énergie se perd en route" },
        meter: { name: "Compteur d'énergie cassé", note: "L'énergie est bonne, c'est le chiffre qui est faux" }
      },
      wrongCall: {
        dust: { who: 'omar', text: "J'ai brossé un panneau. Ça n'a rien changé." },
        storm: { who: 'houston', text: "Le ciel est dégagé au-dessus de la base. Ce n'est pas une tempête." },
        wiring: { who: 'omar', text: "J'ai changé un câble. Toujours peu d'énergie." },
        meter: { who: 'omar', text: 'Le nouveau compteur affiche la même chose.' }
      },
      tests: {
        sky: {
          name: 'Regarder la poussière dans le ciel',
          desc: "Au-dessus de 2, c'est une tempête de poussière.",
          options: ['Poussiéreux : tempête', 'Dégagé : pas de tempête'],
          results: ['Le ciel est plein de poussière. Une tempête cache le Soleil.', 'Le ciel est dégagé. Aucune tempête ne cache le Soleil.']
        },
        compare: {
          name: 'Nettoyer un panneau et comparer',
          desc: "Brosse un panneau. Laisse celui d'à côté poussiéreux.",
          options: ['Le propre produit plus', 'Les deux pareil'],
          results: ["Le panneau propre produit presque le double. Seule la poussière change : c'est un test équitable.", "Le nettoyage n'a rien changé. La poussière sur les panneaux n'est pas le problème."]
        },
        wiring: {
          name: 'Tester le câblage',
          desc: 'Au-dessus de 1 ohm, un fil est cassé.',
          options: ['Un fil est mauvais', 'Tous les fils sont bons'],
          results: ['Un fil est abîmé.', 'Les six fils sont en bon état.']
        },
        meter: {
          name: 'Essayer un compteur de rechange',
          desc: "Compare-le avec l'ancien compteur.",
          options: ['Le neuf lit plus haut', "Les deux sont d'accord"],
          results: ["L'ancien compteur se trompait.", "Les deux compteurs sont d'accord. L'énergie est vraiment faible."]
        }
      },
      chains: {
        dust: ['La poussière couvre les panneaux', 'Moins de lumière du Soleil arrive', 'Les panneaux produisent moitié moins', 'La batterie ne se remplit jamais'],
        storm: ['Une tempête de poussière remplit le ciel', 'Moins de lumière du Soleil passe', 'Les panneaux produisent moitié moins', 'La batterie ne se remplit jamais']
      },
      decoys: {
        dust: 'Une tempête de poussière assombrit le ciel',
        storm: 'La poussière couvre les panneaux'
      },
      fixes: [
        { name: 'Nettoyer les six panneaux', fixed: "L'énergie est de retour à la normale à midi !", wrong: 'Les panneaux sont impeccables, mais le ciel est toujours trop sombre.' },
        { name: "Éteindre le labo pour économiser l'énergie", fixed: "Bien joué. La base attend la fin de la tempête en économisant l'énergie, et le ciel se dégage quelques sols plus tard.", symptom: "Ça économise de l'énergie, mais les panneaux sont toujours poussiéreux." },
        { name: 'Remplacer le câblage', wrong: "Des fils neufs, mais toujours aussi peu d'énergie." }
      ],
      fact: "Quand la sonde InSight de la NASA s'est posée sur Mars en 2018, ses panneaux solaires produisaient environ 5 000 wattheures par sol. Au printemps 2022, la poussière avait fait tomber ce chiffre à environ 500. Elle n'avait pas d'essuie-glaces, et la NASA s'attendait à ce que la poussière mette fin à la mission avant la fin de 2022.",
      source: 'NASA'
    },

    coldLettuce: {
      title: 'Laitue froide',
      tag: '',
      alarm: 'La laitue a presque arrêté de pousser',
      briefing: [
        { who: 'sara', text: 'La laitue allait bien il y a deux jours. Maintenant elle est molle et foncée.' },
        { who: 'sara', text: 'Au moins, les lampes de culture sont allumées.' },
        { who: 'layla', text: 'Trouve la vraie cause, pas seulement le symptôme.' }
      ],
      choice: {
        question: "Il va faire très froid cette nuit. On rentre les plateaux de laitue dans l'habitat ?",
        options: [
          { name: 'Les rentrer', note: 'Les porter prend du temps', nextSol: "La laitue est restée au chaud toute la nuit. Par contre, l'habitat sentait la salade." },
          { name: 'Les laisser', note: 'Aucun temps perdu', nextSol: 'La laitue a encore perdu quelques feuilles avant que ta réparation fasse effet.' }
        ]
      },
      suspects: {
        lights: { name: 'Lampes de culture en panne', note: 'Les plantes ont besoin de beaucoup de lumière' },
        water: { name: 'Pompe à eau bouchée', note: 'Des racines sèches se fanent vite' },
        heater: { name: 'Chauffage en panne', note: 'La laitue déteste le froid' },
        battery: { name: 'Batterie faible', note: "Les batteries s'usent" },
        seeds: { name: 'Mauvaises graines', note: 'Certaines graines poussent mal' },
        sensor: { name: 'Capteur de croissance cassé', note: 'Les plantes vont peut-être bien' }
      },
      wrongCall: {
        lights: { who: 'sara', text: 'Ampoules neuves, mais la laitue est toujours molle.' },
        water: { who: 'sara', text: "J'ai nettoyé la pompe. La terre était déjà humide." },
        heater: { who: 'omar', text: "J'ai changé le chauffage. La laitue est toujours molle." },
        battery: { who: 'omar', text: 'La batterie a réussi son test. Elle va bien.' },
        seeds: { who: 'sara', text: 'Les nouveaux plants sont mous aussi.' },
        sensor: { who: 'sara', text: "J'ai mesuré une feuille à la main. Le capteur avait raison." }
      },
      tests: {
        ghTemp: {
          name: 'Vérifier la température de la serre',
          desc: "En dessous de 10 °C, c'est trop froid pour la laitue.",
          options: ['Chaud tout le temps', 'Froid la nuit', 'Froid tout le temps'],
          results: ['La serre reste chaude le jour comme la nuit.', 'Chaud le jour, glacial la nuit. Pourquoi seulement la nuit ?', 'Il fait froid tout le temps.']
        },
        lights: {
          name: 'Tester les lampes de culture',
          desc: 'Allume-les à fond et mesure.',
          options: ['Pleine luminosité', 'Faibles ou qui clignotent'],
          results: ['Les lampes fonctionnent bien.', 'Les lampes sont en train de lâcher.']
        },
        soil: {
          name: 'Vérifier la terre',
          desc: "En dessous de 40 %, c'est trop sec.",
          options: ['Assez humide', 'Trop sèche'],
          results: ['La terre est humide. La pompe fonctionne.', 'La terre est complètement sèche. Les racines ont soif !']
        },
        heater: {
          name: 'Tester le chauffage',
          desc: 'Branche-le directement sur le courant.',
          options: ['Il chauffe', 'Il reste froid'],
          results: ['Le chauffage marche quand il a du courant.', 'Il reste froid même avec du courant. Le chauffage est cassé !']
        },
        powerLog: {
          name: "Lire le journal du gestionnaire d'énergie",
          desc: "Le gestionnaire d'énergie décide quelles machines reçoivent du courant.",
          options: ['Chauffage allumé chaque nuit', 'Chauffage éteint la nuit'],
          results: ['Le chauffage a eu du courant chaque nuit.', "Il a éteint le chauffage la nuit. Il ne le fait que si la batterie ne peut pas tenir jusqu'au matin."]
        },
        batteryTest: {
          name: 'Tester la batterie',
          desc: 'Une batterie en bon état tient 10 heures à ce test.',
          options: ['Tient 10 heures', 'Se vide trop tôt'],
          results: ['Elle tient les 10 heures. La batterie est en bonne santé.', "Vide après 6 heures. Elle ne garde qu'environ 60 % de ce qu'elle devrait."]
        },
        sensor: {
          name: 'Essayer un capteur de croissance de rechange',
          desc: "Compare-le avec l'ancien capteur.",
          options: ["Les deux sont d'accord", 'Le neuf lit normal'],
          results: ["Les deux sont d'accord. La laitue pousse vraiment lentement.", "L'ancien capteur se trompait."]
        }
      },
      chains: {
        battery: ["La batterie s'use", 'Elle ne tient pas toute la nuit', 'Le chauffage est coupé', 'La serre gèle la nuit', 'La laitue au froid pousse lentement'],
        heater: ['Le chauffage tombe en panne', 'Il ne produit plus de chaleur', 'La serre gèle la nuit', 'La laitue au froid pousse lentement'],
        water: ['La pompe à eau se bouche', "L'eau n'arrive plus aux racines", 'La terre se dessèche', 'La laitue assoiffée devient molle']
      },
      decoys: {
        battery: 'Les lampes de culture faiblissent',
        heater: "La batterie s'use",
        water: 'Le chauffage tombe en panne'
      },
      fixes: [
        { name: 'Installer la batterie de rechange', fixed: 'Le chauffage reste allumé toute la nuit. La laitue se redresse !', wrong: 'Batterie neuve, mais la laitue est toujours molle.' },
        { name: 'Couvrir les plantes la nuit', symptom: 'Ça aide un peu, mais le vrai problème est toujours là.', wrong: 'Les feuilles sont au chaud, mais les racines ont toujours soif.' },
        { name: 'Remplacer le chauffage', fixed: 'Le nouveau chauffage garde la serre au chaud toute la nuit. La laitue se redresse !', wrong: 'Chauffage neuf, mais la laitue est toujours molle.' },
        { name: 'Laisser les lampes allumées plus longtemps', wrong: "Ça use juste plus d'énergie. Toujours aussi molle." },
        { name: 'Déboucher la pompe à eau', fixed: "L'eau coule de nouveau. Au sol suivant, la laitue se redresse !", wrong: 'La pompe allait bien. Toujours aussi molle.' }
      ],
      fact: "Les vraies missions coupent des appareils pour économiser l'énergie. En janvier 2022, une tempête de poussière a réduit l'énergie de la sonde InSight de la NASA. Elle s'est mise en mode sécurité et a éteint ses instruments scientifiques jusqu'à ce que le ciel se dégage.",
      source: 'NASA'
    },

    stuffyAir: {
      title: 'Air étouffant',
      tag: '',
      alarm: 'Le CO₂ est bien au-dessus de la normale',
      briefing: [
        { who: 'sara', text: "C'est moi ou il y a vraiment un air étouffant ici ? J'ai mal à la tête depuis ce matin." },
        { who: 'omar', text: "Pareil. Je n'arrête pas de bâiller." },
        { who: 'layla', text: 'Le CO₂ a beaucoup augmenté. Trouve pourquoi avant que ça empire.' }
      ],
      choice: {
        question: "Tout le monde a mal à la tête. On laisse l'équipage se reposer ?",
        options: [
          { name: 'Se reposer', note: 'Au repos, on rejette moins de CO₂', nextSol: "L'équipage s'est réveillé en meilleure forme, et le CO₂ a monté moins vite pendant la nuit." },
          { name: 'Continuer à travailler', note: 'Aucun temps perdu', nextSol: "Beaucoup de travail a été fait, mais le mal de tête d'Omar a duré jusqu'au sol suivant." }
        ]
      },
      suspects: {
        fans: { name: 'Ventilateurs en panne', note: "L'air vicié reste sur place" },
        sensor: { name: 'Capteur de CO₂ cassé', note: "L'air est peut-être bon" },
        cartridge: { name: "Cartouche de l'épurateur pleine", note: "Elle absorbe le CO₂ jusqu'à ne plus pouvoir" },
        exercise: { name: "L'équipage s'entraîne plus", note: 'Respirer fort produit plus de CO₂' },
        plants: { name: "Les plantes n'aident pas", note: 'Les plantes mangent du CO₂' }
      },
      wrongCall: {
        fans: { who: 'omar', text: 'Les ventilateurs soufflent bien. Toujours aussi étouffant.' },
        sensor: { who: 'sara', text: 'Mon appareil portable indique la même chose. Le CO₂ est vraiment élevé.' },
        cartridge: { who: 'omar', text: "La cartouche est encore légère. Elle n'est pas pleine." },
        exercise: { who: 'layla', text: "Personne ne s'est entraîné plus que d'habitude." },
        plants: { who: 'sara', text: 'La laitue pousse très bien. Ce ne sont pas les plantes.' }
      },
      tests: {
        co2Meter: {
          name: 'Vérifier avec un appareil de CO₂ portable',
          desc: "Est-il d'accord avec le capteur de la base ?",
          options: ["Ils sont d'accord", 'Le portable lit normal'],
          results: ['Les deux disent la même chose. Le CO₂ est vraiment élevé.', 'Le capteur de la base se trompait.']
        },
        vents: {
          name: "Tester les bouches d'aération",
          desc: "Mesure la force de chaque bouche. En dessous de 50 %, c'est trop faible.",
          options: ['Toutes soufflent bien', 'Certaines sont faibles'],
          results: ['Les quatre bouches soufflent normalement.', 'Les bouches soufflent à peine. Les ventilateurs sont en panne !']
        },
        exercise: {
          name: "Lire le journal d'entraînement",
          desc: "Plus d'exercice, c'est plus de respiration.",
          options: ["Comme d'habitude", "Bien plus que d'habitude"],
          results: ["L'équipage s'est entraîné comme toujours.", "L'équipage s'est entraîné bien plus que d'habitude."]
        },
        scrubber: {
          name: "Tester l'épurateur de CO₂",
          desc: "Mesure le CO₂ de l'air qui entre et de l'air qui sort. Un bon épurateur le fait beaucoup baisser.",
          options: ['La sortie est bien plus basse', 'Presque aucune différence'],
          results: ["L'air qui sort est bien plus propre. L'épurateur lui-même fonctionne.", "L'air qui sort est presque aussi mauvais que celui qui entre. L'épurateur ne nettoie plus."]
        },
        cartridge: {
          name: "Peser la cartouche de l'épurateur",
          desc: 'Une cartouche devient plus lourde en se remplissant de CO₂.',
          options: ['Légère, comme une neuve', 'Lourde, elle est pleine'],
          results: ["Elle est légère, comme une neuve. Elle n'est pas pleine.", 'Elle est pleine. Elle ne peut plus absorber de CO₂.']
        }
      },
      chains: {
        cartridge: ["La cartouche de l'épurateur se remplit", "Elle n'absorbe plus le CO₂", "Le CO₂ s'accumule dans l'air", "L'équipage a mal à la tête"],
        fans: ['Les ventilateurs tombent en panne', "L'air vicié n'arrive plus à l'épurateur", "Le CO₂ s'accumule dans l'air", "L'équipage a mal à la tête"]
      },
      decoys: {
        cartridge: 'Les ventilateurs arrêtent de souffler',
        fans: "La cartouche de l'épurateur se remplit"
      },
      fixes: [
        { name: "Donner des cachets contre le mal de tête à l'équipage", symptom: 'Plus de maux de tête, mais le CO₂ continue de monter.' },
        { name: 'Monter les ventilateurs à fond', wrong: "Monter les ventilateurs n'a pas aidé. Le CO₂ est toujours élevé." },
        { name: 'Remplacer les moteurs des ventilateurs', fixed: "L'air circule de nouveau, alors l'épurateur peut faire son travail. L'air est pur avant ce soir !", wrong: 'Ventilateurs neufs, mais toujours autant de CO₂.' },
        { name: "Scotcher une cartouche de rechange dans l'épurateur", fixed: "Les cartouches de rechange n'ont pas la bonne forme, mais le ruban adhésif règle ça. L'air est pur en une heure !", wrong: 'Cartouche neuve, mais le CO₂ est toujours élevé.' }
      ],
      fact: "Pendant Apollo 13, en 1970, le CO₂ s'est accumulé dans le module lunaire. Les filtres de rechange étaient carrés mais les trous étaient ronds, alors le Contrôle de mission a imaginé une solution avec des sacs en plastique, du carton et du ruban adhésif. L'équipage est rentré sain et sauf.",
      source: 'NASA'
    },

    lyingSensor: {
      title: "Alarme d'oxygène",
      tag: '',
      alarm: "Alarme d'oxygène ! Le capteur dit qu'il baisse",
      briefing: [
        { who: 'layla', text: "L'alarme d'oxygène dit que nous en manquons." },
        { who: 'sara', text: 'Mais je me sens bien. Pas de mal de tête, rien.' },
        { who: 'omar', text: "Chaque fois qu'on a accusé un capteur, ce n'était pas le capteur. Je dis ça, je dis rien." }
      ],
      choice: {
        question: "Le règlement dit : quand l'alarme d'oxygène sonne, on met les masques. On suit le règlement ?",
        options: [
          { name: 'Mettre les masques', note: 'Plus sûr, mais on travaille moins vite', nextSol: "Les masques ont vidé deux bouteilles d'oxygène. C'était plus sûr, mais il faudra les remplacer." },
          { name: 'Pas de masques', note: 'Aucun temps perdu', nextSol: "Le Contrôle de mission n'était pas content. Le règlement existe au cas où l'alarme serait vraie." }
        ]
      },
      suspects: {
        maker: { name: "Générateur d'oxygène en panne", note: "Il sépare l'eau pour fabriquer de l'oxygène" },
        leak: { name: "Fuite d'air", note: "L'oxygène s'échappe avec l'air" },
        crew: { name: "L'équipage consomme plus d'oxygène", note: "Quand on s'active, on respire plus" },
        sensor: { name: "Capteur d'oxygène cassé", note: 'Les capteurs vieillissent et dérivent' }
      },
      wrongCall: {
        maker: { who: 'omar', text: "Le générateur d'oxygène marche parfaitement. Ce n'était pas ça." },
        leak: { who: 'houston', text: "La pression de la cabine est stable comme un roc. Il n'y a pas de fuite." },
        crew: { who: 'sara', text: 'On respire normalement. On se sent très bien, en fait.' },
        sensor: { who: 'omar', text: "J'ai testé le capteur. Il lit juste." }
      },
      tests: {
        o2Meter: {
          name: "Vérifier avec un appareil d'oxygène portable",
          desc: 'Compare-le avec le capteur du mur.',
          options: ['Les deux lisent bas', 'Le portable lit normal'],
          results: ["Le portable dit que c'est bas aussi. L'oxygène baisse vraiment !", "Le portable indique 21 %, tout à fait normal. Seul le capteur du mur dit que c'est bas."]
        },
        maker: {
          name: "Vérifier le générateur d'oxygène",
          desc: "Combien d'oxygène a-t-il produit chaque sol ?",
          options: ["Comme d'habitude", "Beaucoup moins que d'habitude"],
          results: ["Il a produit la même quantité que d'habitude.", "Il produit bien moins d'oxygène que d'habitude !"]
        },
        blood: {
          name: "Vérifier l'oxygène dans le sang de l'équipage",
          desc: "Un pince-doigt mesure l'oxygène de ton sang. En dessous de 90 %, c'est trop bas.",
          options: ['Tout le monde est normal', "Quelqu'un est bas"],
          results: ["Tout le monde va bien, pour l'instant. Leur corps reçoit assez d'oxygène.", "Quelqu'un est bas."]
        },
        testGas: {
          name: 'Tester le capteur avec un gaz test',
          desc: "Envoie un gaz contenant exactement 20,9 % d'oxygène sur le capteur.",
          options: ['Il lit 20,9 %', 'Il lit trop bas'],
          results: ['Le capteur lit 20,9 %, exactement ce qu\'il faut. Il ne ment pas.', 'Le gaz contient 20,9 % mais le capteur dit 17 %. Le capteur ment !']
        }
      },
      chains: {
        sensor: ["Le capteur d'oxygène vieillit", 'Il se met à lire trop bas', "L'ordinateur croit que l'oxygène baisse", "L'alarme d'oxygène se déclenche"],
        maker: ["Le générateur d'oxygène tombe en panne", "Plus aucun oxygène n'est fabriqué", "L'équipage consomme peu à peu l'oxygène", "L'alarme d'oxygène se déclenche"]
      },
      decoys: {
        sensor: "L'air fuit hors de la base",
        maker: "Le capteur d'oxygène vieillit"
      },
      fixes: [
        { name: "Ouvrir les réservoirs d'oxygène de secours", symptom: "L'oxygène remonte, mais les réservoirs de secours vont se vider.", wrong: "Maintenant il y a trop d'oxygène, et ça facilite les départs de feu !" },
        { name: "Installer un nouveau capteur d'oxygène", fixed: 'Il lit 20,9 %. Alarme éteinte. Tout le monde peut souffler.', wrong: "Capteur neuf, mais l'oxygène est toujours bas. Le relevé était juste." },
        { name: "Éteindre l'alarme", symptom: 'Le silence est revenu, mais tu ne peux toujours pas te fier à ce capteur.', wrong: "C'est calme, mais l'oxygène baisse toujours. Danger !" },
        { name: "Réparer le générateur d'oxygène", fixed: "Le générateur sépare de nouveau l'eau. L'oxygène est revenu à 20,9 %.", wrong: "Le générateur d'oxygène allait bien. L'alarme sonne toujours." }
      ],
      fact: "En janvier 2015, une alarme de la Station spatiale internationale a signalé une fuite d'ammoniac toxique, et l'équipage est passé du côté russe. La NASA a découvert que c'était une fausse alerte, déclenchée par un mauvais signal venant d'un boîtier informatique.",
      source: 'NASA'
    },

    slowLeak: {
      title: 'Fuite lente',
      tag: '',
      alarm: 'La pression de la cabine baisse',
      briefing: [
        { who: 'omar', text: "La pression de la cabine continue de baisser. Lentement, mais ça ne s'arrête pas." },
        { who: 'layla', text: "Et le réservoir d'air de secours se vide vite en essayant de compenser." },
        { who: 'sara', text: "Mes oreilles se sont bouchées ce matin. Bizarre." }
      ],
      choice: {
        question: "La pression baisse. On rajoute de l'air depuis le réservoir de secours maintenant ?",
        options: [
          { name: "Rajouter de l'air", note: 'Tout le monde se sent mieux et travaille plus vite', nextSol: 'Tout le monde allait bien, mais le réservoir de secours est beaucoup plus bas maintenant.' },
          { name: 'Garder le réservoir', note: 'Les oreilles bouchées ralentissent tout le monde', nextSol: 'Le réservoir de secours est toujours là pour une vraie urgence.' }
        ]
      },
      suspects: {
        hole: { name: 'Trou dans le mur', note: 'De minuscules roches spatiales frappent Mars' },
        seal: { name: 'La porte du sas ne ferme pas bien', note: 'Une porte doit être bien étanche' },
        gauge: { name: 'Manomètre cassé', note: "L'air est peut-être bon" },
        cold: { name: "La base s'est refroidie", note: "L'air froid prend moins de place" }
      },
      wrongCall: {
        hole: { who: 'omar', text: "J'ai écouté chaque mur. Aucun trou nulle part." },
        seal: { who: 'sara', text: "Le joint du sas est impeccable. Ce n'est pas ça." },
        gauge: { who: 'omar', text: "Le manomètre de rechange indique la même chose. L'air fuit vraiment." },
        cold: { who: 'sara', text: 'Il fait 21 °C ici, comme toujours.' }
      },
      tests: {
        pressureGauge: {
          name: 'Vérifier avec un manomètre de rechange',
          desc: "Est-il d'accord avec l'ancien ?",
          options: ["Ils sont d'accord", 'Le neuf lit normal'],
          results: ["Les deux manomètres sont d'accord. L'air s'échappe vraiment.", "L'ancien manomètre se trompait."]
        },
        rooms: {
          name: 'Fermer les portes entre les salles',
          desc: "Ferme chaque porte, puis regarde quelle salle perd de l'air.",
          options: ["Chaque salle perd de l'air", 'Une seule salle en perd'],
          results: ["Chaque salle perd de l'air.", "Une seule salle perd de l'air. Regarde le graphique pour savoir laquelle !"]
        },
        hull: {
          name: 'Écouter les murs pour repérer les fuites',
          desc: "Un appareil d'écoute peut entendre l'air qui siffle. Vérifier chaque mur prend du temps.",
          options: ['Un fort sifflement quelque part', 'Silence partout'],
          results: ['Un fort sifflement vient du mur de la serre. Un tout petit trou !', "Les murs de l'habitat, du labo et de la serre sont tous silencieux. Aucun trou."]
        },
        seal: {
          name: 'Regarder le joint de la porte du sas',
          desc: 'Mesure le jeu autour du joint en caoutchouc. Au-delà de 0,5 mm, ça fuit.',
          options: ['Étanche tout autour', 'Un jeu en bas'],
          results: ['Le joint est étanche tout autour.', "De la poussière rouge est coincée en bas du joint. L'air se faufile par l'interstice."]
        }
      },
      chains: {
        seal: ['La poussière se coince dans le joint du sas', 'La porte ne peut plus fermer hermétiquement', "L'air s'échappe lentement", 'La pression de la cabine baisse'],
        hole: ['Une minuscule roche spatiale frappe la serre', 'Elle perce un petit trou dans le mur', "L'air s'échappe lentement", 'La pression de la cabine baisse']
      },
      decoys: {
        seal: 'Une minuscule roche spatiale perce un trou',
        hole: 'La poussière se coince dans le joint du sas'
      },
      fixes: [
        { name: "Pomper plus d'air depuis le réservoir", symptom: 'La pression remonte, mais ça fuit toujours et le réservoir est presque vide.' },
        { name: 'Nettoyer le joint et fermer la porte', fixed: 'La pression se maintient. Plus de fuite !', wrong: 'Le joint était déjà propre. Ça fuit toujours.' },
        { name: 'Boucher le mur qui fuit', fixed: 'La rustine tient. La pression est de nouveau stable !', wrong: "Il n'y avait aucun trou à boucher. Ça fuit toujours." }
      ],
      fact: "En 2020, la station spatiale a eu une fuite d'air lente. L'équipage a fermé les écoutilles entre les modules pour que le Contrôle de mission surveille la pression de l'air dans chacun et trouve par où l'air s'échappait.",
      source: 'NASA'
    },

    stormIncoming: {
      title: 'Tempête en approche',
      tag: '',
      alarm: "Échec du contrôle du bouclier de l'abri anti-tempête",
      briefing: [
        { who: 'houston', text: "Alerte météo spatiale ! La base de données DONKI de la NASA montre une énorme explosion venue du Soleil, lancée à 2 678 km par seconde. C'est la vraie tempête qui a frappé Mars le 20 mai 2024." },
        { who: 'omar', text: "Problème. Les murs de l'abri sont remplis d'eau pour bloquer les radiations, et ils sont à moitié vides." },
        { who: 'sara', text: "Bizarre. J'ai réparé la pompe de la serre hier et les plantes n'ont jamais été aussi belles." },
        { who: 'layla', text: 'On a 6 heures. Trouve où est passée cette eau.' }
      ],
      choice: {
        question: 'Le rover est garé dehors. On le rentre au garage avant la tempête ?',
        options: [
          { name: 'Le rentrer', note: "Ça occupe un membre de l'équipage", nextSol: 'Le rover était à l\'abri. Ses caméras marchent parfaitement.' },
          { name: 'Le laisser dehors', note: 'Aucun temps perdu', nextSol: "Les caméras du rover se sont remplies de points blancs à cause des radiations, comme celles de Curiosity en mai 2024." }
        ]
      },
      suspects: {
        crack: { name: "Réservoir de l'abri fissuré", note: "L'eau fuit par les fissures" },
        gauge: { name: "Jauge d'eau cassée", note: 'Le réservoir est peut-être plein' },
        pump: { name: 'Pompe branchée sur le mauvais réservoir', note: 'Les tuyaux peuvent être mélangés' },
        drinking: { name: "L'équipage boit l'eau de l'abri", note: 'Un équipage assoiffé ?' }
      },
      wrongCall: {
        crack: { who: 'omar', text: "Le sol sous l'abri est complètement sec. Pas de fissure." },
        gauge: { who: 'omar', text: "J'ai mesuré à la main. Il est vraiment à moitié vide." },
        pump: { who: 'sara', text: 'La pompe prend l\'eau dans le réservoir principal, comme il faut.' },
        drinking: { who: 'layla', text: "On boit dans le réservoir principal. Personne n'a touché à l'eau de l'abri." }
      },
      tests: {
        dipstick: {
          name: "Mesurer l'eau à la main",
          desc: "Vérifie le réservoir de l'abri avec une jauge à tige.",
          options: ['Il est plein, la jauge se trompait', 'Il est vraiment bas'],
          results: ['Il est plein. La jauge se trompait.', "La jauge à tige est d'accord avec la jauge. L'eau a vraiment disparu."]
        },
        floor: {
          name: "Regarder sous l'abri",
          desc: 'Un réservoir qui fuit mouillerait le sol.',
          options: ['Sol mouillé', 'Sol sec'],
          results: ['Le sol est trempé ! L\'eau fuit du réservoir.', 'Complètement sec. Le réservoir ne fuit pas.']
        },
        flow: {
          name: "Surveiller le tuyau d'eau de l'abri",
          desc: "De l'eau sort-elle du réservoir de l'abri par le tuyau ?",
          options: ['Rien ne sort', "L'eau sort deux fois par jour"],
          results: ["Aucune eau ne sort par le tuyau.", "Chaque matin et chaque soir, de l'eau s'écoule. C'est exactement l'heure où l'on arrose les plantes."]
        },
        pump: {
          name: 'Vérifier la pompe de la serre',
          desc: "Dans quel réservoir puise-t-elle l'eau ?",
          options: ['Le réservoir principal', "Le réservoir de l'abri"],
          results: ["Elle prend l'eau dans le réservoir principal, comme il faut.", "Elle est branchée sur le réservoir de l'abri ! Les tuyaux ont été échangés quand on a réparé la pompe."]
        }
      },
      chains: {
        pump: ['La pompe est branchée sur le mauvais réservoir', "Les plantes boivent l'eau de l'abri", "Les murs de l'abri perdent de l'eau", 'Le contrôle du bouclier échoue'],
        crack: ["Le réservoir de l'abri se fissure", "L'eau fuit sous le sol", "Les murs de l'abri perdent de l'eau", 'Le contrôle du bouclier échoue']
      },
      decoys: {
        pump: 'La tempête solaire fissure le réservoir',
        crack: 'La pompe est branchée sur le mauvais réservoir'
      },
      fixes: [
        { name: "Se cacher quand même dans l'abri", wrong: 'Un demi-bouclier ne suffit pas. Le Contrôle de mission dit non.' },
        { name: 'Éteindre la pompe de la serre', symptom: "L'eau ne s'écoule plus, mais les murs sont toujours à moitié vides.", wrong: 'Le réservoir continue de fuir quand même.' },
        { name: "Remettre les tuyaux et remplir l'abri", fixed: "Contrôle du bouclier réussi ! Tout le monde est à l'abri quand la tempête frappe.", wrong: "Les tuyaux étaient bien branchés. Le réservoir perd toujours de l'eau." },
        { name: "Boucher la fissure et remplir l'abri", fixed: "Fissure bouchée, réservoir plein. Contrôle du bouclier réussi ! Tout le monde est à l'abri.", wrong: "Il n'y a aucune fissure à boucher." }
      ],
      fact: "Le 20 mai 2024, une énorme tempête solaire a frappé Mars. Le rover Curiosity de la NASA a mesuré une dose de radiation de 8 100 micrograys, à peu près autant que 30 radios du thorax. Quiconque serait resté dehors aurait eu besoin d'un abri.",
      source: 'NASA'
    }
  }
};
