const characterWarlock = {
  name: 'Warlock',
  healthBonus() {
    let health = 0;
    health += (warlockMastery.bane.darkBlood.currentRank * warlockMastery.bane.darkBlood.multiplier);
    return ({name: 'Health Bonus', value: health});
  },
  healthPercent() {
    const healthPercentage = 0;
    return ({name: 'Health Percent', value: healthPercentage});
  },
  healthPerSecond() {
    let healthPerSecond = 0;
    healthPerSecond += (warlockMastery.bane.unholyRenewal.currentRank * warlockMastery.bane.unholyRenewal.multiplier);
    return ({name: 'Health Per Second', value: healthPerSecond});
  },
  healthOnHit() {
    const healthOnHit = 0;
    return ({name: 'Health On Hit', value: healthOnHit});
  },
  manaBonus() {
    let manaBonus = 0;
    manaBonus += (warlockMastery.curse.soulDrinker.currentRank * warlockMastery.curse.soulDrinker.multiplier);
    return ({name: 'Mana Bonus', value: manaBonus});
  },
  manaPercent() {
    let manaPercent = 0;
    manaPercent += (warlockMastery.shadow.soulDrain.currentRank * warlockMastery.shadow.soulDrain.multiplier);
    return ({name: 'Mana Percent', value: manaPercent});
  },
  manaPerSecond() {
    const manaPerSecond = 0;
    return ({name: 'Mana Per Second', value: manaPerSecond});
  },
  manaOnHit() {
    const manaOnHit = 0;
    return ({name: 'Mana On Hit', value: manaOnHit});
  },
  reach() {
    let reach = 0;
    reach += (warlockMastery.fire.destruction.currentRank * warlockMastery.fire.destruction.multiplier);
    return ({name: 'Reach', value: reach});
  },
  effectDuration() {
    let effectDuration = 0;
    effectDuration += (warlockMastery.curse.jinxed.currentRank * warlockMastery.curse.jinxed.multiplier);
    return ({name: 'Effect Duration', value: effectDuration});
  },
  damageBonus() {
    let damageBonus = 0;
    damageBonus += (warlockMastery.sorcery.spellpower.currentRank * warlockMastery.sorcery.spellpower.multiplier);
    return ({name: 'Damage Bonus', value: damageBonus});
  },
  attackSpeedBonus() {
    let attackSpeedBonus = 0;
    attackSpeedBonus += (warlockMastery.poison.rapidInfections.currentRank * warlockMastery.poison.rapidInfections.currentRank);
    return ({name: 'Attack Speed Bonus', value: attackSpeedBonus});
  },
  critChance() {
    let critChance = 0;
    critChance += (warlockMastery.sorcery.elementalOverload.currentRank * warlockMastery.sorcery.elementalOverload.multiplier);
    return ({name: 'Crit Chance', value: critChance});
  },
  critDamage() {
    let critDamage = 0;
    critDamage += (warlockMastery.frost.skullShatter.currentRank * warlockMastery.frost.skullShatter.multiplier);
    return ({name: 'Crit Damage', value: critDamage});
  },
  overpowerBonus() {
    let overpowerBonus = 0;
    overpowerBonus += (warlockMastery.bane.overpowerSkill.currentRank * warlockMastery.bane.overpowerSkill.multiplier)
    + (warlockMastery.curse.overpowerSkill.currentRank * warlockMastery.curse.overpowerSkill.multiplier)
    + (warlockMastery.sorcery.overpowerSkill.currentRank * warlockMastery.sorcery.overpowerSkill.multiplier);
    return ({name: 'Overpower Bonus', value: overpowerBonus});
  },
  poisonDamage() {
    const poisonDamage = 0;
    return ({name: 'Poison Damage', value: poisonDamage});
  },
  frostDamage() {
    const frostDamage = 0;
    return ({name: 'Frost Damage', value: frostDamage});
  },
  fireDamage() {
    const fireDamage = 0;
    return ({name: 'Fire Damage', value: fireDamage});
  },
  shadowDamage() {
    const shadowDamage = 0;
    return ({name: 'Shadow Damage', value: shadowDamage});
  },
  sorceryDamage() {
    const sorceryDamage = 0;
    return ({name: 'Sorcery Damage', value: sorceryDamage});
  },
  curseDamage() {
    const curseDamage = 0;
    return ({name: 'Curse Damage', value: curseDamage});
  },
  baneDamage() {
    const baneDamage = 0;
    return ({name: 'Bane Damage', value: baneDamage});
  },
  physicalResist() {
    const physicalResist = 0;
    return ({name: 'Physical Resist', value: physicalResist});
  },
  fireResist() {
    let fireResist = 0;
    fireResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return ({name: 'Fire Resist', value: fireResist});
  },
  frostResist() {
    let frostResist = 0;
    frostResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return ({name: 'Frost Resist', value: frostResist});
  },
  lightningResist() {
    let lightningResist = 0;
    lightningResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return ({name: 'Lightning Resist', value: lightningResist});
  },
  poisonResist() {
    let poisonResist = 0;
    poisonResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return ({name: 'Poison Resist', value: poisonResist});
  },
  holyResist() {
    let holyResist = 0;
    holyResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return ({name: 'Holy Resist', value: holyResist});
  },
  ShadowResist() {
    let ShadowResist = 0;
    ShadowResist += (warlockMastery.bane.enhancedResistance.currentRank * warlockMastery.bane.enhancedResistance.multiplier)
    + (warlockMastery.curse.enhancedResistance.currentRank * warlockMastery.curse.enhancedResistance.multiplier)
    + (warlockMastery.sorcery.enhancedResistance.currentRank * warlockMastery.sorcery.enhancedResistance.multiplier);
    return ({name: 'Shadow Resist', value: ShadowResist});
  },
  thorns() {
    const thorns = 0;
    return ({name: 'Thorns', value: thorns});
  },
  potionEffectiveness() {
    let potionEffectiveness = 0;
    potionEffectiveness += (warlockMastery.curse.improvedPotions.currentRank * warlockMastery.curse.improvedPotions.multiplier)
   + (warlockMastery.sorcery.improvedPotions.currentRank * warlockMastery.sorcery.improvedPotions.multiplier)
   + (warlockMastery.bane.improvedPotions.currentRank * warlockMastery.bane.improvedPotions.multiplier);
    return ({name: 'Potion Effectiveness', value: potionEffectiveness});
  },
  moveSpeed() {
    let moveSpeed = 0;
    moveSpeed += (warlockMastery.bane.deathsMarch.currentRank * warlockMastery.bane.deathsMarch.multiplier);
    return ({name: 'Move Speed', value: moveSpeed});
  },

};

var warlockMastery = {
  fire: {
    fireMastery: {
      name: 'Fire Mastery',
      image: './img/warlock/mastery/fire/fire_mastery.png',
    },
    destruction: {
      name: 'Destruction',
      description: '+1% Reach.',
      type: ['fire'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
      image: './img/warlock/mastery/fire/destruction.png',
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
      image: './img/warlock/mastery/fire/ignition.png',
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
      image: './img/warlock/mastery/fire/incendiary_spells.png',
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
      image: './img/warlock/mastery/fire/animosity.png',
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
      image: './img/warlock/mastery/fire/blast_wave.png',
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
      image: './img/warlock/mastery/fire/pyromaniac.png',
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
      image: './img/warlock/mastery/fire/burning_hells.png',
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
      image: './img/warlock/mastery/fire/hellraiser.png',
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
      image: './img/warlock/mastery/fire/diabolist.png',
    },
  },
  shadow: {
    shadowMastery: {
      name: 'Shadow Mastery',
      image: './img/warlock/mastery/shadow/shadow_mastery.png'
    },
    soulDrain: {
      name: 'Soul Drain',
      description: '1% Mana.',
      type: ['Shadow'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
      image: './img/warlock/mastery/shadow/soul_drain.png',
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
      image: './img/warlock/mastery/shadow/necromancy.png',
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
      image: './img/warlock/mastery/shadow/deathblow.png',
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
      image: './img/warlock/mastery/shadow/dont_fear_the_reaper.png',
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
      image: './img/warlock/mastery/shadow/dark_lust.png',
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
      image: './img/warlock/mastery/shadow/agony.png',
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
      image: './img/warlock/mastery/shadow/sorrow.png',
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
      image: './img/warlock/mastery/shadow/bone_charmer.png',
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
      image: './img/warlock/mastery/shadow/dark_lord.png',
    },
  },
  frost: {
    frostMastery: {
      name: 'Frost Mastery',
      image: './img/warlock/mastery/frost/frost_mastery.png'
    },
    skullShatter: {
      name: 'Skull Shatter',
      description: '+1% Critical Hit Damage.',
      type: ['Frost'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
      image: './img/warlock/mastery/frost/skull_shatter.png',
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
      image: './img/warlock/mastery/frost/eternal_cold.png',
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
      image: './img/warlock/mastery/frost/frozen_corpses.png',
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
      image: './img/warlock/mastery/frost/frozen_skull.png',
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
      image: './img/warlock/mastery/frost/ice_shield.png',
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
      image: './img/warlock/mastery/frost/death_chill.png',
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
      image: './img/warlock/mastery/frost/freezing_death.png',
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
      image: './img/warlock/mastery/frost/cold_passion.png',
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
      image: './img/warlock/mastery/frost/deaths_gift.png',
    },
  },
  poison: {
    poisonMastery: {
      name: 'Poison Mastery',
      image: './img/warlock/mastery/poison/poison_mastery.png'
    },
    rapidInfections: {
      name: 'Rapid Infections',
      description: '+1% Attack Speed.',
      type: ['Poison'],
      skillType: 'passive',
      multiplier: 1,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 20,
      image: './img/warlock/mastery/poison/rapid_infections.png',
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
      image: './img/warlock/mastery/poison/rotting_flesh.png',
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
      image: './img/warlock/mastery/poison/taint.png',
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
      image: './img/warlock/mastery/poison/contamination.png',
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
      image: './img/warlock/mastery/poison/infused_blood.png',
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
      image: './img/warlock/mastery/poison/defilement.png',
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
      image: './img/warlock/mastery/poison/infectious_disease.png',
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
      image: './img/warlock/mastery/poison/sickness.png',
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
      image: './img/warlock/mastery/poison/malignancy.png',
    },
  },
  curse: {
    curseMastery: {
      name: 'Curse Mastery',
      image: './img/warlock/mastery/curse/curse_mastery.png',
    },
    soulDrinker: {
      name: 'Soul Drinker',
      description: '+10 Mana.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 99999,
      image: './img/warlock/mastery/curse/soul_drinker.png',
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
      image: './img/warlock/mastery/curse/jinxed.png',
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
      image: './img/warlock/mastery/curse/soul_vessels.png',
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
      image: './img/warlock/mastery/curse/frenzied_minions.png',
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
      image: './img/warlock/mastery/curse/improved_potions_curse.png',
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
      image: './img/warlock/mastery/curse/enhanced_resistance_curse.png',
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
      image: './img/warlock/mastery/curse/overpower_curse.png',
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
      image: './img/warlock/mastery/curse/elemental_power_curse.png',
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
      image: './img/warlock/mastery/curse/death_speaker.png',
    },
  },
  bane: {
    baneMastery: {
      name: 'Bane Mastery',
      image: './img/warlock/mastery/bane/bane_mastery.png'
    },
    darkBlood: {
      name: 'Dark Blood',
      description: '+10 Health.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 99999,
      image: './img/warlock/mastery/bane/dark_blood.png',
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
      image: './img/warlock/mastery/bane/deaths_march.png',
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
      image: './img/warlock/mastery/bane/soul_prison.png',
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
      image: './img/warlock/mastery/bane/unholy_renewal.png',
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
      image: './img/warlock/mastery/bane/improved_potions_bane.png',
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
      image: './img/warlock/mastery/bane/enhanced_resistance_bane.png',
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
      image: './img/warlock/mastery/bane/overpower_bane.png',
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
      image: './img/warlock/mastery/bane/elemental_power_bane.png',
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
      image: './img/warlock/mastery/bane/battle_mage.png',
    },
  },
  sorcery: {
    sorceryMastery: {
      name: 'Sorcery Mastery',
      image: './img/warlock/mastery/sorcery/sorcery_mastery.png'
    },
    spellpower: {
      name: 'Spellpower',
      description: '+10 Damage.',
      type: ['Ethereal'],
      skillType: 'passive',
      multiplier: 10,
      masteryReq: 0,
      currentRank: 0,
      maxRank: 99999,
      image: './img/warlock/mastery/sorcery/spellpower.png',
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
      image: './img/warlock/mastery/sorcery/elemental_overload.png',
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
      image: './img/warlock/mastery/sorcery/heightened_mind.png',
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
      image: './img/warlock/mastery/sorcery/loyal_minions.png',
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
      image: './img/warlock/mastery/sorcery/improved_potions_sorcery.png',
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
      image: './img/warlock/mastery/sorcery/enhanced_resistance_sorcery.png',
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
      image: './img/warlock/mastery/sorcery/overpower_sorcery.png',
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
      image: './img/warlock/mastery/sorcery/elemental_power_sorcery.png',
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
      image: './img/warlock/mastery/sorcery/master_sorcerer.png',
    },
  },
};
