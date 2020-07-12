const Character = [
    {
       classType: 1,
       name: 'Saber',
       img :  require('../../src/assets/classes/saber.gif'),
       skills : [
           {
               _id: 1,
               name: "Basic Attack",
               classId: 1,
               damage: 10,
               target: "enemy",
               cost: 0,
               type: "P"
           },
           {
               _id: 2,
               name: "Focus",
               classId: 1,
               damage: 0,
               target: "self",
               cost: 0,
               type: "P"
           }
         
       ]
   },
   {
       classType: 2,
       name: 'Archer',
       img : require('../../src/assets/classes/archer.gif'),
       skills : [
           {
               _id: 1,
               name: "Basic Attack",
               classId: 2,
               damage: 10,
               target: "enemy",
               cost: 0,
               type: "P"
           },
           {
               _id: 2,
               name: "Focus",
               classId: 2,
               damage: 0,
               target: "self",
               cost: 0,
               type: "P"
           }
       ]
   },
   {
       classType: 3,
       name: 'Lancer',
       img : require('../../src/assets/classes/lancer.gif'),
       skills : [
           {
               _id: 1,
               name: "Basic Attack",
               classId: 3,
               damage: 10,
               target: "enemy",
               cost: 0,
               type: "P"
           },
           {
               _id: 2,
               name: "Focus",
               classId: 3,
               damage: 0,
               target: "self",
               cost: 0,
               type: "P"
           },
         
       ]
   },
   {
       classType: 4,
       name: 'Berserker',
       img : require('../../src/assets/classes/berserker.gif'),
       skills : [
           {
               _id: 1,
               name: "Basic Attack",
               classId: 4,
               damage: 10,
               target: "enemy",
               cost: 0,
               type: "P"
           },
           {
               _id: 2,
               name: "Focus",
               classId: 4,
               damage: 0,
               target: "self",
               cost: 0,
               type: "P"
           }
         
       ]
   },
   {
       classType: 5,
       name: 'Caster',
       img :  require('../../src/assets/classes/caster.gif'),
       skills : [
           {
               _id: 1,
               name: "Basic Attack",
               classId: 5,
               damage: 10,
               target: "enemy",
               cost: 0,
               type: "P"
           },
           {
               _id: 2,
               name: "Focus",
               classId: 5,
               damage: 0,
               target: "self",
               cost: 0,
               type: "P"
           }
         
       ]
   },
]
export default Character