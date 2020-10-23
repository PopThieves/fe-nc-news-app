import React from 'react';
import { Link } from '@reach/router'

const ArticleCard = (props) => {
    console.log(props);
    return (
        <ul className='article-card'>
            <Link to={`/articles/${props.article_id}`} key={props.article_id}>
                <li className='title'>{props.title}</li>
            </Link>
            <li className='author'>Author: {props.author}</li>
            <li className='body'>{props.body}</li>
            <button>▲</button>
            <li>Votes: {props.votes}</li>
            <button>▼</button>
        </ul>
    )
}


export default ArticleCard