const express = require("express")
const router = express.Router()

const shortID = require("shortid")
const Url = require("../models/Url.model")
const validURL = require("valid-url")
require('dotenv').config({path:"../config/.env"})


// short url generator

router.post("/short",async(req,res)=>{
    const {originalURL} = req.body

    const base = process.env.BASE
    const urlID = shortID.generate()

    if(validURL.isUri(originalURL)){
        try{
            let url = await Url.findOne({originalURL})
            if(url){
                res.json(url);
            }else {
                const shortURL = `${base}/${urlID}`
                url = new Url({
                    originalURL,
                    shortURL,
                    urlID,
                    date: new Date(),
                })

                await url.save()
                res.json(url)
            }
        } catch (err) {
            console.log(err)
            res.status(500).json("server error")
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
})

module.exports = router