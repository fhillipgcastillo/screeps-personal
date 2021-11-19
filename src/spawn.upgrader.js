/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.upgrader');
 * mod.thing == 'a thing'; // true
 */
var utils = require('utils');

function createUpgrader(spawner, body){
    var name = 'Upgrader'+Game.time;
    spawner.spawnCreep(body, name, {memory: {role: 'upgrader', harvesting: false}});
};

 var spawnUpgrader = {
    run: function(spawner) {
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('Upgraders: '+ upgraders.length);
        
        var maxAmountOfSpawns = utils.getMaxSpawns(spawner); 
        var harvesters = _.filter(
          Game.creeps,
          (creep) => creep.memory.role === "harvester"
        );
        
        if (
          harvesters.length < upgraders.length && upgraders.length < maxAmountOfSpawns){
            createUpgrader(spawner, [WORK, CARRY, MOVE]);
        }
    }
 }

module.exports = spawnUpgrader;