import path from 'path'
import dotenv from 'dotenv' 
dotenv.config({ path: path.join( 'src', '.env' ) })

const pgConfig = {
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	database: process.env.PGDATABASE,
}


export {
	pgConfig
}