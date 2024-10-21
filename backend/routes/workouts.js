const express=require('express')
const { createWorkout,getWorkout,getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')


const router=express.Router()

//GET all workouts
router.get('/',getWorkouts
    // (req,res)=>{
    // res.json({msg: "GET all workouts"})}
)

//GET Single workouts
router.get('/:id',getWorkout
    // (req,res)=>{
    // res.json({msg: "GET a single workout"})}
)

//POST a new workouts
router.post('/',createWorkout
  
    // res.json({msg: "POST a new Workout"}))
)

//Delete workouts
router.delete('/:id',deleteWorkout
//     (req,res)=>{
    
//     res.json({msg: "DELETE a Workout"})
// }
)

//Update a workouts
router.patch('/:id',updateWorkout
//     (req,res)=>{
//     res.json({msg: "PATCH a Workout"})
// }
)
module.exports=router  