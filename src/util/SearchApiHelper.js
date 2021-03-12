import 'whatwg-fetch';

const apiKey = '72710282-ed98-4b0f-a1c1-f489dbc9e095';
const defaultImage = 'https://cdn.glitch.com/655e76cf-bdf5-47cd-86d1-1b50783527ea%2Fdefault_article_image.jpg?1537713221812';

const searchApi = (term, location, sortBy) => {
  return fetch(
    `https://content.guardianapis.com/search?api-key=${apiKey}&q=${term}&order-by=${sortBy}`
    ).then(response => {
    return response.json();
    }).then(jsonResponse => {
    if (jsonResponse.response.results) {
      let articles = jsonResponse.response.results.map(article => {
         return {
           id: article.id,
           imageSrc: defaultImage,
           title: article.webTitle,
           link: article.webUrl,
           section: article.sectionName,
           publication_date: convertDate(article.webPublicationDate)
         };
        });
      
      let sections = getUniqueSections(articles);
      
      return {returnedArticles: articles, returnedSections: sections};
      
      }
    });
};

// this could be implemented using an ES6 Set type
const getUniqueSections = (articles) => {
  
  let uniqueSections = [];  
  articles.forEach(article => {
    if (!uniqueSections.includes(article.section)) {
      uniqueSections.push(article.section);
    }
  });
  
  return uniqueSections;
};

const convertDate = (dateString) => {
  let date = new Date(dateString);
  return date.toLocaleDateString();
}  

export { searchApi };