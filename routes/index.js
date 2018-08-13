const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{

    res.render('../views/index', {
        user: req.user,
        partials: {
            header: './layouts/header',
            navbar: './navbar/home_navbar',
            footer: './layouts/footer'
        }
    })
})    

module.exports = router