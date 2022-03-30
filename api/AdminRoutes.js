const router = require(`express`).Router()
const req = require("express/lib/request")
const res = require("express/lib/response")
const Admin = require("../models/Admin")


//Routes
router.get(`/`, (req,res)=>{
    Admin.find().then(admin =>{
        res.status(200).json(admin)
    }).catch(err =>{
        res.status(500).json({error: err.message})
    })
})

router.post(`/registerr`,async(req,res) =>{
    if(await adminExists(req.body.email)){
        res.status(409).json({error:"Email already Exists"})
    }else{
        const newAdmin = new Admin(req.body)
    newAdmin.save().then(admin =>{
        res.status(201).json(admin)
    }).catch(err =>{
        res.status(500).json({error: err.message})
    })
    }
    
})

router.post(`/loginn`,(req,res)=>{
    Admin.findOne({email:req.body.email, password:req.body.password}).then(admin =>{
        if(admin){
            res.status(200).json(admin)
        }else{
            res.status(401).json({error: "Incorrect Email or Password"})
        }
    }).catch(err =>{
        res.status(500).json({error:err.message})
    })
})


const adminExists =async(email)=>{
    const admin =await Admin.findOne({email:email.toLowerCase().trim()})
        if(admin){
            return true
        }else{
            return false
        }
    }

module.exports = router