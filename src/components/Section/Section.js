// component containing the section header
import React from 'react';
import './Section.css';
import ArticleList from '../ArticleList/ArticleList';

class Section extends React.Component {
  render() {
    
    return (
      <div className="Section">
      {
        this.props.sections.map(section => {
          return (
            <div key={section}>
              <h1>{section.toLowerCase()}</h1>
              <ArticleList articles={this.props.articles} section={section}></ArticleList>
            </div>
          );
        })
      }
      </div>
    )
  };
}

export default Section;
