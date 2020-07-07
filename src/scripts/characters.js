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
dungeons:
  [
  {
    name: 'grass-field',
    img: require('../../src/assets/dungeons/grass-field.jpg')
  },
  {
    name: 'beast-den',
    img: require('../../src/assets/dungeons/beast-den.jpg')
  },
  {
    name: 'babel-tower',
    img: require('../../src/assets/dungeons/babel-tower.jpg')
  },
  {
    name: 'goblin-mine',
    img: require('../../src/assets/dungeons/goblin-mine.jpg')
  },
  {
    name: 'dessert',
    img: require('../../src/assets/dungeons/dessert.jpg')
  },
  {
    name: 'wind-shrine',
    img: require('../../src/assets/dungeons/wind-shrine.jpg')
  },
  {
    name: 'sunken-ruins',
    img: require('../../src/assets/dungeons/sunken-ruins.jpg')
  },
  {
    name: 'snow-cave',
    img: require('../../src/assets/dungeons/snow-cave.jpg')
  },
  {
    name: 'hell',
    img: require('../../src/assets/dungeons/hell.jpg')
  },
  {
    name: 'dragon-lair',
    img: require('../../src/assets/dungeons/dragon-lair.jpg')
  },
  {
    name: 'labyrinth',
    img: require('../../src/assets/dungeons/labyrinth.jpg')
  },
  {
    name: 'sanctuary',
    img: require('../../src/assets/dungeons/sanctuary.jpg')
  },
  {
    name: 'locked',
    img: require('../../src/assets/dungeons/locked-overlay.png')
  },
  {
    name: '',
    img: ''
  }
],
getCharacterImage: function(id){
    return characters.classes.filter(function(item) { return item.id == id; }).length != 0 ? 
            characters.classes.filter(function(item) { return item.id == id; })[0].img : 'Unknown';
},
getCharacterClass: function(id){
    return characters.classes.filter(function(item) { return item.id == id; }).length != 0 ?
            characters.classes.filter(function(item) { return item.id == id; })[0].class : 'Unknown';
},
getEquipmentImg: function(name){
    return characters.equipments.filter(function(item) { return item.name == name; }).length != 0 ? 
            characters.equipments.filter(function(item) { return item.name == name; })[0].img : 'Unknown';
},
getSkill: function(id){
    return characters.skills.filter(function(item) { return item.id == id; })[0].length != 0 ?
            characters.skills.filter(function(item) { return item.id == id; })[0].img : 'Unknown';
},
getDungeonImage: function(name){
    return characters.dungeons.filter(function(item) { return item.name == name; })[0].length != 0 ?
            characters.dungeons.filter(function(item) { return item.name == name; })[0].img : 'Unknown';
}
}

export default characters
