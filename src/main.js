var harvesterSpawner = require('spawn.harvester');
var harvesterSpawner = require('spawn.upgrader');
var builderSpawner = require('spawn.builder');

var Harvester = require('role.harvester');
var Upgrader = require('role.upgrader');
var Builder = require('role.builder');

module.exports.loop = function(){
    for(var spawnName in Game.spawns){
        var spawner = Game.spawns[spawnName];
        harvesterSpawner.run(spawner);
        harvesterSpawner.run(spawner);
        builderSpawner.run(spawner);
        
       for(let creepName in Game.creeps){
           let creep = Game.creeps[creepName];
           
           if(creep.memory.role === 'harvester') {
                Harvester.run(creep)
           } else if(creep.memory.role === 'upgrader') {
               Upgrader.run(creep);
           } else if(creep.memory.role === 'builder'){
               Builder.run(creep);
           }
       }
        
    }
    
}