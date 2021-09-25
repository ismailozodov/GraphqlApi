import { fetch, fetchAll } from '../lib/postgres.js'

const CATEGORY_POST = `
    insert into categories(
        category_name,
        lang_id
    ) values ($1, $2)
    returning *
`

const CATEGORY_DELETE = `
    delete from categories
    where category_id = $1
    returning *    
`

const CATEGORY_PUT = `
    with old_category as (
        select 
            category_id,
            category_name,
            lang_id
        from categories where category_id = $1    
    ) update categories c set 
    category_name =
        case
            when length($2) > 0 then $2
            else o.category_name
        end
    ,    
    lang_id =
        case
            when $3 > 0 then $3
            else o.lang_id
        end
    from old_category o
    where c.category_id = $1
    returning c.*                                   
`

const CATEGORY_GET = `
    select
        *
    from categories        
`

const categoryPost = ([{category_name, lang_id}]) => {
    try {
        return fetch(CATEGORY_POST, category_name, lang_id)
    }
    catch (error){
        console.log(error)
    }
}

const categoryDelete = ({ category_id }) => {
    try {
        return fetch(CATEGORY_DELETE, category_id)
    }
    catch (error) {
        console.log(error);
    }
}

const categoryUpdate = ({ category_id, category_name = '', lang_id = 0 }) => {
    try {
        return fetch(CATEGORY_PUT, category_id, category_name, lang_id)
    }
    catch(error) {
        console.log(error)
    }
}

const categoryGet = () => {
    try {
        return fetchAll(CATEGORY_GET)
    }
    catch(error) {
        console.log(error)
    }
}


export default {
    categoryPost,
    categoryDelete,
    categoryUpdate,
    categoryGet
}