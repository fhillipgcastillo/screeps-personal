/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.builder');
 * mod.thing == 'a thing'; // true
 */


function createBuilder(spawner, body){
  var name = 'Builder'+Game.time;
  spawner.spawnCreep(body, name, {memory: {role: 'builder'}});
};

function getMaxSpawns(spawner){
  var amount = 0;
  switch(spawner.room.controller.level){
      case 1:
          amount = 2;
          break;
      case 2:
          amount = 5;
          break;
      default:
          amount=spawner.room.controller.level**2
  }
  return amount;
}

var spawnBuilder = {
  run: function(spawner) {
      var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
      console.log('Builders: '+ builders.length);
      
      var buildersLimit = getMaxSpawns(spawner);
      
      if(builders.length < buildersLimit){
          createBuilder(spawner, [WORK, CARRY, MOVE]);
      }
  }
}

module.exports = spawnBuilder;
