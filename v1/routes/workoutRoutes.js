const express = require('express');
const router = express.Router();
const workoutController = require ("../../workoutController");

router
    .get("/", workoutController.getAllWorkouts)

    .get("/:workoutId", workoutController.getOneWokout)

    .post("/:workoutId", workoutController.createNewWorkout)

    .patch("/:workoutId", workoutController.updateWorkout)

    .delete("/:workoutId",  workoutController.deleteWorkout)


    module.exports = router;