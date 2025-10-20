const data = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    hp: 60,
    rarity: "Common",
    attack: [
      {
        name: "Thunder Shock",
        damage: 20,
        description: "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      },
      {
        name: "Quick Attack",
        damage: "10+",
        description: "Flip a coin. If heads, this attack does 10 more damage."
      }
    ],
    weaknesses: ["Ground"],
    resistances: ["Flying", "Steel"],
    retreatCost: 1,
    imageUrl: "/images/pikachu.png"
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    hp: 50,
    rarity: "Common",
    attack: [
      {
        name: "Scratch",
        damage: 10,
        description: "A basic physical attack."
      },
      {
        name: "Ember",
        damage: 30,
        description: "Discard a Fire Energy attached to this Pokémon."
      }
    ],
    weaknesses: ["Water"],
    resistances: [],
    retreatCost: 1,
    imageUrl: "/images/charmander.png"
  },
  {
    id: 3,
    name: "Bulbasaur",
    type: "Grass",
    hp: 60,
    rarity: "Common",
    attack: [
      {
        name: "Vine Whip",
        damage: 20,
        description: "Whips the opponent with vines."
      },
      {
        name: "Seed Bomb",
        damage: 30,
        description: "Fires explosive seeds at the opponent."
      }
    ],
    weaknesses: ["Fire", "Flying"],
    resistances: ["Water"],
    retreatCost: 1,
    imageUrl: "/images/bulbasaur.png"
  },
  {
    id: 4,
    name: "Squirtle",
    type: "Water",
    hp: 50,
    rarity: "Common",
    attack: [
      {
        name: "Bubble",
        damage: 10,
        description: "Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed."
      },
      {
        name: "Water Gun",
        damage: 30,
        description: "A stream of pressurized water hits the opponent."
      }
    ],
    weaknesses: ["Electric", "Grass"],
    resistances: [],
    retreatCost: 1,
    imageUrl: "/images/squirtle.png"
  },
  {
    id: 5,
    name: "Mewtwo",
    type: "Psychic",
    hp: 130,
    rarity: "Legendary",
    attack: [
      {
        name: "Psychic",
        damage: 50,
        description: "Does 10 more damage for each Energy attached to your opponent’s Active Pokémon."
      },
      {
        name: "Barrier",
        damage: 0,
        description: "During your opponent’s next turn, prevent all effects of attacks done to Mewtwo."
      }
    ],
    weaknesses: ["Dark"],
    resistances: ["Fighting"],
    retreatCost: 2,
    imageUrl: "/images/mewtwo.png"
  }
];

module.exports = data;
