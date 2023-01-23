const { deleteOne } = require('../models/Task')
const Task = require('../models/Task')
const asyncwrapper = require('./async');

const getAllTasks = asyncwrapper( async (req,res) => {
    try{
    const tasks = await Task.find({})
    res.status(200).json({tasks:tasks})
    }catch(error){
    //res.status(500).json({msg:error})
    }
    //res.send('all items')
})

const createTask = async(req,res) => {
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    }catch(error){
    res.status(500).json({msg:error})
    }
    
}

const getTask = async (req,res) => {
    try{
        const task = await Task.findOne({_id:req.params.id})
        res.status(201).json({task})
       if(!task){
        return res.status(404).json({msg: 'No task with that id'})
       }
    }catch(error){
        res.status(500).json(error)
    }    
}

const deleteTask = async (req,res) => {
    //res.send('delete task')
    try{
    const task = await Task.findOneAndDelete({_id:req.params.id})
    if(!task){
        return res.status(404).json({msg: 'No task with that id'})  
    }
    res.status(200).json({task})
    }catch(error){
        res.status(500).json(error)
    }
}

const updateTask = async (req,res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,
            {
                new:true,
                runValidators:true
            })
        if(!task){
            return res.status(404).json({msg: 'No task with that id'})  
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
   
    //res.send('update task')
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask
} 

//mongodb+srv://elsabe:<password>@nodeexpressprojects.uvgybdg.mongodb.net/?retryWrites=true&w=majority






