import model from './../models/users.js'
import jwt from '../lib/jwt.js'


const GET = async (req, res) => {
	try {
        let users = await model.getUsers(req.body)
        res.json(users)
    } catch(error){
        res.json({
            status: 400,
            message: error.message,
            token: null,
            data: null
        })
    }
}


const POST = async (req, res) => {
	try {
		let user = await model.addUser(req.body)
		res.json({
			status: 201,
			message: "The registration has been successfully!",
            token: jwt.sign(user.user_id),
			data: user
		})
	} catch(error) {
		res.json({
            status:400,
            message: error,
            token: null,
            data: null
        })
	}
}


const LOGIN = async (req, res) => {
    try {
        let user = await model.loginUser(req.body)
        if(user){
            res.json({
                status: 201,
                message: 'The login successfully',
                token: jwt.sign(user.user_id),
                data: user
            })
        } else throw new Error('Wrong password and email !')
    } catch(error){
        res.json({
            status: 400,
            message: error.message,
            token: null,
            data: null
        })
    }
}


export default {
    GET,
    POST,
    LOGIN
}
