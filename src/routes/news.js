import express from 'express'
const router = express.Router()
import controller from '../controllers/news.js'

router
	.get('/news', controller.GET)
	.post('/news', controller.POST)
	.put('/news', controller.PUT)
	.delete('/news', controller.DELETE)

export default router