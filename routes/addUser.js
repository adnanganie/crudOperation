const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('../views/user/user', {
        partials: {
            header: './layouts/header',
            footer: './layouts/footer',
            navbar: './navbar/user_navbar.hjs'
        }
    })
})

module.exports = router