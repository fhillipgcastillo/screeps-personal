/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('utils');
 * mod.thing == 'a thing'; // true
 */

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

module.exports = {
  getMaxSpawns: getMaxSpawns
};
