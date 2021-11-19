module.exports = {
  run: (spawner) => {
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
      "Energy available: " + Game.rooms[spawner.room.name].energyAvailable ,
      spawner.pos.x + 1,
      spawner.pos.y + 1,
      { align: "left", opacity: 0.8 }
    );
  },
};
