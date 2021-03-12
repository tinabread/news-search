## Live app
Live app can be found here: https://tinapan-newssearch-github.glitch.me/

## Notes

Bootstrapped with **create-react-app**.<br>
Based on the project `Yelp Search` by [Codecademy](https://www.codecademy.com/).

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