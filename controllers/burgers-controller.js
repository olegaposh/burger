const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//Create the router for the app, and export the router at the end of your file.
// Create all our routes and set up logic within those routes where required.

//SELECT ALL
router.get("/", async (req, res) => {
    const data = await burger.all();
  
    res.render("index", { burgers: data });
  });
  // CREATE
  router.post("/api/burgers", async (req, res) => {
    const data = await burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured]);
  
    res.json({ id: data.insertId });
  });
  //UPDATE
  router.put("/api/burgers/:id", async (req, res) => {
    let condition = `id = ${req.params.id}`;
  
    console.log("condition", condition);
  
    const data = await burger.update({ devoured: req.body.devoured }, condition);
  
    if (data.changedRows === 0) {
      res.status(404).end();
    }
  
    res.status(200).end();
  });
  
  
  // Export routes for server.js to use.
  module.exports = router;
  