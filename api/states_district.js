const sequelize = require('sequelize')
const express = require('express')
const router = express.Router()
const StateDistrict = require('../models/states/districts')

router.get('/', (req, res) => {
    StateDistrict.findAll({
        attributes: [[sequelize.fn('DISTINCT', sequelize.col('state')), 'state']]
      }).then(data => {
         res.json(data)
       // data.map(project => project.state)
      })
})
router.get('/district', (req, res) => {
    let stateName = req.query.stateName
    let districts
    StateDistrict.findAll({
        where: {state: stateName},
        attributes: ['district']
    }).then(data =>{
        res.json(data)
    })
   
})

module.exports = router