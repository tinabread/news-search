## Notes

Bootstrapped with **create-react-app**.<br>
Based on a React course project `Yelp Search` by [Codecademy](https://www.codecademy.com/).

Project files are divided into four components:
* `Article`
* `ArticleList`
* `Section`
* `SearchBar`

A search API helper module is located in `util/SearchApiHelper.js`.

## Features
App takes user input to search for articles in the `Content` endpoint of the Guardian api. The app can be extended to search for articles by other publications if a published API is available. 

The following features are included: 
* Article elements display *title* and *publication date* (formatted as DD/MM/YYYY)
* Article title is clickable, and opens the article in a new browser tab
* Real-time search results - modeled on Google's Instant Search feature circa 2010-2017
* Search results are displayed by the section ascribed to the articles by the Guardian

## Feature extensions

The Guardian Content API offers many ways to filter a search. Some other suitable features may be including a dropdown to filter by language, or using a date picker to set a threshold to only return content published from a given date. A base implementation of the latter has been included in the `SearchBar` component.