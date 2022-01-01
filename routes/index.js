const express = require("express");
const req = require("express/lib/request");
const router = express.Router()
const Url = require("../models/Url.model")

router.get('/:urlId',async (req,res) => {
    try {
        console.log(req.params.urlId)
        const url = await Url.findOne({urlID:req.params.urlId})
        if(url){
            url.click++
            url.save()
            console.log(url)
            return res.redirect(url.originalURL)
        }else res.status(404).json("Not found")
    }catch(err){
        console.log(err)
        res.status(500).json("Server error")
    }
})

module.exports = router