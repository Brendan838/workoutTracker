const router = require('express').Router();
const db = require('../models')


//route that will be used to get the last workout. This includes a "totalDuration" field
router.get('/workouts', (req, res) => {


db.Workout.aggregate([
            {
                $addFields: { 
                    totalDuration: { $sum: "$exercises.duration" } 
                            }
            },
        ]).then(workouts=> {
if(workouts.length > 6){

const last7 = workouts.slice(workouts.length - 6, workouts.length)
return res.json(workouts)
}
return res.json(workouts)})


});






//route that will be used to get the data from the charts. This will also use the total Duration, and limit it to 7 items
router.get('/workouts/range', (req, res) => {
db.Workout.aggregate([
            {
                $addFields: { 
                    totalDuration: { $sum: "$exercises.duration" } 
                            }
            },
        ]).then(workouts=> {
if(workouts.length > 7){

const last7 = workouts.slice(workouts.length - 7)
res.json(last7)
return 
}
return res.json(workouts)})
});


//route for adding an exercise to the exercise array of an existing workout
router.put('/workouts/:id', ({body, params}, res) => {

const id = params.id
const workout = body

db.Workout.findByIdAndUpdate(id, 
        { $push: { exercises: workout}}, {new: true}
).then(workout => { res.json(workout)});
});



//route for creating an initial workout
router.post('/workouts/', ({body}, res) => {
db.Workout.create(body)
.then(workout => { res.json(workout)});
});

router.post('/', async (req, res) => {
    try{
        const newWorkout = await db.Workout.create({})
        res.json(newWorkout);
    }
    catch (err){
        console.log(err);
    }
});





 module.exports = router;