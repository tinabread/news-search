import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Newest': 'newest',
  'Oldest': 'oldest',
  'Relevance': 'relevance'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);  
    
    this.state = {
      term: '',
      date: '',
      sortBy: 'relevance'
    };
    
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  
  getSortByClass(sortingOption) {
    if (this.state.sortBy == sortingOption) {
      return 'active';
    } else {
      return '';
    }
  }
  
  handleSortByChange(option) {
    this.setState({ sortBy: option });
  }

  handleTermChange(event) {
    // this.setState({ term: event.target.value });
    this.props.searchGuardian(event.target.value, this.state.Date, this.state.sortBy);
  }

  handleDateChange(event) {
    this.setState({ Date: event.target.value });
  }
  
  // handleSearch(event) {
  //   this.props.searchGuardian(this.state.term, this.state.Date, this.state.sortBy);
  //   event.preventDefault();
  // }
  
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(option => {
      let sortByOptionValue = sortByOptions[option];
      return <li key={sortByOptionValue}
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {option}
              </li>;
    });
  }

  render () {
    return (
      <div className="SearchBar">
        {/*<div className="SearchBar-sort-options">
          <ul>
          {this.renderSortByOptions()}
          </ul>
        </div>*/}
        <div className="SearchBar-fields">
          <input placeholder="Search articles" onChange={this.handleTermChange}/>
          {/* <input placeholder="Published from" onChange={this.handleDateChange}/> */}
        </div>
        {/*<div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Search</a>
        </div>*/}
      </div>
    );
  }
}

export default SearchBar;