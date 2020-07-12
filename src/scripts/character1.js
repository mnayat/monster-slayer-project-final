const Characters = [
    {
        characterId: 1,
        name: 'Saber',
        img: require('../../src/assets/classes/saber.gif'),
        description: 'Agile and powerful melee warriors adept at swordsmanship',
        weapons: 'Swords',
        attributes: [
            {
                attribute: 'OFF',
                level: 80
            },
            {
                attribute: 'DEF',
                level: 70
            },
            {
                attribute: 'AGI',
                level: 80
            },
            {
                attribute: 'INT',
                level: 60
            },
            {
                attribute: 'LUK',
                level: 70
            }
        ]
    },
    {
        characterId: 2,
        name: 'Archer',
        img: require('../../src/assets/classes/archer.gif'),
        description: 'A highly effective scout that deals very powerful piercing strikes',
        weapons: 'Bow and Arrow',
        attributes: [
            {
                attribute: 'OFF',
                level: 70
            },
            {
                attribute: 'DEF',
                level: 60
            },
            {
                attribute: 'AGI',
                level: 70
            },
            {
                attribute: 'INT',
                level: 70
            },
            {
                attribute: 'LUK',
                level: 90
            }
        ]
    },
    {
        characterId: 3,
        name: 'Lancer',
        img: require('../../src/assets/classes/lancer.gif'),
        description: 'Very agile warrior that excels on speed and continuous strikes',
        weapons: 'Spears/Polearms',
        attributes: [
            {
                attribute: 'OFF',
                level: 70
            },
            {
                attribute: 'DEF',
                level: 60
            },
            {
                attribute: 'AGI',
                level: 90
            },
            {
                attribute: 'INT',
                level: 60
            },
            {
                attribute: 'LUK',
                level: 80
            }
        ]
    },
    {
        characterId: 4,
        name: 'Berserker',
        img: require('../../src/assets/classes/berserker.gif'),
        description: 'Very agile warrior that excels on speed and continuous strikes',
        weapons: 'Hammers/Bludgeons',
        attributes: [
            {
                attribute: 'OFF',
                level: 90
            },
            {
                attribute: 'DEF',
                level: 100
            },
            {
                attribute: 'AGI',
                level: 60
            },
            {
                attribute: 'INT',
                level: 60
            },
            {
                attribute: 'LUK',
                level: 50
            }
        ]
    },
    {
        characterId: 5,
        name: 'Caster',
        img: require('../../src/assets/classes/caster.gif'),
        description: 'Has low combat abilities but capitalizes on destructive magecraft',
        weapons: 'Staffs',
        attributes: [
            {
                attribute: 'OFF',
                level: 60
            },
            {
                attribute: 'DEF',
                level: 50
            },
            {
                attribute: 'AGI',
                level: 80
            },
            {
                attribute: 'INT',
                level: 100
            },
            {
                attribute: 'LUK',
                level: 70
            }
        ]

    },
]
export default Characters