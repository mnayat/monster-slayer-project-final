var dungeons = 
{
    enemies:[
        {
            name: 'amon',
            img: require('../../src/assets/enemies/amon.png')
        }
    ],
    getEnemyImage: function(name){
        return dungeons.enemies.filter(function(item) { return item.name == name; }).length != 0 ? 
        dungeons.enemies.filter(function(item) { return item.name == name; })[0].img : 'Unknown';
    },    
}

export default dungeons;