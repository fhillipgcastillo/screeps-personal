const createConstructionSites = function (spawner, path, construction) {
  for (var index in path) {
    var item = path[index];
    var roomPosition = spawner.room.getPositionAt(item.x, item.y);
    if (
      spawner.room.lookForAt("structure", roomPosition).length === 0 &&
      spawner.room.lookForAt("constructionSite", roomPosition).length === 0
    ) {
      spawner.room.createConstructionSite(roomPosition, construction);
    }
  }
};

const createRoads = function (spawner) {
  var source = spawner.pos.findClosestByRange(FIND_SOURCES);
  var path = spawner.room.findPath(source.pos, spawner.room.controller.pos, {
    ignoreRoads: true,
    ignoreCreeps: true,
  });

  createConstructionSites(spawner, path, STRUCTURE_ROAD);
  path = spawner.room.findPath(spawner.pos, spawner.room.controller.pos, {
    ignoreRoads: true,
    ignoreCreeps: true,
  });
  
  createConstructionSites(spawner, path, STRUCTURE_ROAD);
  path = spawner.room.findPath(source.pos, spawner.pos, {
    ignoreRoads: true,
    ignoreCreeps: true,
  });
};

const displayInfo = function (spawner) {
  if (spawner.spawning) {
    var spawningCreep = Game.creeps[spawner.spawning.name];
    spawner.room.visual.text(
      "🛠️" + spawningCreep.memory.role,
      spawner.pos.x + 1,
      spawner.pos.y,
      { align: "left", opacity: 0.8 }
    );
  }

  spawner.room.visual.text(
    "Energy available: " + Game.rooms[spawner.room.name].energyAvailable,
    spawner.pos.x + 1,
    spawner.pos.y + 1,
    { align: "left", opacity: 0.8 }
  );

  spawner.room.visual.text(
    "Controller level: " + spawner.room.controller.level,
    spawner.room.controller.pos.x + 1,
    spawner.room.controller.pos.y,
    { align: "left", opacity: 0.8 }
  );
};

module.exports = {
  run: (spawner) => {
    displayInfo(spawner);
    createRoads(spawner);
  },
};
