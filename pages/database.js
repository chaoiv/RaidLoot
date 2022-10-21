export class Database {

  gamers = [
    {
      role: 0,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
    {
      role: 0,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
    {
      role: 1,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
    {
      role: 1,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
    {
      role: 2,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
    {
      role: 2,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
    {
      role: 2,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
    {
      role: 2,
      job: 0,
      gear: {
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        necklace: 0,
        earrings: 0,
        bracelet: 0,
        ring1: 0,
        ring2: 0,
      }
    },
  ];

  slotNames = {
    head: "Helm",
    body: "Chest",
    hands: "Hands",
    legs: "Legs",
    feet: "Feet",
    necklace: "Necklace",
    earrings: "Earrings",
    bracelet: "Bracelet",
    ring1: "Ring",
    ring2: "Ring"
  };

  roles = [
    {
      name: 'Tank',
      jobs: [1, 2, 3, 4]
    },
    {
      name: 'Healer',
      jobs: [16, 17, 18, 19]
    },
    {
      name: 'DPS',
      jobs: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  ];

  jobs = [
    {
      name: 'Job ...'
    },
    {
      name: 'Paladin',
      gear: 0
    },
    {
      name: 'Warrior',
      gear: 0
    },
    {
      name: 'Dark Knight',
      gear: 0
    },
    {
      name: 'Gunbreaker',
      gear: 0
    },
    {
      name: 'Monk',
      gear: 1
    },
    {
      name: 'Dragoon',
      gear: 2
    },
    {
      name: 'Ninja',
      gear: 3
    },
    {
      name: 'Samurai',
      gear: 1
    },
    {
      name: 'Reaper',
      gear: 2
    },
    {
      name: 'Bard',
      gear: 4
    },
    {
      name: 'Machinist',
      gear: 4
    },
    {
      name: 'Dancer',
      gear: 4
    },
    {
      name: 'Black Mage',
      gear: 5
    },
    {
      name: 'Summoner',
      gear: 5
    },
    {
      name: 'Red Mage',
      gear: 5
    },
    {
      name: 'White Mage',
      gear: 6
    },
    {
      name: 'Scholar',
      gear: 6
    },
    {
      name: 'Astrologian',
      gear: 6
    },
    {
      name: 'Sage',
      gear: 6
    },
  ];

  gear = [
    { // Tanks
      abyssos: {
        head: [123, 456, 543543],
        body: [13213, 2312314, 54534],
        hands: [543534, 534543, 543543],
        legs: [543534, 534543, 543535],
        feet: [764574, 234325, 76575],
        necklace: [7657564, 6544232, 7865467],
        earrings: [8768674, 7653454, 234567],
        bracelet: [765563, 76524, 65422],
        ring1: [6745335, 243454, 23456],
        ring2: [6745335, 243454, 23456],
      },
    },
    { // Striking
      abyssos: {
        head: [123, 456, 543543],
        body: [13213, 2312314, 54534],
        hands: [543534, 534543, 543543],
        legs: [543534, 534543, 543535],
        feet: [764574, 234325, 76575],
        necklace: [7657564, 6544232, 7865467],
        earrings: [8768674, 7653454, 234567],
        bracelet: [765563, 76524, 65422],
        ring1: [6745335, 243454, 23456],
        ring2: [6745335, 243454, 23456],
      },
    },
    { // Maiming
      abyssos: {
        head: [123, 456, 543543],
        body: [13213, 2312314, 54534],
        hands: [543534, 534543, 543543],
        legs: [543534, 534543, 543535],
        feet: [764574, 234325, 76575],
        necklace: [7657564, 6544232, 7865467],
        earrings: [8768674, 7653454, 234567],
        bracelet: [765563, 76524, 65422],
        ring1: [6745335, 243454, 23456],
        ring2: [6745335, 243454, 23456],
      },
    },
    { // Scouting
      abyssos: {
        head: [123, 456, 543543],
        body: [13213, 2312314, 54534],
        hands: [543534, 534543, 543543],
        legs: [543534, 534543, 543535],
        feet: [764574, 234325, 76575],
        necklace: [7657564, 6544232, 7865467],
        earrings: [8768674, 7653454, 234567],
        bracelet: [765563, 76524, 65422],
        ring1: [6745335, 243454, 23456],
        ring2: [6745335, 243454, 23456],
      },
    },
    { // Aiming
      abyssos: {
        head: [123, 456, 543543],
        body: [13213, 2312314, 54534],
        hands: [543534, 534543, 543543],
        legs: [543534, 534543, 543535],
        feet: [764574, 234325, 76575],
        necklace: [7657564, 6544232, 7865467],
        earrings: [8768674, 7653454, 234567],
        bracelet: [765563, 76524, 65422],
        ring1: [6745335, 243454, 23456],
        ring2: [6745335, 243454, 23456],
      },
    },
    { // Casting
      abyssos: {
        head: [123, 456, 543543],
        body: [13213, 2312314, 54534],
        hands: [543534, 534543, 543543],
        legs: [543534, 534543, 543535],
        feet: [764574, 234325, 76575],
        necklace: [7657564, 6544232, 7865467],
        earrings: [8768674, 7653454, 234567],
        bracelet: [765563, 76524, 65422],
        ring1: [6745335, 243454, 23456],
        ring2: [6745335, 243454, 23456],
      },
    },
    { // Healing
      abyssos: {
        head: [123, 456, 543543],
        body: [13213, 2312314, 54534],
        hands: [543534, 534543, 543543],
        legs: [543534, 534543, 543535],
        feet: [764574, 234325, 76575],
        necklace: [7657564, 6544232, 7865467],
        earrings: [8768674, 7653454, 234567],
        bracelet: [765563, 76524, 65422],
        ring1: [6745335, 243454, 23456],
        ring2: [6745335, 243454, 23456],
      },
    }
  ];

  getGamers() {
    return this.gamers;
  }

  getGamer(gamer) {
    return this.gamers[gamer];
  }

  getGamerJob(gamer) {
    return this.gamers[gamer].job;
  }

  getGamerGear(gamer) {
    return this.gamers[gamer].gear;
  }

  getGamerGearSlot(gamer, slot) {
    return this.gamers[gamer].gear[slot];
  }

  getGamerGearArray(gamer) {
    return Object.keys(this.getGamerGear(gamer));
  }

  setGamer(gamer, data) {
    this.gamers[gamer] = data;
  }

  setGamerJob(gamer, job) {
    this.gamers[gamer].job = job;
  }

  getRoles() {
    return this.roles;
  }

  getRole(role) {
    return this.roles[role];
  }

  getJobs() {
    return this.jobs;
  }

  getJob(job) {
    return this.jobs[job];
  }

  getJobGearset(job) {
    return this.jobs[job].gear;
  }

  getGear() {
    return this.gear();
  }

  getGearSlotName(slot) {
    return this.slotNames[slot];
  }

  getGearSlotPieces(gearset, raid, slot) {
    return this.gear[gearset][raid][slot];
  }

  getGearPiece(item) {
    // TODO: Fetch from API
    return item;
  }
}

export function makeDatabase() {
  return new Database;
}

const db = makeDatabase();

export default db;