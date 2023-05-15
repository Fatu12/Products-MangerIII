const ProductController = require('../controllers/products.controllers')

module.exports = app =>{
// this route must has to much with our axios in our FRONT END AND ALSO IT THE METHOD NAME MUST MUCH 
// the one we have declared   on our controllers 
    app.get('/api/products', ProductController.getAllProducts)
    app.post('/api/products', ProductController.createProducts)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.patch('/api/products/:id', ProductController.updateProducts)
    app.delete('/api/products/:id', ProductController.deleteProducts)
}