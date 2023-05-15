const Product = require('../models/products.model')

module.exports = {
    createProducts : (req,res)=>{
        console.log(`BACK END CREATE ${req}`)
        Product.create(req.body)
        .then(newProduct =>{console.log(req.body); res.json(newProduct)})
        .catch(err => res.status(400).json(`Something went wrong  BACK END CREATE  ${err}` ))

    },
    getAllProducts: (req,res)=>{
        // console.log(`BACK END GET ALL ${res}`)
        Product.find()
        .then(allProduct =>{console.log(allProduct); res.status(200).json(allProduct)})
        .catch(err => res.status(400).json(`Something went wrong  Back END  (GET ALL PRODUCTS) ${err}`))
    },
    getOneProduct : (req, res)=>{
        Product.findById( {_id:req.params.id})
        .then(oneProduct => {console.log(oneProduct); res.status(200).json(oneProduct)})
        .catch(err => res.json(`Something went wrong GET ONE PRODUCT ${err}`))

    },
    updateProducts: (req, res)=>{
        // new;true it will return document to contain the newly updated document instead of the default 
        Product.findByIdAndUpdate({_id: req.params.id}, req.body,{new:true, runValidators: true})
        .then(updateProduct => res.status(200).json(updateProduct))
        .catch(err => res.json(`Something went wrong UPDATE PRODUCT ${err}`))

    }, 
    deleteProducts: (req,res)=>{
        Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.status(200).json(deleteConfirmation))
        .catch(err => res.json(`Something went wrong BACK END ${err}`))
    }
   
}




