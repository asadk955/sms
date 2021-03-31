const db = require('./db')
const utils = require('./utils')
const express = require('express')
//const multer = require('multer')

const router = express.Router()

//const upload = multer({dest: 'images'})

// to insert details of adding to cart product
router.post('/cart', (request, response) => {
    const {Quantity,totalAmount,totalDiscount,customerID,productID} = request.body
   
    const connection = db.connect1()
    const statement = `
    insert into orderdetails (Quantity,totalAmount,totalDiscount,customerID,productID,flag) values(${Quantity}, ${totalAmount}, ${totalDiscount}, ${customerID}, ${productID},0)`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to show product in cart list
router.post('/addcart', (request, response) => {
   
    const {customerID} = request.body
    const connection = db.connect1()
    const statement = `select o.id,o.Quantity,o.totalAmount,o.totalDiscount,o.customerID,o.ProductID,o.flag, p.image,p.name from orderdetails o inner join products p where o.productID=p.id and o.flag = 0 and o.customerID = ${customerID}  `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// when user is editing his cart product
router.put('/cartEdit', (request, response) => {
    const {Quantity,totalAmount,totalDiscount,customerID,productID,orderDetailsTableID} = request.body
    
    const connection = db.connect1()
    const statement = `
    update orderdetails set Quantity=${Quantity},totalAmount=${totalAmount}, totalDiscount=${totalDiscount}, customerID=${customerID}, productID=${productID} where id = ${orderDetailsTableID} `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// to delete an item of cart
router.post('/cartDelete', (request, response) => {
   
    const {id} = request.body
    const connection = db.connect1()
    const statement = `delete from orderdetails where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to update orderlist (called when user is confirmed to order)
router.put('/cart/confirmorder', (request, response) => {
    const {OrderDate,deliveryDate,PaymentMode,customerID,fullname,address,phoneno} = request.body
   
    const connection = db.connect1()
    const statement = `
    update orderdetails set OrderDate = '${OrderDate}', deliveryDate =  '${deliveryDate}', PaymentMode = '${PaymentMode}', fullname = '${fullname}', address = '${address}', phoneno = '${phoneno}',flag = 1 where customerID = ${customerID} and flag = 0`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to insert address in deliveryInfo table (called when user is confirm to order)
router.post('/cart/confirmorder', (request, response) => {
    const {fullname,phoneno,state,city,pincode,address,customerID} = request.body
   
    const connection = db.connect1()
    const statement = `
    insert into deliveryInfo (fullname,phoneno,state,city,pincode,address,customerID) values('${fullname}', '${phoneno}', '${state}', '${city}', '${pincode}','${address}',${customerID})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//to get address of dr
router.get('/cart/confirmorder', (request, response) => {
    
    const connection = db.connect1()
    const statement = `
    select * from deliveryInfo`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


//to get list of orders of a Customers
router.post('/orders', (request, response) => {
    const {customerID} = request.body
    const connection = db.connect1()
    const statement = `
    select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.fullname,o.phoneno,o.PaymentMode,
    o.OrderDate,o.deliveryDate,address from orderdetails o inner join products p where o.ProductID = p.id and o.customerID = ${customerID} and flag = 1 order by o.deliveryDate desc`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/orders/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = ` delete from orderdetails where id = ${id} `
     
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


//to get list of orders of All Customers
router.get('/dashboard/orders', (request, response) => {
    const connection = db.connect1()
    const statement = `
    select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.fullname,o.phoneno,o.PaymentMode,
    o.OrderDate,o.deliveryDate,address,o.customerID from orderdetails o inner join products p where o.ProductID = p.id and flag = 1 order by o.deliveryDate desc`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// to get list of orders of a Customer in admin side
router.get('/dashboard/ShowOrders/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `
    select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.fullname,o.phoneno,o.PaymentMode,
    o.OrderDate,o.deliveryDate,address,o.customerID from orderdetails o inner join products p where o.ProductID = p.id and o.customerID=${id} and flag = 1 order by o.deliveryDate desc`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})




module.exports = router

