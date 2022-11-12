// schema structure of collections

const mongoose=require('mongoose');
const Schema=mongoose.Schema;


//catogries =>field=>[type,color]
const categories_model=new Schema({
    type:{type:String,default:"Investment"},
    color : {type: String, default: '#FEBE44'}
})

// transaction =>fild=>[name, type amount date]
const transaction_model=new Schema({
    name:{type:String,default:"Anonymous"},
    type:{type:String,default:"Investment"},
    amount:{type:Number},
    date:{type:Date,default:Date.now}
})


// we have created the models so add this models to tne mongodb database
const Categories=mongoose.model('categories',categories_model);
const Transaction=mongoose.model('transaction',transaction_model);

exports.default=Transaction;
module.exports={
    Categories,
    Transaction
}