const { v4: uuidv4 } = require('uuid');

let users = []

const getUsers = (req,res) => {
  console.log(users)
  res.send(users)
}

const createUser = (req, res)=>{
  const newUser = req.body
  users.push({ id:uuidv4(), ...newUser})
  res.send(`User with the name ${newUser.firstName} is added to the database`)
}

const getUser = (req, res) => {
  const id = req.params.id // or const { id } = req.params
  const {firstName, lastName, age} =  req.body
  console.log(req.body.firstName)
  const foundUser = users.find((user)=> user.id === id)
  res.send(foundUser)
}

const deleteUser = (req, res)=>{
  const id =  req.params.id
  users = users.filter((user) => user.id !== id)

  res.send(`User with id ${id} is deleted from the database`)
}

const updateUser = (req, res)=>{
  const id =  req.params.id
  const {firstName, lastName, age} =  req.body

  const user = users.find((user) => user.id === id)

  if(firstName){
    user.firstName = firstName
  }

  if(lastName){
    user.lastName = lastName
  }

  if(age){
    user.age = age
  }

  res.send(`User with id ${id} has been updated`)
}

module.exports = { createUser, getUsers, getUser, deleteUser, updateUser }