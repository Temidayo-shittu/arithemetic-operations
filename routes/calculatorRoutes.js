const express= require('express')
const router= express.Router()
const { createCalculator, getAllOperations }=  require('../controller/calculator')

router.route('/calculator').post(createCalculator)
router.route('/').get(getAllOperations) 

module.exports= router
