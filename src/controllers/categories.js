import model from './../models/categories.js'

const GET = async (req, res) => {
	try {
        let category = await model.categoryGet(req.body)
        res.json(category)
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
		let category = await model.categoryPost(req.body)
        console.log(category);
		res.json({
			status: 201,
			message: "The category has been added !",
			data: category
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

		let category = await model.categoryDelete(req.body)
		res.json({
			status: 201,
			message: "The category has been deleted !",
			data: category
		})
	} catch(error) {
        console.log(error);
		res.json({
            status:400,
            message: error,
            data: null
        })
	}
}


const PUT = async (req, res) => {
	try {
		let category = await model.categoryUpdate(req.body)
		res.json({
			status: 201,
			message: "The category has been updated !",
			data: category
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