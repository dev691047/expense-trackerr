// using controller we insert data in our schema


const model=require('../modules/model'); 


// post http//localhost:8080/api/categoroies

  async function create_Categories(req,res){
      // res.json("get req frommm categories");
   try{
    const Create=new model.Categories({
        type:req.body.type,
        color:req.body.color
    })
    await Create.save();
    return res.json(Create);
   }
   catch(e){
    return res.sendStatus(500);
   }
}
// get http//localhost:8080/api/categoroies
async function get_Categories(req,res){
    // console.log("called");
    let data=await model.Categories.find({})
    let filter=await data.map(v=>Object.assign({},{type:v.type,color: v.color}));
    return res.json(filter);
}

// post http//localhost:8080/api/Transaction
async function create_Transaction(req,res){
    if(!req.body)return res.status(400).json("post http data not provided")

    let {name,type,amount}=req.body; 
    const create=new model.Transaction(
        {
            name,
            type,
            amount,
            date:new Date()
        }
    );

    create.save(function(err){
       if(!err)return res.json(create);
       return res.status(400).json({message:`Eror while creating transaction ${err}`})
    })
}


// get http//localhost:8080/api/Transaction/////////////////
async function get_Transaction(req,res){
    let data=await model.Transaction.find({});
    return res.json(data);
}


// delete http//localhost:8080/api/Transaction////////////////
async function delete_Transaction(req,res){
    // console.log({req})
  try{
    let keys=Object.keys(req.body);
    if(keys.length==0)return res.status(400).json({message:`request body not found`});
     
    else{
        console.log({req:req.body});
    
    await model.Transaction.deleteOne({_id:req.body._id});
    return res.status(200).send("delete ho gya bhai ")
    }
  }
  catch(e){
    console.log({e});
    return res.sendStatus(500);
  }

}
//  get: http://localhost:8080/api/labels
async function get_Labels(req, res){

    model.Transaction.aggregate([
        {
            $lookup : {
                from: "categories",
                localField: 'type',
                foreignField:"type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result => {
        console.log({result});
        
        let track = {};
        let data =[];
        for(let v of result){
            if(!track[v._id]){
                let temp ={};
                Object.assign(temp, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']})
                data.push(temp);
            }
            track[v._id]=true;
        }
        // let data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}));
        res.json(data);
        // res.json(result);
    }).catch(error => {
        res.status(400).json("Looup Collection Error");
    })

}


 module.exports={
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels
}
