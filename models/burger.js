var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("tabletest", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    orm.insertOne("tabletest", cols, vals, function(res){
      cb(res);
    });
  },
  update: function(column, newValue, burgerId, cb){
    orm.updateOne('tabletest', column, newValue, burgerId, function(res){
      cb(res);
      console.log("ORM MODEL UPDATE FUNCTIONALITY IS WORKING")
    });
  }
};


// Export the database functions for the veggie burger controller

module.exports = burger;