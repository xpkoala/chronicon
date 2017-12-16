const characterWarlock = {
  name: 'Warlock',
  healthBonus() {
    let health = 0;
    health += (warlockMastery.bane.darkBlood.currentRank * warlockMastery.bane.darkBlood.multiplier);
    return health;
  },
  healthPercent() {
    const healthPercentage = 0;
    return null;
  },
  healthPerSecond() {
    let healthPerSecond = 0;
    healthPerSecond += (warlockMastery.bane.unholyRenewal.currentRank * warlockMastery.bane.unholyRenewal.multiplier);
    return healthPerSecond;
  },
  healthOnHit() {
    const healthOnHit = 0;
    return null;
  },
  manaBonus() {
    let manaBonus = 0;
    manaBonus += (warlockMastery.curse.soulDrinker.currentRank * warlockMastery.curse.soulDrinker.multiplier);
    return manaBonus;
  },
  manaPercent() {
    let manaPercent = 0;
    manaPercent += (warlockMastery.shadow.soulDrain.currentRank * warlockMastery.shadow.soulDrain.multiplier);
    return manaPercent;
  },
  manaPerSecond() {
    const manaPerSecond = 0;
    return null;
  },
  manaOnHit() {
    const manaOnHit = 0;
    return null;
  },
  reach() {
    let reach = 0;
    reach += (warlockMastery.fire.destruction.currentRank * warlockMastery.fire.destruction.multiplier);
    return reach;
  },
  effectDuration() {
    let effectDuration = 0;
    effectDuration += (warlockMastery.curse.jinxed.currentRank * warlockMastery.curse.jinxed.multiplier);
    return effectDuration;
  },
  damageBonus() {
    let damageBonus = 0;
    damageBonus += (warlockMastery.sorcery.spellpower.currentRank * warlockMastery.sorcery.spellpower.multiplier);
    return damageBonus;
  },
  attackSpeedBonus() {
    let attackSpeedBonus = 0;
    attackSpeedBonus += (warlockMastery.poison.rapidInfections.currentRank * warlockMastery.poison.rapidInfections.currentRank);
    return attackSpeedBonus;
  },
  critChance() {
    let critChance = 0;
    critChance += (warlockMastery.sorcery.elementalOverload.currentRank * warlockMastery.sorcery.elementalOverload.multiplier);
    return critChance;
  },
  critDamage() {
    let critDamage = 0;
    critDamage += (warlockMastery.frost.skullShatter.currentRank * warlockMastery.frost.skullShatter.multiplier);
    return critDamage;
  },
  overpowerBonus() {
    let overpowerBonus = 0;
    overpowerBonus += (warlockMastery.bane.overpowerSkill.currentRank * warlockMastery.bane.overpowerSkill.multiplier)
    + (warlockMastery.curse.overpowerSkill.currentRank * warlockMastery.curse.overpowerSkill.multiplier)
    + (warlockMastery.sorcery.overpowerSkill.currentRank * warlockMastery.sorcery.overpowerSkill.multiplier);
    return overpowerBonus;
  },
  poisonDamage() {
    const poisonDamage = 0;
    return null;
  },
  frostDamage() {
    const frostDamage = 0;
    return null;
  },
  fireDamage() {
    const fireDamage = 0;
    return null;
  },
  shadowDamage() {
    const shadowDamage = 0;
    return null;
  },
  sorceryDamage() {
    const sorceryDamage = 0;
    return null;
  },
  curseDamage() {
    const curseDamage = 0;
    return null;
  },
  baneDamage() {
    const baneDamage = 0;
    return null;
  },
  physicalResist() {
    const physicalResist = 0;
    return null;
  },
  fireResist() {
    let fireResist = 0;
    fireResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return fireResist;
  },
  frostResist() {
    let frostResist = 0;
    frostResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return frostResist;
  },
  lightningResist() {
    let lightningResist = 0;
    lightningResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return lightningResist;
  },
  poisonResist() {
    let poisonResist = 0;
    poisonResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return poisonResist;
  },
  holyResist() {
    let holyResist = 0;
    holyResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return holyResist;
  },
  ShadowResist() {
    let ShadowResist = 0;
    ShadowResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return ShadowResist;
  },
  thorns() {
    const thorns = 0;
    return null;
  },
  potionEffectiveness() {
    let potionEffectiveness = 0;
    potionEffectiveness += (warlockMastery.curse.improvedPotions.currentRank * warlockMastery.curse.improvedPotions.multiplier)
   + (warlockMastery.sorcery.improvedPotions.currentRank * warlockMastery.sorcery.improvedPotions.multiplier)
   + (warlockMastery.bane.improvedPotions.currentRank * warlockMastery.bane.improvedPotions.multiplier);
    return potionEffectiveness;
  },
  moveSpeed() {
    let moveSpeed = 0;
    moveSpeed += (warlockMastery.bane.deathsMarch.currentRank * warlockMastery.bane.deathsMarch.multiplier);
    return moveSpeed;
  },

};

let warlockMastery = {
  fire: {
    destruction: {
      name: 'Destruction',
      description: '+1% Reach.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
      image: '../img/warlock/mastery/fire/destruction.png',
    },
    ignition: {
      name: 'Ignition',
      description: '2% increased damage of *Firebomb* and *Flashfire.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 5,
      currentRank: 0,
      maxRank: 99999,
      image: '../img/warlock/mastery/fire/ignition.png',
    },
    incendiarySpells: {
      name: 'Incendiary Spells',
      description: '+1% chance to trigger *Combustion*.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 10,
      currentRank: 0,
      maxRank: 20,
      image: '../img/warlock/mastery/fire/incendiary_spells.png',
    },
    animosity: {
      name: 'Animosity',
      description: '2% increased *Detonation*, *Hell Pit*, and *Heat Wave* damage per rank.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 15,
      currentRank: 0,
      maxRank: 99999,
      image: '../img/warlock/mastery/fire/animosity.png',
    },
    blastWave: {
      name: 'Blast Wave',
      description: '5% increased damage of *Combustion*.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 20,
      currentRank: 0,
      maxRank: 100,
      image: '../img/warlock/mastery/fire/blast_wave.png',
    },
    pyromaniac: {
      name: 'Pyromaniac',
      description: '2% increased *Hellfire*, *Firenova*, and *Wall of Fire* damage.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 25,
      currentRank: 0,
      maxRank: 99999,
      image: '../img/warlock/mastery/fire/pyromaniac.png',
    },
    burningHells: {
      name: 'Burning Hells',
      description: '5% increased damage of *Flaming Hells*.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 30,
      currentRank: 0,
      maxRank: 100,
      image: '../img/warlock/mastery/fire/burning_hells.png',
    },
    hellRaiser: {
      name: 'Hell Raiser',
      description: '2% increased *Inferno*, *Meteor*, and *Fire Storm* damage per rank.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 35,
      currentRank: 0,
      maxRank: 99999,
      image: '../img/warlock/mastery/fire/hellraiser.png',
    },
    diabolist: {
      name: 'Diabolist',
      description: '3% reduced cool down of *Infernal Demon* and *Demon Spawn*.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 3,
      masteryReq: 40,
      currentRank: 0,
      maxRank: 20,
      image: '../img/warlock/mastery/fire/diabolist.png',
    },
  },
  shadow: {
    soulDrain: {
      name: 'Soul Drain',
      description: '1% Mana.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
    },
    necromancy: {
      name: 'Necromancy',
      description: '2% increased damage of *Screaming Skull* and *Hand of Death*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 5,
      currentRank: 0,
      maxRank: 99999,
    },
    deathblow: {
      name: 'Deathblow',
      description: '1% chance to trigger *Sudden Death*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 10,
      currentRank: 0,
      maxRank: 10,
    },
    dontFearTheReaper: {
      name: "Don't Fear The Reaper",
      description: '2% increased damage of *Life Reap*, *Curse of Woe*, and *Grave Blast*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 15,
      currentRank: 0,
      maxRank: 99999,
    },
    darkLust: {
      name: 'Dark Lust',
      description: '1% increased effect of *Masochism*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 20,
      currentRank: 0,
      maxRank: 20,
    },
    agony: {
      name: 'Agony',
      description: '2% increased damage of *Curse of Terror*, *Curse of Reckoning*, and *Bone Spears*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 25,
      currentRank: 0,
      maxRank: 99999,
    },
    sorrow: {
      name: 'Sorrow',
      description: '5% increased damage of *Desecration*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 30,
      currentRank: 0,
      maxRank: 100,
    },
    boneCharmer: {
      name: 'Bone Charmer',
      description: '2% increased damage of *Bone Scythe*, *Bone Storm*, and *Bone Curse*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 35,
      currentRank: 0,
      maxRank: 99999,
    },
    darkLord: {
      name: 'Dark Lord',
      description: '3% reduced cooldown of *Death Knight*, *Vampire Lord*, and *Raise Dead*.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 3,
      masteryReq: 40,
      currentRank: 0,
      maxRank: 5,
    },
  },
  frost: {
    skullShatter: {
      name: 'Skull Shatter',
      description: '+1% Critical Hit Damage.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
    },
    eternalCold: {
      name: 'Eternal Cold',
      description: '2% increased damage of *Frost Spear* and *Frozen Flash*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 5,
      currentRank: 0,
      maxRank: 99999,
    },
    frozenCorpses: {
      name: 'Frozen Corpses',
      description: '+1% chance to trigger *Corpse Shatter*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 10,
      currentRank: 0,
      maxRank: 20,
    },
    frozenSkull: {
      name: 'Frozen Skull',
      description: '2% increased damage of *Serrated Spears*, *Skull Bomb*, and *Ruin*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 15,
      currentRank: 0,
      maxRank: 99999,
    },
    iceShield: {
      name: 'Ice Shield',
      description: '5% increased damage absorbed by *Frozen Veil*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 20,
      currentRank: 0,
      maxRank: 10,
    },
    deathChill: {
      name: 'Death Chill',
      description: '2% increased damage of *Frigid Star*, *Frost Nova*, and *Frozen Fate*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 25,
      currentRank: 0,
      maxRank: 99999,
    },
    freezingDeath: {
      name: 'Freezing Death',
      description: '5% increased damage of *Cold Death*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 30,
      currentRank: 0,
      maxRank: 100,
    },
    coldPassion: {
      name: 'Cold Passion',
      description: '2% increased damage of *Comet*, *Deathly Barrage*, and *Curse of Doom*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 35,
      currentRank: 0,
      maxRank: 99999,
    },
    deathsGift: {
      name: "Death's Gift",
      description: '3% reduced cooldown of *Frozen Death* and *Lich Form*.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 3,
      masteryReq: 40,
      currentRank: 0,
      maxRank: 5,
    },
  },
  poison: {
    rapidInfections: {
      name: 'Rapid Infections',
      description: '+1% Attack Speed.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
    },
    rottingFlesh: {
      name: 'Rotting Flesh',
      description: '2% increased damage of *Poison Bolt* and *Blood Curse*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 5,
      currentRank: 0,
      maxRank: 99999,
    },
    taint: {
      name: 'Taint',
      description: '1% increased chance to trigger *Outbreak*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 10,
      currentRank: 0,
      maxRank: 20,
    },
    contamination: {
      name: 'Contamination',
      description: '2% increased damage of *Poison Skull*, *Plauge*, and *Flesh Rot*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 15,
      currentRank: 0,
      maxRank: 20,
    },
    infusedBlood: {
      name: 'Infused Blood',
      description: '1% increased chance to trigger *Living Blood*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 20,
      currentRank: 0,
      maxRank: 20,
    },
    defilement: {
      name: 'Defilement',
      description: '2% increased damage of *Poison Nova*, *Bane of the Dead*, and *Mind Torture*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 25,
      currentRank: 0,
      maxRank: 99999,
    },
    infectionsDisease: {
      name: 'Infectious Disease',
      description: '5% increased damage of *Infection*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 30,
      currentRank: 0,
      maxRank: 100,
    },
    sickness: {
      name: 'Sickness',
      description: '2% increased damage of *Vile Pool*, *Affliction*, and *Corruption*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 35,
      currentRank: 0,
      maxRank: 99999,
    },
    malignancy: {
      name: 'Malignancy',
      description: '3% reduced cooldown of *Plague Lord* and *Cloak of Infection*.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 3,
      masteryReq: 40,
      currentRank: 0,
      maxRank: 5,
    },
  },
  curse: {
    soulDrinker: {
      name: 'Soul Drinker',
      description: '+10 Mana.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 99999,
    },
    jinxed: {
      name: 'Jinxed',
      description: '+2% Effect Duration.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 5,
      currentRank: 0,
      maxRank: 10,
    },
    soulVessels: {
      name: 'Soul Vessels',
      description: '+1 Maximum Souls.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 10,
      currentRank: 0,
      maxRank: 5,
    },
    frenziedMinions: {
      name: 'Frenzied Minions',
      description: '+1% Companion Damage.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 15,
      maxRank: 30,
    },
    improvedPotions: {
      name: 'Improved Potions',
      description: '+3% Potion Effectiveness.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 3,
      masteryReq: 20,
      currentRank: 0,
      maxRank: 15,
    },
    enhancedResistance: {
      name: 'Enhanced Resistance',
      description: '+1% Resistance to all Elements.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 25,
      currentRank: 0,
      maxRank: 10,
    },
    overpowerSkill: {
      name: 'Overpower',
      description: '+10% Overpower.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 30,
      currentRank: 0,
      maxRank: 10,
    },
    elementalPowerSkill: {
      name: 'Elemental Power',
      description: '+1% to all Damage Elements.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 35,
      currentRank: 0,
      maxRank: 20,
    },
    deathSpeaker: {
      name: 'Death Speaker',
      description: '+2% Curse Skill Damage.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 40,
      currentRank: 0,
      maxRank: 10,
    },
  },
  bane: {
    darkBlood: {
      name: 'Dark Blood',
      description: '+10 Health.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 99999,
    },
    deathsMarch: {
      name: "Death's March",
      description: '+1% Movement Speed.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      umasteryReq: 5,
      currentRank: 0,
      maxRank: 10,
    },
    soulPrison: {
      name: 'Soul Prison',
      description: '+5% Soul Duration.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 10,
      currentRank: 0,
      maxRank: 10,
    },
    unholyRenewal: {
      name: 'Unholy Renewal',
      description: '+5% Health Regeneration.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 5,
      masteryReq: 15,
      currentRank: 0,
      maxRank: 30,
    },
    improvedPotions: {
      name: 'Improved Potions',
      description: '+3% Potion Effectiveness.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 3,
      masteryReq: 20,
      currentRank: 0,
      maxRank: 15,
    },
    enhancedResistance: {
      name: 'Enhanced Resistance',
      description: '+1% Resistance to all Elements.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 25,
      currentRank: 0,
      maxRank: 10,
    },
    overpowerSkill: {
      name: 'Overpower',
      description: '+10% Overpower.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 30,
      currentRank: 0,
      maxRank: 10,
    },
    elementalPowerSkill: {
      name: 'Elemental Power',
      description: '+1% to all Damage Elements.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 35,
      currentRank: 0,
      maxRank: 20,
    },
    battleMage: {
      name: 'Battle Mage',
      description: '+2% Bane Skill Damage.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 40,
      currentRank: 0,
      maxRank: 10,
    },
  },
  sorcery: {
    spellpower: {
      name: 'Spellpower',
      description: '+10 Damage.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 99999,
    },
    elementalOverload: {
      name: 'Elemental Overload',
      description: '+1% Critical Hit Chance.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 5,
      currentRank: 0,
      maxRank: 10,
    },
    heightenedMind: {
      name: 'Heightened Mind',
      description: '+1% Evasion.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 10,
      currentRank: 0,
      maxRank: 10,
    },
    loyalMinions: {
      name: 'Loyal Minions',
      description: '+1% Companion Health.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 15,
      currentRank: 0,
      maxRank: 30,
    },
    improvedPotions: {
      name: 'Improved Potions',
      description: '+3% Potion Effectiveness.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 3,
      masteryReq: 20,
      currentRank: 0,
      maxRank: 15,
    },
    enhancedResistance: {
      name: 'Enhanced Resistance',
      description: '+1% Resistance to all Elements.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 25,
      currentRank: 0,
      maxRank: 10,
    },
    overpowerSkill: {
      name: 'Overpower',
      description: '+10% Overpower.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 30,
      currentRank: 0,
      maxRank: 10,
    },
    elementalPowerSkill: {
      name: 'Elemental Power',
      description: '+1% to all Damage Elements.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 35,
      currentRank: 0,
      maxRank: 20,
    },
    masterSorcerer: {
      name: 'Master Sorcerer',
      description: '+2% Sorcery Skill Damage.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 2,
      masteryReq: 40,
      currentRank: 0,
      maxRank: 10,
    },
  },
};
