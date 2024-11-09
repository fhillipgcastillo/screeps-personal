/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.builder');
 * mod.thing == 'a thing'; // true
 */
var utils = require('utils');

function createBuilder(spawner, body) {
  var name = "Builder" + Game.time;
  spawner.spawnCreep(body, name, {
    memory: { role: "builder", building: false, harvesting: false },
  });
}

var spawnBuilder = {
  run: function (spawner) {
    var builders = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "builder"
    );
    console.log("Builders: " + builders.length);

    var buildersLimit = utils.getMaxSpawns(spawner);

    var harvesters = _.filter( Game.creeps, (creep) => creep.memory.role === "harvester" && creep.spawning === false);

    if (
      harvesters.length > 0 && harvesters.length > builders.length &&
      builders.length < buildersLimit
    ) {
      createBuilder(spawner, [WORK, CARRY, MOVE]);
    }
  },
};

module.exports = spawnBuilder;
