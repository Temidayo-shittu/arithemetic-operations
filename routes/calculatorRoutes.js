const express= require('express')
const router= express.Router()
const { createCalculator }=  require('../controller/calculator')

router.route('/').post(createCalculator) 

module.exports= router
