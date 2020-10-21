import React, { Component } from 'react'
import axios from 'axios'


class SingleArticle extends Component {
    state = {
        articleInfo: {},
        isLoading: true,
    }

    componentDidMount() {
        axios
        .get(`https://nc-news-23.herokuapp.com/api/articles/${this.props.article_id}`)
        .then(({ data }) => {
            console.log(data)
            this.setState({ articleInfo: {...data.article}, isLoading: false});
        })
    }


    render() {
        return (
            <>
            <h1>{this.state.articleInfo.title}</h1>
            <p>{this.state.articleInfo.body}</p>
            </>
        )
    }
}


export default SingleArticle;