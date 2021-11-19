var harvesterSpawner = require("spawn.harvester");
var upgraderSpawner = require("spawn.upgrader");
var builderSpawner = require("spawn.builder");

var Harvester = require("role.harvester");
var Upgrader = require("role.upgrader");
var Builder = require("role.builder");

var spawnManager = require("spawn.manager");

module.exports.loop = function () {
  //cleaning died creeps
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory:", name);
    }
  }

  for (var spawnName in Game.spawns) {
    var spawner = Game.spawns[spawnName];
    

    harvesterSpawner.run(spawner);
    upgraderSpawner.run(spawner);
    builderSpawner.run(spawner);

    spawnManager.run(spawner);

    for (let creepName in Game.creeps) {
      let creep = Game.creeps[creepName];

      if (creep.memory.role === "harvester") {
        Harvester.run(creep);
      } else if (creep.memory.role === "upgrader") {
        Upgrader.run(creep);
      } else if (creep.memory.role === "builder") {
        Builder.run(creep);
      }
    }
  }
};
