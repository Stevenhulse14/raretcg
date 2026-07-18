const data = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Leech Seed",
        "damage": 20,
        "description": "Unless all damage from this attack is prevented, heal 10 HP from Bulbasaur."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/bulbasaur.png"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": "Grass",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Vine Whip",
        "damage": 30,
        "description": "Whips the opponent with vines."
      },
      {
        "name": "Poisonpowder",
        "damage": 20,
        "description": "The Defending Pokémon is now Poisoned."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/ivysaur.png"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "type": "Grass",
    "hp": 100,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Solarbeam",
        "damage": 60,
        "description": "A powerful beam of solar energy."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/venusaur.png"
  },
  {
    "id": 4,
    "name": "Charmander",
    "type": "Fire",
    "hp": 50,
    "rarity": "Common",
    "attack": [
      {
        "name": "Scratch",
        "damage": 10,
        "description": "A basic physical attack."
      },
      {
        "name": "Ember",
        "damage": 30,
        "description": "Discard 1 Fire Energy attached to Charmander."
      }
    ],
    "weaknesses": ["Water"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/charmander.png"
  },
  {
    "id": 5,
    "name": "Charizard",
    "type": "Fire",
    "hp": 120,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Fire Spin",
        "damage": 100,
        "description": "Discard 2 Fire Energy attached to Charizard."
      }
    ],
    "weaknesses": ["Water"],
    "resistances": ["Fighting"],
    "retreatCost": 3,
    "imageUrl": "/images/charizard.png"
  },
  {
    "id": 6,
    "name": "Squirtle",
    "type": "Water",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Bubble",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      },
      {
        "name": "Withdraw",
        "damage": 0,
        "description": "Flip a coin. If heads, prevent all damage done to Squirtle next turn."
      }
    ],
    "weaknesses": ["Electric"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/squirtle.png"
  },
  {
    "id": 7,
    "name": "Wartortle",
    "type": "Water",
    "hp": 70,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Withdraw",
        "damage": 0,
        "description": "Flip a coin. If heads, prevent all damage done to Wartortle next turn."
      },
      {
        "name": "Bite",
        "damage": 40,
        "description": "A sharp bite attack."
      }
    ],
    "weaknesses": ["Electric"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/wartortle.png"
  },
  {
    "id": 8,
    "name": "Blastoise",
    "type": "Water",
    "hp": 100,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Hydro Pump",
        "damage": "40+",
        "description": "Does 40 damage plus 10 more for each extra Water Energy attached to Blastoise."
      }
    ],
    "weaknesses": ["Electric"],
    "resistances": [],
    "retreatCost": 3,
    "imageUrl": "/images/blastoise.png"
  },
  {
    "id": 9,
    "name": "Pikachu",
    "type": "Electric",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Thunder Jolt",
        "damage": 30,
        "description": "Flip a coin. If tails, Pikachu does 10 damage to itself."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": ["Steel"],
    "retreatCost": 1,
    "imageUrl": "/images/pikachu.png"
  },
  {
    "id": 10,
    "name": "Mewtwo",
    "type": "Psychic",
    "hp": 60,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Psychic",
        "damage": "10+",
        "description": "Does 10 damage plus 10 more for each Energy attached to your opponent’s Active Pokémon."
      },
      {
        "name": "Barrier",
        "damage": 0,
        "description": "Discard 1 Psychic Energy attached to Mewtwo to prevent all effects of attacks next turn."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/mewtwo.png"
  },
  {
    "id": 11,
    "name": "Caterpie",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "String Shot",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/caterpie.png"
  },
  {
    "id": 12,
    "name": "Metapod",
    "type": "Grass",
    "hp": 70,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Stiffen",
        "damage": 0,
        "description": "Flip a coin. If heads, prevent all damage done to Metapod next turn."
      },
      {
        "name": "Stun Spore",
        "damage": 20,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/metapod.png"
  },
  {
    "id": 13,
    "name": "Butterfree",
    "type": "Grass",
    "hp": 70,
    "rarity": "Rare",
    "attack": [
      {
        "name": "Whirlwind",
        "damage": 20,
        "description": "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon."
      },
      {
        "name": "Mega Drain",
        "damage": 40,
        "description": "Remove damage counters from Butterfree equal to half the damage done to the opponent."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": ["Fighting"],
    "retreatCost": 0,
    "imageUrl": "/images/butterfree.png"
  },
  {
    "id": 14,
    "name": "Weedle",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Poison Sting",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Poisoned."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/weedle.png"
  },
  {
    "id": 15,
    "name": "Kakuna",
    "type": "Grass",
    "hp": 80,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Stiffen",
        "damage": 0,
        "description": "Flip a coin. If heads, prevent all damage done to Kakuna next turn."
      },
      {
        "name": "Poisonpowder",
        "damage": 20,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Poisoned."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/kakuna.png"
  },
  {
    "id": 16,
    "name": "Beedrill",
    "type": "Grass",
    "hp": 80,
    "rarity": "Rare",
    "attack": [
      {
        "name": "Twinneedle",
        "damage": "30x",
        "description": "Flip 2 coins. This attack does 30 damage times the number of heads."
      },
      {
        "name": "Poison Sting",
        "damage": 20,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Poisoned."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": ["Fighting"],
    "retreatCost": 0,
    "imageUrl": "/images/beedrill.png"
  },
  {
    "id": 17,
    "name": "Pidgey",
    "type": "Colorless",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Whirlwind",
        "damage": 10,
        "description": "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon."
      }
    ],
    "weaknesses": ["Electric"],
    "resistances": ["Fighting"],
    "retreatCost": 1,
    "imageUrl": "/images/pidgey.png"
  },
  {
    "id": 18,
    "name": "Pidgeotto",
    "type": "Colorless",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Whirlwind",
        "damage": 20,
        "description": "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon."
      },
      {
        "name": "Mirror Move",
        "damage": 0,
        "description": "If Pidgeotto was attacked last turn, use that attack’s effect as this attack."
      }
    ],
    "weaknesses": ["Electric"],
    "resistances": ["Fighting"],
    "retreatCost": 1,
    "imageUrl": "/images/pidgeotto.png"
  },
  {
    "id": 19,
    "name": "Rattata",
    "type": "Colorless",
    "hp": 30,
    "rarity": "Common",
    "attack": [
      {
        "name": "Bite",
        "damage": 20,
        "description": "A sharp bite attack."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": ["Psychic"],
    "retreatCost": 0,
    "imageUrl": "/images/rattata.png"
  },
  {
    "id": 20,
    "name": "Raticate",
    "type": "Colorless",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Bite",
        "damage": 30,
        "description": "A sharp bite attack."
      },
      {
        "name": "Super Fang",
        "damage": 0,
        "description": "Does damage equal to half the Defending Pokémon’s remaining HP (rounded up)."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": ["Psychic"],
    "retreatCost": 1,
    "imageUrl": "/images/raticate.png"
  },
  {
    "id": 21,
    "name": "Spearow",
    "type": "Colorless",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Peck",
        "damage": 10,
        "description": "A light peck attack."
      },
      {
        "name": "Mirror Move",
        "damage": 0,
        "description": "If Spearow was attacked last turn, use that attack’s effect as this attack."
      }
    ],
    "weaknesses": ["Electric"],
    "resistances": ["Fighting"],
    "retreatCost": 1,
    "imageUrl": "/images/spearow.png"
  },
  {
    "id": 22,
    "name": "Fearow",
    "type": "Colorless",
    "hp": 70,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Agility",
        "damage": 20,
        "description": "Flip a coin. If heads, prevent all effects of attacks during your opponent’s next turn."
      },
      {
        "name": "Drill Peck",
        "damage": 40,
        "description": "A powerful beak strike."
      }
    ],
    "weaknesses": ["Electric"],
    "resistances": ["Fighting"],
    "retreatCost": 0,
    "imageUrl": "/images/fearow.png"
  },
  {
    "id": 23,
    "name": "Ekans",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Wrap",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      },
      {
        "name": "Poison Sting",
        "damage": 20,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Poisoned."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/ekans.png"
  },
  {
    "id": 24,
    "name": "Arbok",
    "type": "Grass",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Wrap",
        "damage": 20,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      },
      {
        "name": "Poison Fang",
        "damage": 30,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Poisoned."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/arbok.png"
  },
  {
    "id": 25,
    "name": "Sandshrew",
    "type": "Fighting",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Sand-attack",
        "damage": 10,
        "description": "If the opponent tries to attack next turn, flip a coin. If tails, that attack does nothing."
      }
    ],
    "weaknesses": ["Grass"],
    "resistances": ["Electric"],
    "retreatCost": 1,
    "imageUrl": "/images/sandshrew.png"
  },
  {
    "id": 26,
    "name": "Sandslash",
    "type": "Fighting",
    "hp": 70,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Slash",
        "damage": 20,
        "description": "A sharp claw attack."
      },
      {
        "name": "Fury Swipes",
        "damage": "20x",
        "description": "Flip 3 coins. This attack does 20 damage times the number of heads."
      }
    ],
    "weaknesses": ["Grass"],
    "resistances": ["Electric"],
    "retreatCost": 1,
    "imageUrl": "/images/sandslash.png"
  },
  {
    "id": 27,
    "name": "Nidoran♀",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Fury Swipes",
        "damage": "10x",
        "description": "Flip 3 coins. This attack does 10 damage times the number of heads."
      },
      {
        "name": "Call for Family",
        "damage": 0,
        "description": "Search your deck for a Basic Pokémon named Nidoran♀ and put it onto your Bench."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/nidoranf.png"
  },
  {
    "id": 28,
    "name": "Nidorina",
    "type": "Grass",
    "hp": 70,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Supersonic",
        "damage": 0,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Confused."
      },
      {
        "name": "Double Kick",
        "damage": "30x",
        "description": "Flip 2 coins. This attack does 30 damage times the number of heads."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/nidorina.png"
  },
  {
    "id": 29,
    "name": "Nidoqueen",
    "type": "Grass",
    "hp": 90,
    "rarity": "Rare",
    "attack": [
      {
        "name": "Boyfriends",
        "damage": "20+",
        "description": "Does 20 damage plus 20 more damage for each Nidoking you have in play."
      },
      {
        "name": "Mega Punch",
        "damage": 50,
        "description": "A heavy punch attack."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 3,
    "imageUrl": "/images/nidoqueen.png"
  },
  {
    "id": 30,
    "name": "Nidoran♂",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Horn Hazard",
        "damage": "30x",
        "description": "Flip a coin. If tails, this attack does nothing."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/nidoranm.png"
  },
  {
    "id": 31,
    "name": "Nidorino",
    "type": "Grass",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Horn Attack",
        "damage": 30,
        "description": "A strong horn strike."
      },
      {
        "name": "Fury Attack",
        "damage": "30x",
        "description": "Flip 3 coins. This attack does 30 damage times the number of heads."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/nidorino.png"
  },
  {
    "id": 32,
    "name": "Nidoking",
    "type": "Grass",
    "hp": 90,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Thrash",
        "damage": "30+",
        "description": "Flip a coin. If heads, this attack does 10 more damage. If tails, Nidoking does 10 damage to itself."
      },
      {
        "name": "Toxic",
        "damage": 20,
        "description": "The opponent’s Active Pokémon is now Poisoned. Put two damage counters instead of one between turns."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": [],
    "retreatCost": 3,
    "imageUrl": "/images/nidoking.png"
  },
  {
    "id": 33,
    "name": "Clefairy",
    "type": "Colorless",
    "hp": 40,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Sing",
        "damage": 0,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Asleep."
      },
      {
        "name": "Metronome",
        "damage": 0,
        "description": "Choose 1 of the opponent’s Pokémon’s attacks and use it as this attack."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/clefairy.png"
  },
  {
    "id": 34,
    "name": "Clefable",
    "type": "Colorless",
    "hp": 70,
    "rarity": "Rare",
    "attack": [
      {
        "name": "Metronome",
        "damage": 0,
        "description": "Choose 1 of the opponent’s Pokémon’s attacks and use it as this attack."
      },
      {
        "name": "Minimize",
        "damage": 0,
        "description": "During your opponent’s next turn, any damage done to Clefable is reduced by 20."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/clefable.png"
  },
  {
    "id": 35,
    "name": "Vulpix",
    "type": "Fire",
    "hp": 50,
    "rarity": "Common",
    "attack": [
      {
        "name": "Confuse Ray",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Confused."
      }
    ],
    "weaknesses": ["Water"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/vulpix.png"
  },
  {
    "id": 36,
    "name": "Ninetales",
    "type": "Fire",
    "hp": 80,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Lure",
        "damage": 0,
        "description": "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon."
      },
      {
        "name": "Fire Blast",
        "damage": 80,
        "description": "Discard 1 Fire Energy attached to Ninetales."
      }
    ],
    "weaknesses": ["Water"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/ninetales.png"
  },
  {
    "id": 37,
    "name": "Jigglypuff",
    "type": "Colorless",
    "hp": 60,
    "rarity": "Common",
    "attack": [
      {
        "name": "Lullaby",
        "damage": 0,
        "description": "The opponent’s Active Pokémon is now Asleep."
      },
      {
        "name": "Pound",
        "damage": 20,
        "description": "A simple but solid strike."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/jigglypuff.png"
  },
  {
    "id": 38,
    "name": "Wigglytuff",
    "type": "Colorless",
    "hp": 80,
    "rarity": "Rare",
    "attack": [
      {
        "name": "Lullaby",
        "damage": 0,
        "description": "The opponent’s Active Pokémon is now Asleep."
      },
      {
        "name": "Do the Wave",
        "damage": "10+",
        "description": "Does 10 damage plus 10 more damage for each of your Benched Pokémon."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/wigglytuff.png"
  },
  {
    "id": 39,
    "name": "Zubat",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Leech Life",
        "damage": 10,
        "description": "Heal from Zubat the same amount of damage you did to the opponent."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": ["Fighting"],
    "retreatCost": 0,
    "imageUrl": "/images/zubat.png"
  },
  {
    "id": 40,
    "name": "Golbat",
    "type": "Grass",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Leech Life",
        "damage": 20,
        "description": "Heal from Golbat the same amount of damage you did to the opponent."
      }
    ],
    "weaknesses": ["Psychic"],
    "resistances": ["Fighting"],
    "retreatCost": 0,
    "imageUrl": "/images/golbat.png"
  },
  {
    "id": 41,
    "name": "Oddish",
    "type": "Grass",
    "hp": 50,
    "rarity": "Common",
    "attack": [
      {
        "name": "Stun Spore",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      },
      {
        "name": "Sprout",
        "damage": 0,
        "description": "Search your deck for a Basic Pokémon and put it onto your Bench."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/oddish.png"
  },
  {
    "id": 42,
    "name": "Gloom",
    "type": "Grass",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Poisonpowder",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Poisoned."
      },
      {
        "name": "Foul Odor",
        "damage": 20,
        "description": "Both Active Pokémon are now Confused."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/gloom.png"
  },
  {
    "id": 43,
    "name": "Vileplume",
    "type": "Grass",
    "hp": 80,
    "rarity": "Rare Holo",
    "attack": [
      {
        "name": "Petal Dance",
        "damage": "40x",
        "description": "Flip 3 coins. This attack does 40 damage times the number of heads. Vileplume is now Confused."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 2,
    "imageUrl": "/images/vileplume.png"
  },
  {
    "id": 44,
    "name": "Paras",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Scratch",
        "damage": 20,
        "description": "A simple claw attack."
      },
      {
        "name": "Spore",
        "damage": 0,
        "description": "The opponent’s Active Pokémon is now Asleep."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/paras.png"
  },
  {
    "id": 45,
    "name": "Parasect",
    "type": "Grass",
    "hp": 60,
    "rarity": "Uncommon",
    "attack": [
      {
        "name": "Spore",
        "damage": 0,
        "description": "The opponent’s Active Pokémon is now Asleep."
      },
      {
        "name": "Slash",
        "damage": 30,
        "description": "A sharp claw attack."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/parasect.png"
  },
  {
    "id": 46,
    "name": "Venonat",
    "type": "Grass",
    "hp": 40,
    "rarity": "Common",
    "attack": [
      {
        "name": "Stun Spore",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      },
      {
        "name": "Leech Life",
        "damage": 10,
        "description": "Heal from Venonat the same amount of damage you did to the opponent."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/venonat.png"
  },
  {
    "id": 47,
    "name": "Venomoth",
    "type": "Grass",
    "hp": 70,
    "rarity": "Rare",
    "attack": [
      {
        "name": "Venom Powder",
        "damage": 10,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Confused and Poisoned."
      },
      {
        "name": "Stun Spore",
        "damage": 20,
        "description": "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      }
    ],
    "weaknesses": ["Fire"],
    "resistances": ["Fighting"],
    "retreatCost": 0,
    "imageUrl": "/images/venomoth.png"
  },
  {
    "id": 48,
    "name": "Diglett",
    "type": "Fighting",
    "hp": 30,
    "rarity": "Common",
    "attack": [
      {
        "name": "Dig",
        "damage": 10,
        "description": "Digs underground to attack."
      },
      {
        "name": "Mud Slap",
        "damage": 30,
        "description": "Throws mud at the opponent."
      }
    ],
    "weaknesses": ["Grass", "Water"],
    "resistances": ["Electric"],
    "retreatCost": 0,
    "imageUrl": "/images/diglett.png"
  },
  {
    "id": 49,
    "name": "Dugtrio",
    "type": "Fighting",
    "hp": 70,
    "rarity": "Rare",
    "attack": [
      {
        "name": "Slash",
        "damage": 40,
        "description": "A sharp triple strike."
      },
      {
        "name": "Earthquake",
        "damage": 70,
        "description": "Does 10 damage to each of your own Benched Pokémon."
      }
    ],
    "weaknesses": ["Grass", "Water"],
    "resistances": ["Electric"],
    "retreatCost": 2,
    "imageUrl": "/images/dugtrio.png"
  },
  {
    "id": 50,
    "name": "Meowth",
    "type": "Colorless",
    "hp": 50,
    "rarity": "Common",
    "attack": [
      {
        "name": "Pay Day",
        "damage": 10,
        "description": "Flip a coin. If heads, draw a card."
      }
    ],
    "weaknesses": ["Fighting"],
    "resistances": [],
    "retreatCost": 1,
    "imageUrl": "/images/meowth.png"
  }

];

module.exports = data;
