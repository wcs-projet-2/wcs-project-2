// getDataFromReddit.js

/*

inputs:
  keyWord --> Term to be searched. Ex: 'Burgers'
  sortType --> sort type -- can be one of (relevance, hot, top, new, comments)
  nbOfItems --> the maximum number of items desired (default: 25, maximum: 100)

Output:
  array of objects
    - source = Reddit
    - id = Reddit_$author_$creationDate
    - creation date
    - author
    - score
    - title
    - text
    - postUrl
    
  */

const getDataFromReddit = (keyWord, sortType, nbOfItems) => {
  return fetch(`http://www.reddit.com/search.json?q=${keyWord}&sort=${sortType}&limit=${nbOfItems}`)
    .then((response) => response.json())
    .then((resData) => resData.data.children)
    .then((children) =>
      children.map((child) => ({
        source: 'Reddit',
        id: `Reddit_${child.data.author}_${child.data.created_utc}`,
        creationDate: child.data.created_utc,
        author: child.data.author,
        score: child.data.score,
        title: child.data.title,
        text: child.data.selftext,
        postUrl: child.data.url,
      }))
    )
    .catch((error) => console.log(error));
};

export default getDataFromReddit;
