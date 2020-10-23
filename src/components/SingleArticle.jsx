import React, { Component } from 'react'
import axios from 'axios'
import ErrorDisplay from '../components/ErrorDisplay'


class SingleArticle extends Component {
    state = {
        articleInfo: {},
        isLoading: true,
        error: null
    }

    componentDidMount() {
        axios
        .get(`https://nc-news-23.herokuapp.com/api/articles/${this.props.article_id}`)
        .then(({ data }) => {
            this.setState({ articleInfo: {...data.article}, isLoading: false});
        })
        .catch((error) => {
            console.log(error.response)
            this.setState({
                error: {
                    status: error.response.request.status,
                    status_message: error.response.request.statusText,
                },
            })
        })
    }


    render() {
        const { articleInfo, error } = this.state;
        if(error) return (
        <ErrorDisplay {...error}/>
        );
        return (
            <>
            <h1>{articleInfo.title}</h1>
            <p>{articleInfo.body}</p>
            </>
        )
    }
}


export default SingleArticle;