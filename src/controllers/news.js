import model from './../models/news.js'

const GET = async (req, res) => {
	try {
        let news = await model.newsGet(req.body)
        res.json(news)
    } catch(error){
        res.json({
            status: 400,
            message: error.message,
            data: null
        })
    }
}


const POST = async (req, res) => {
	try {
		let news = await model.newsPost(req.body)
		res.json({
			status: 201,
			message: "The news has been added !",
			data: news
		})
	} catch(error) {
		res.json({
            status:400,
            message: error,
            data: null
        })
	}
}


const DELETE = async (req, res) => {
	try {
		let news = await model.newsDelete(req.body)
		res.json({
			status: 201,
			message: "The news has been deleted !",
			data: news
		})
	} catch(error) {
		res.json({
            status:400,
            message: error,
            data: null
        })
	}
}


const PUT = async (req, res) => {
	try {
		let news = await model.newsUpdate(req.body)
		res.json({
			status: 201,
			message: "The news has been updated !",
			data: news
		})
	} catch(error) {
		res.json({
            status:400,
            message: error,
            data: null
        })
	}
}


export default {
    POST,
    DELETE,
    PUT,
    GET
}