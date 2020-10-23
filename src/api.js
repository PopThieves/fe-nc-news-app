import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://nc-news-23.herokuapp.com/api'
})

export const fetchArticles