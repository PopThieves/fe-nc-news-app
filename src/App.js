import React from 'react';
import './App.css';
import Header from './components/Header';
import TopicNavBar from './components/TopicNavBar';
import ArticleList from './components/ArticleList'
import SingleArticle from './components/SingleArticle'
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Header />
      <TopicNavBar />
      {/* <SortNavBar /> */}
      <Router>
        <ArticleList path='/'/>
        <ArticleList path='/topics/:topic'/>
        <SingleArticle path='/articles/:article_id'/>
      </Router>
    </div>
  );
}

export default App;
