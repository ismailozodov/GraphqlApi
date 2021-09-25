import express from 'express'
const router = express.Router()
import controller from '../controllers/categories.js'

router
	.get('/categories', controller.GET)
	.post('/categories', controller.POST)
	.put('/categories', controller.PUT)
	.delete('/categories', controller.DELETE)

export default router