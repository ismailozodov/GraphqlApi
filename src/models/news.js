import { fetch, fetchAll } from '../lib/postgres.js'

const NEWS_POST = `
    insert into news(
        news_title,
        news_body,
        category_id,
        author_id,
        lang_id
    ) values ($1, $2, $3, $4, $5)
    returning *
`

const NEWS_DELETE = `
    delete from news
    where news_id = $1
    returning *    
`

const NEWS_UPDATE = `
    with old_news as (
        select 
            news_id,
            news_title,
            news_body,
            author_id,
            news_views
        from news where news_id = $1    
    ) update news n set
    news_views =
        case
            when $5 then o.news_views + 1
            else o.news_views
        end
    ,    
    news_title =
        case
            when length($2) > 0 then $2
            else o.news_title
        end
    ,    
    news_body =
        case
            when length($3) > 0 then $3
            else o.news_body
        end
    ,
    author_id = 
        case 
            when $4 > 0 then $4
            else o.author_id
        end
    from old_news o
    where n.news_id = $1
    returning n.*                                   
`

const NEWS_GET = `
    select
        *
    from news        
`

const newsPost = ({news_title, news_body, author_id, category_id, lang_id}) => {
    try {
        return fetch(NEWS_POST, news_title, news_body, author_id, category_id, lang_id)
    }
    catch (error){
        console.log(error)
    }
}

const newsDelete = ({ news_id }) => {
    try {
        return fetch(NEWS_DELETE, news_id)
    }
    catch (error) {
        console.log(error);
    }
}

const newsUpdate = ({ news_id, news_title = '', news_body = '', author_id = 0, news_views }) => {
    try {
        return fetch(NEWS_UPDATE, news_id, news_title, news_body, author_id, news_views)
    }
    catch(error) {
        console.log(error)
    }
}

const newsGet = () => {
    try {
        return fetchAll(NEWS_GET)
    }
    catch(error) {
        console.log(error)
    }
}


export default {
    newsPost,
    newsDelete,
    newsUpdate,
    newsGet
}