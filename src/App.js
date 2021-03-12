import React, { useState } from "react";
import { searchApi } from "./util/SearchApiHelper";

import logo from "./logo.svg";
import "./App.css";

import Article from "./components/Article/Article";
import ArticleList from "./components/ArticleList/ArticleList";
import Section from "./components/Section/Section";
import SearchBar from "./components/SearchBar/SearchBar";

const App = props => {
  const [articles, setArticles] = useState([]);
  const [sections, setSections] = useState([]);

  const searchGuardian = (term, location, sortBy) => {
    searchApi(term, location, sortBy).then(response => {
      setArticles(response.returnedArticles);
      setSections(response.returnedSections);
    });
  };

  return (
    <div className="App">
      <h1>newspeek</h1>
      <SearchBar searchGuardian={searchGuardian} />
      <Section sections={sections} articles={articles} />
    </div>
  );
};

export default App;
