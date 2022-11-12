const routes=require('express').Router();
const controller=require('../controller/controller');

routes.route('/api/categories')
.post(controller.create_Categories)
.get(controller.get_Categories)

routes.route('/api/transaction')
.post(controller.create_Transaction)
.get(controller.get_Transaction)
.delete(controller.delete_Transaction)


///this labels is about joining catogeries and tranacrion wusing aggrigate function in mongoose
routes.route('/api/labels')
    .get(controller.get_Labels)

//when we make a post req to the api/categories the controller will
// store the data in categories sectoin in mongo atlas
// and the get method will take the enteres data

module.exports=routes;