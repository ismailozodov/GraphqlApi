import { fetch, fetchAll } from '../lib/postgres.js'
import md5 from 'md5'
import Joi from 'joi'

const USERS = `
    select 
        *
    from users
`

const REGISTER = `
	insert into users (
		first_name,
		last_name,
		password,
        email,
        specialist
	) values ($1, $2, $3, $4, $5)
	returning *
`

const LOGIN = `
    select
        *
    from users
    where email = $1
    and password = $2
`


const getUsers = () => {
	return fetchAll(USERS)
}

const addUser = ({ first_name, last_name, password, email, specialist }) => {
	try {
        let newUser = { first_name, last_name, password, email, specialist}
        const user = Joi.object({
            first_name: Joi.string().alphanum().min(4).max(20).required(),
            last_name: Joi.string().alphanum().min(4).max(20).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            specialist: Joi.string().alphanum().min(4).max(20).required()
        })
        let { error } = user.validate(newUser)
        if(error) throw error
        return fetch(REGISTER, first_name, last_name, md5(password), email, specialist)
    }
    catch(error) {
        throw error
    }
}


const loginUser = async ({ email, password }) => {
	try {
        password = await md5(password)
        return fetch(LOGIN, email, password)
    } catch(error) {
        throw error
    }
}





export default {
    getUsers,
    addUser,
    loginUser
}