/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.harvester');
 * mod.thing == 'a thing'; // true
 */
var utils = require('utils');
 
function createHarvester(spawner, body){
    var name = 'Harvester'+Game.time;
    spawner.spawnCreep(body, name, {memory: {role: 'harvester'}});
};

 var spawnHarvester = {
    run: function(spawner) {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);
        var maxSpawns = utils.getMaxSpawns(spawner);
        if(harvesters.length < maxSpawns) {
           createHarvester(spawner, [WORK,CARRY,MOVE]);
        }
    }
 }

module.exports = spawnHarvester;