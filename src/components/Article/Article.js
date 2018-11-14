// component representing articles retrieved from the API
import React from 'react';
import './Article.css';

class Article extends React.Component {
  render () {
    return (
      <div className="Article">
        <div className="image-container">
          <img src={this.props.article.imageSrc} alt=''/>
        </div>
        <h2><a href={this.props.article.link} target="_blank">{this.props.article.title}</a></h2>
        <div className="Article-information">
          <div className="Article-publication-date">
            <p>Date published: {this.props.article.publication_date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
