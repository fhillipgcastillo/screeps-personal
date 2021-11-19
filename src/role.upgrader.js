var utils = require('utils');

var roleUpgrader = {

  /** @param {Creep} creep **/
  run: function(creep) {

      if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
          creep.memory.upgrading = false;
          creep.say('🔄 harvest');
    }
    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
        creep.memory.upgrading = true;
        creep.say('⚡ upgrade');
    }

    if(creep.memory.upgrading) {
          if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
          } else if(creep.memory.harvesting === true) {
            creep.memory.harvesting = false;
          }
      }
      else {
          // var sources = creep.room.find(FIND_SOURCES);
          var source = utils.getSourceGatheringName(creep);
          if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
              creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
          } else if(creep.memory.harvesting === false) {
            creep.memory.harvesting = true;
            creep.memory.sourceId = source.id;
          }
      }
}
};

module.exports = roleUpgrader;