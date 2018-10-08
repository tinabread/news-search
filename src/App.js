import React, { Component } from 'react';
import { searchApi } from './util/SearchApiHelper';

import logo from './logo.svg';
import './App.css';

import Article from './components/Article/Article';
import ArticleList from './components/ArticleList/ArticleList';
import Section from './components/Section/Section';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sections: []
    };
    this.searchGuardian = this.searchGuardian.bind(this);
  }
  
  searchGuardian(term, location, sortBy) {
     searchApi(term, location, sortBy)
        .then(response => {
          this.setState({ articles: response.returnedArticles });
          this.setState({ sections: response.returnedSections });
      });
  }
  
  render() {
    
    return (
      <div className="App">
        <h1>newspeek</h1>
          <SearchBar searchGuardian={this.searchGuardian}/>
          <Section sections={this.state.sections} articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
