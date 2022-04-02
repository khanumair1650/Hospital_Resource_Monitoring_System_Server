const router = require(`express`).Router()
const req = require("express/lib/request")
const res = require("express/lib/response")
const Hospital = require("../models/Hospital")
const mongodb = require ("mongodb")

//Routes
router.get(`/`, (req,res)=>{
    Hospital.find().then(hospital =>{
        res.status(200).json(hospital)
    }).catch(err =>{
        res.status(500).json({error: err.message})
    })
})

router.post(`/create`,async(req,res) =>{
    if(await hospitalExists(req.body.pin)){
        res.status(409).json({error:"Hospital already Exists"})
    }else{
        const newHospital = new Hospital(req.body)
    newHospital.save().then(hospital =>{
        res.status(201).json(hospital)
    }).catch(err =>{
        res.status(500).json({error: err.message})
    })
    }
    
})
router.put('/update/:pin',async(req,res)=>{
    let h_data = await Hospital.updateOne({pin:req.body.pin},{
        "$set": {
            "description": req.body.description,
            "name" : req.body.name,
            "address" : req.body.address,
            "beds" : req.body.beds,
            "oxygen" : req.body.oxygen,
            "bloods" : req.body.bloods,
            "contactno" : req.body.contactno,
            "link" : req.body.link,
            "pin" : req.body.pin
            }
    });
    res.send(h_data);
})

router.delete('/:pin',async(req,res)=>{
    data = await Hospital.deleteOne({pin:req.params.pin})
    res.send(data)
})

const hospitalExists =async(pin)=>{
    const hospital =await Hospital.findOne({pin:pin.toLowerCase().trim()})
        if(hospital){
            return true
        }else{
            return false
        }
    }

module.exports = router