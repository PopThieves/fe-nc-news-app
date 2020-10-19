import React from 'react';


const ArticleCard = (props) => {
    console.log(props);
    return (
        <>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.body}</p>
        </>
    )
}


export default ArticleCard