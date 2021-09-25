import express from 'express'
const server = express()
import userRouter from './routes/users.js'
import categoriesRouter from './routes/news.js'
import newsRouter from './routes/categories.js'

// middlewares
server.use( express.json() )

// handling routes
server.use( userRouter )
server.use( categoriesRouter )
server.use( newsRouter )


server.use( (error, req, res, next) => {
	return res.status(400).json({
		status: 400,
		message: error.message
	})
} )

server.listen( process.env.PORT || 4500, () => console.log('*4500') )