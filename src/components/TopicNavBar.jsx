import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

class TopicNavBar extends Component {
    state = {
        topics: [],
    }

    componentDidMount(){
        axios.get('https://nc-news-23.herokuapp.com/api/topics')
        .then(({data: {topics}}) => {
            this.setState({topics})
        })
    }

    render() {
        const {topics} = this.state
        return (
            <nav>
                {topics.map(topic => {
                    return <Link to={`/topics/${topic.slug}`} key={topic.slug}><button>{topic.slug}</button>
                    </Link>
                })}
            </nav>
        );
    }


}


export default TopicNavBar;