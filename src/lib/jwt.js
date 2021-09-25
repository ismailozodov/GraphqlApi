import JWT from 'jsonwebtoken'
let PRIVATE_KEY = process.env.PRIVATE_KEY

export default {
	sign: (payload) => JWT.sign(payload, PRIVATE_KEY),
	verify: (token) => JWT.verify(token, PRIVATE_KEY),
}