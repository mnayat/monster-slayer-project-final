var characters =
{
  classes:
  [
  {
    id: 1,
    class: 'Saber',
    img: require('../../src/assets/classes/saber.gif')
  },
  {
    id: 2,
    class: 'Archer',
    img: require('../../src/assets/classes/archer.gif')
  },
  {
    id: 3,
    class: 'Lancer',
    img: require('../../src/assets/classes/lancer.gif')
  },
  {
    id: 4,
    class: 'Berserker',
    img: require('../../src/assets/classes/berserker.gif')
  },
  {
    id: 5,
    class: 'Caster',
    img: require('../../src/assets/classes/caster.gif')
  },
  {
    id: 0,
    img: ''
  }
],
equipments:
  [
  {
    name: 'Mythril Bow',
    img: require('../../src/assets/equipments/dread.svg')
  },
  {
    name: 'Elven Garb',
    img: require('../../src/assets/equipments/armor.svg')
  },

],
skills:
  [
  {
    id: '5ea64443abd7a07a0425a787',
    img: require('../../src/assets/skills/starfall.svg')
  },
  {
    id: '5ea64443abd7a07a0425a786',
    img: require('../../src/assets/skills/starfall.svg')
  },
  {
    id: '5ea64443abd7a07a0425a78a',
    img: require('../../src/assets/skills/starfall.svg')
  },
  {
    id: '5ea64443abd7a07a0425a78b',
    img: require('../../src/assets/skills/starfall.svg')
  },
],
getCharacterImage: function(id){
    return characters.classes.filter(function(item) { return item.id == id; }).length != 0 ? 
            characters.classes.filter(function(item) { return item.id == id; })[0].img : 'Unknown';
},
getCharacterClass: function(id){
    return characters.classes.filter(function(item) { return item.id == id; }).length != 0 ?
            characters.classes.filter(function(item) { return item.id == id; })[0].class : 'Unknown';
},
getEquipment: function(name){
    return characters.equipments.filter(function(item) { return item.name == name; }).length != 0 ? 
            characters.equipments.filter(function(item) { return item.name == name; })[0].img : 'Unknown';
},
getSkill: function(id){
    return characters.skills.filter(function(item) { return item.id == id; })[0].length != 0 ?
            characters.skills.filter(function(item) { return item.id == id; })[0].img : 'Unknown';
}
}

export default characters
