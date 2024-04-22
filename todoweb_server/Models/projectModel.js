const mongoose=require('mongoose')
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    todo1: {
        type: String,
        required: true
    },
    todo2: {
        type: String,
        required: true
    },
    todo3: {
        type: String,
        required: true
    },
    todo4: {
        type: String,
        required: true
    },
    todo5: {
        type: String,
        required: true
    },
    userId:{
        type:String,
        required:true
    }
});

const projects=mongoose.model("projects",projectSchema)
module.exports=projects