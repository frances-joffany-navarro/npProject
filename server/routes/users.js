const express = require('express')

const {createUser, getUsers, getUser, deleteUser, updateUser} = require('../controllers/users.js')


const router = express.Router()


//all routes in here starting with /users
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

// PATCH use for partial modification and PUT is for overall modification
router.patch('/:id', updateUser)

module.exports =  router