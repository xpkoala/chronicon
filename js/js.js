let character = {
  name: '',
  health() {
    return (ballsSkill * 1.05)
  },
  mana: 100,
  damage: 0,
  attackSpeed: 100,
  critChance: 10,
  critDmg: 10,
  overpower: 10,

  poisonDmg: 10,
  frostDmg: 10,
  fireDmg: 10,
  shadowDmg: 10,
  sorceryDmg: 10,
  curseDmg: 10,
  baneDmg: 10,

  thorns: 10,
  healthPerSecond: 10,
  manaPerSecond: 10,
  healthOnHit: 10,
  ManaOnHit: 10,
  potionEffectiveness: 10,
  moveSpeed: 10,
};

let druid = {
  skillOne: {
    max: 10
  }
};