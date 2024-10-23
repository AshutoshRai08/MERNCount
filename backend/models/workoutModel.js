const mongoose=require('mongoose')

// Fnction to create new schema
const Schema = mongoose.Schema

const workoutSchema=new Schema({
title:{
    type:String,
    required: true
},
reps:{
    type:Number,
    required:true
},
load:{
    type:Number,
    required:true
}
},{timestamps:true})// giving time stamp also mongo will ad its own id for each new entry in 16bit id encryption

module.exports=mongoose.model('Workout',workoutSchema)
