module.exports = app => {
  const tests = require("../controllers/test.controller.js");

  var router = require("express").Router();

  // Create a new question
  router.post("/", tests.create);

  // Retrieve all questions
  router.get("/", tests.findAll);

  // Retrieve all published the quiz
  router.get("/published", tests.findAllPublished);

  // Retrieve a single question with id
  router.get("/:id", tests.findOne);

  // Update a question with id
  router.put("/:id", tests.update);

  // Delete a Tutorial with id
  router.delete("/:id", tests.delete);

  // Delete all Tutorials
  router.delete("/", tests.deleteAll);

  app.use('/api/test', router);
};
