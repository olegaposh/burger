const orm = require("../config/orm.js");

//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Import the ORM to create functions that will interact with the database.

const burger = {
  all: async () => {
    const result = await orm.all("burgers");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("burgers", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.update("burgers", objColVals, condition);

    return result;
  },

  delete: async (condition) => {
    const result = await orm.delete("burgers", condition);

    return result;
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
