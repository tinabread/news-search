import React from 'react';
import './ArticleList.css';
import Article from '../Article/Article';

class ArticleList extends React.Component {
  
  renderArticles() {
    return this.props.articles.map(article => {
      if (article.section === this.props.section) {
        return <Article article={article} key={article.id}/>;
      }
    });
  }
  
  render() {
    return (
      <div className="ArticleList">
      {this.renderArticles()}
      </div>
    )
  };
}

export default ArticleList;

