import React, { Component } from 'react';
import axios from 'axios'; 
import ArticleCard from './ArticleCard'
import Loader from './Loader'

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    fetchArticles = () => {
        axios.get('https://nc-news-23.herokuapp.com/api/articles', {params: {topic: this.props.topic}})
        .then(({data: {articles}}) => {
            this.setState({articles, isLoading: false})
        })
    }

    componentDidMount() {
        this.fetchArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.topic !== this.props.topic) {
            this.fetchArticles()
        }
    }

    render() {
        const { articles, isLoading } = this.state
        if (isLoading) return <Loader/>
        return (
            <main className="main">
                {articles.map(article => {
                    return <ArticleCard {...article}/>
                })}
            </main>
        );
    }
}

export default ArticleList