import express from 'express'
const router = express.Router()
import controller from '../controllers/users.js'

router
	.get('/users', controller.GET)
	.post('/register', controller.POST)
	.post('/login', controller.LOGIN)

export default router