const projects = require('../Models/projectModel');
// add project

exports.addProject=async(req,res)=>{
    console.log("Inside Add Project request");
    console.log(req.payload);
    console.log(req.body);
    // res.status(200).json("Request Reciceved")

    const {title,todo1,todo2,todo3,todo4,todo5} = req.body
    const userId = req.payload
    try {
        const existingProject = await projects.findOne({title})
        if (existingProject) {
            res.status(406).json("Project already available in the system,Kindly upload another")
        }
        else {
            const newproject = new projects({
                title,todo1,todo2,todo3,todo4,todo5,userId
            })
            await newproject.save()
            res.status(200).json(newproject)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}