const express = require("express")
const router = express.Router()

let users = [{"nombre":"Arnau"},{"nombre":"Pepe"},{"nombre":"Juanito"}]

router.get("/", (req,res) => {
    res.send(users)
})

router.get("/add", (req,res) => {
    const user = req.body
    res.send(user)
    users.push(user)
    res.send(`Añadido${req.body.name}`)
})

router.get("/delete",(req,res) => {
    
    const parametro = req.body
    console.log(parametro.nombre)
    users = users.filter((user) => user.nombre != parametro.nombre)
    res.send(users)
})

router.get("/find", (req,res) => {
    
    const { id } = req.body
    const founduser = users.find((user) => user.id === id)
    res.send(founduser)
    
    
    })


module.exports = router

