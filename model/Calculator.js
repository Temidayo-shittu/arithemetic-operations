const mongoose= require('mongoose');

const CalculatorSchema= new mongoose.Schema({
    num1:{
        type:Number,
        required:[true, 'Please input your first number'],
    },
    num2:{
        type:Number,
        required:[true, 'Please input your second number'],
    },
    result:{
        type:Number,
    },

})

module.exports= mongoose.model('Calculator',CalculatorSchema)