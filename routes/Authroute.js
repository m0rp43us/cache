const express = require('express')
const router = express.Router()

router.post('/login',async(req,res,next) => {
    res.send("login route")
})

router.post('/refresh-token',async(req,res,next) => {
    res.send("refresh token route")
})

router.delete('/logout',async(req,res,next) => {
    res.send("logout route")
})




module.exports = router