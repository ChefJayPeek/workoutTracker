const apiRoutes = require("../../Project2/routes/api-routes.js");
const Workout = require("../models/workout.js");

module.exports = (app) => {
    // Get the workout
    app.get("/api/workouts", (req, res) => {
        Workout.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    // Post the workout
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then((data) => res.json(data))
        .catch((err) => {
            console.log("err ", err);
            res.json(err);
        });
    });

    //Put the workout
    app.put("api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then((data) => res.json(data))
            .catch((err) => {
                console.log("err ", err);
                res.json(err);
            });
    });
    // Get the Workout history for stats
    app.get("/api/workouts/range", (req, res) => {
        renderWorkoutSummary.find()
        // Limit to 7 days
        .limit(7)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });
};