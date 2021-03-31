const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()
     
router.get('/', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from customer`
    connection.query(statement, (error, data) => {
        connection.end()
       /* const users = []
        for (let index = 0; index < data.length; index++) {
            const user = data[index]
            users.push({
                id: user['id'],
                username: user['username'],
                full_name: user['full_name'],
                email: user['email']
            })
        }*/
        response.send(utils.createResult(error, data))  //data->users
    })
})


     
router.get('/edit_user/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `select * from customer where id='${id}'`
    connection.query(statement, (error, data) => {
     
        
        response.send(utils.createResult(error, data))  
        
    })
})

// exist == 1 => user

// exist == 0 -> user is blocked 
router.post('/', (request, response) => {
    const {username,firstname,lastname,registration_date,phoneno,email,password} = request.body
    const connection = db.connect1()
    const statement = `
    insert into customer (username, firstname, lastname,registration_date, phoneno, email, password, exist) values('${username}', '${firstname}', '${lastname}','${registration_date}', '${phoneno}', '${email}', '${password}',1 )`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `delete from customer where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.put('/edit_user/:id',(request,response)=>{
    const {id} = request.params
    const {username,firstname,lastname,registration_date,phoneno,email,password,exist} = request.body
    const connection = db.connect1()

    const statement = `update customer set username='${username}',firstname='${firstname}',lastname='${lastname}',registration_date='${registration_date}',phoneno='${phoneno}',email='${email}',password='${password}', exist=${exist} where id =${id}`
    
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router