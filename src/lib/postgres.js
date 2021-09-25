import pg from 'pg'
import { pgConfig } from '../config.js'

const pool = new pg.Pool(pgConfig)

async function fetch (query, ...array) {
    const client = await pool.connect()
    try {
        const { rows: [ row ] } = await client.query(query, array.length ? array : null)
        return row
    }
    catch(error) {
        throw error
    }
    finally {
        await client.release()
    }

}


async function fetchAll (query, ...array) {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(query, array.length ? array : null)
        return rows
    }
    catch(error) {
        throw error
    }
    finally {
        await client.release()
    }

}


export {
    fetch,
    fetchAll
}