const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//Create the router for the app, and export the router at the end of your file.
// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
    const data = await burger.all();
  
    res.render("index", { burgers: data });
  });
  
  router.post("/api/cats", async (req, res) => {
    const data = await cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy]);
  
    res.json({ id: data.insertId });
  });
  
  router.put("/api/cats/:id", async (req, res) => {
    let condition = `id = ${req.params.id}`;
  
    console.log("condition", condition);
  
    const data = await cat.update({ sleepy: req.body.sleepy }, condition);
  
    if (data.changedRows === 0) {
      res.status(404).end();
    }
  
    res.status(200).end();
  });
  
  router.delete("/api/cats/:id", async (req, res) => {
    let condition = `id = ${req.params.id}`;
  
    const data = await cat.delete(condition);
  
    if (data.affectedRows === 0) {
      res.status(404).end();
    }
  
    res.status(200).end();
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  