const router = require('express').Router();
const db = require('../models')

router.get('/workouts', (req, res) => {
db.Workout.find({}).then(workouts=> {res.json(workouts)})
});

router.get('/workouts/range', (req, res) => {
db.Workout.find({}).then(workouts=> {res.json(workouts)})
});

router.put('/workouts/:id', ({body, params}, res) => {

const id = params.id
const workout = body

db.Workout.updateOne({"_id": id}, { $push: {
        exercises: workout
}
}).then(workout => { res.json(workout)});
});

router.post('/workouts/', ({body}, res) => {
db.Workout.create(body)
.then(workout => { res.json(workout)});
});





 module.exports = router;