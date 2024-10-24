require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')
//express app]
const app=express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
   console.log(req.path,req.method);
//    console.log(res.json);
   
   next()
    
})

//routes
// app.get('/',(req,res)=>{
// res.json({msg:`Welcome to the app ${process.env.PORT}` })
// })
app.use('/api/workouts',workoutRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // Listen to Port
    app.listen(process.env.PORT,()=>{
        console.log('Connected to DB and listening to PORT', process.env.PORT);
        
    })
})
.catch((error)=>{
    console.log(error + `${process.env.MONGO_URI}`);
    
})

//listen to requests

// app.listen(process.env.PORT,()=>{
//     console.log(`Listening on port ${process.env.PORT}`);
    
// })