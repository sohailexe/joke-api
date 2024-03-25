const express = require('express');
const router = express.Router();
const controller= require("../countrollers/controller")


const { body } = require('express-validator');




//1. GET a random joke
router.get("/random", controller.getRandom)

//2. GET a specific joke
router.get("/jokes/:id", controller.getJoke)

//3. GET a jokes by filtering on the joke type
router.get("/filter", controller.getFilter)

//4. POST a new joke
router.post("/joke", [
  body('jokeType')
    .notEmpty()
    .withMessage('JokeType is required')
    .isLength({ min: 3 })
    .withMessage('JokeType must be at least 3 characters long')
    .trim(),

  body('jokeText')
    .notEmpty()
    .withMessage('JokeText is required')
    .isLength({ min: 3 })
    .withMessage('JokeText must be at least 3 characters long')
    .trim()
], controller.postJoke);

//5. PUT a joke
router.put("/joke/:id", controller.putJoke)

//6. PATCH a joke
router.patch("/joke/:id", controller.patchJoke)

//7. DELETE Specific joke
router.delete("/joke/:id", controller.deleteJoke)

//8. DELETE All jokes
router.delete("/jokes/all", controller.deleteJokes)




module.exports = router;