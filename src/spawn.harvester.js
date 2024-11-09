/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.harvester');
 * mod.thing == 'a thing'; // true
 */
var utils = require("utils");

function getBody(spawner) {
  var ctLevel = spawner.room.controller.level;
  if (ctLevel === 1) {
    return [WORK, WORK, WORK, MOVE, MOVE, CARRY];
  } else if (ctLevel > 1) {
    return [WORK, WORK, WORK, MOVE, MOVE, MOVE, CARRY, CARRY];
  }
}

function createHarvester(spawner, first = false) {
  var name = "Harvester" + Game.time;
  var body = first ? [WORK, CARRY, MOVE] : getBody(spawner);

  var res = spawner.spawnCreep(body, name, {
    memory: { role: "harvester", harvesting: false },
  });
  if(res === ERR_NOT_ENOUGH_ENERGY){
      console.log("Harvester waiting for enough energy");
  }
}

var spawnHarvester = {
  run: function (spawner) {
    var harvesters = _.filter( Game.creeps, (creep) => creep.memory.role === "harvester" && creep.spawning === false);

    console.log("Harvesters: " + harvesters.length);
    var maxSpawns = utils.getMaxSpawns(spawner);
    if (harvesters.length === 0 || harvesters.length === 1) {
      createHarvester(spawner, true);
    } else if (harvesters.length < maxSpawns) {
      createHarvester(spawner);
    }
  },
};

module.exports = spawnHarvester;
