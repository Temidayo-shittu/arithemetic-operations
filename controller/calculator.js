const Calculator = require('../model/Calculator')
const {StatusCodes}= require('http-status-codes')
const CustomError= require('../errors')

const createCalculator = async(req,res)=>{
    const { num1,num2 } = req.body
    const { operation } = req.query
    let result;

    if(typeof num1 !== 'number' && typeof num2 !== 'number') throw new CustomError.BadRequestError(`Please ensure values provided are numbers`)
    if(operation == 'addition'){
       result = num1 + num2
    } 
    if(operation == 'subtraction'){
       result = num1 - num2
    }
    if(operation == 'multiplication'){
       result = num1 * num2
    }
    if(operation == 'division' && num2 !== 0){
       result = num1 / num2
    }
    if(operation == 'division' && num2 == 0) throw new CustomError.BadRequestError(`Division by ${num2} is not allowed`)

    const calculator = new Calculator({
        num1,
        num2,
        result
    })

    await calculator.save()

    res.status(StatusCodes.CREATED).json({calculator})
}


module.exports= {
    createCalculator,
}