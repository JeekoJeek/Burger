var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  insert: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(condition, objColVals, callback){
      orm.update("burgers", objColVals, condition, function(res){
          callback(res);
      })
  }
}

module.exports= burger;