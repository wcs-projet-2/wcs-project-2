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
    .then((JSONData) => dataSelection(JSONData))
    .then((selectedData) => dataNormalization(selectedData))
    .catch((error) => console.log(error));
};

const dataSelection = (JSONdata) => {
  let selectedData = [];

  selectedData = JSONdata.data.children.map((child) => {
    let creationDate = child.data.created_utc;
    let author = child.data.author;
    let score = child.data.score;
    let title = child.data.title;
    let text = child.data.selftext;
    let postUrl = child.data.permalink;
    let postHint = child.data.post_hint;
    let mediaSrc = child.data.url;
    let thumbnail = child.data.thumbnail;

    return {
      creationDate: creationDate,
      author: author,
      score: score,
      title: title,
      text: text,
      postUrl: postUrl,
      postHint: postHint,
      mediaSrc: mediaSrc,
      thumbnail: thumbnail,
    };
  });

  return selectedData;
};

const dataNormalization = (selectedData) => {
  let normalizedData = [];

  normalizedData = selectedData.map((article) => {
    let source = 'Reddit';
    let id = `Reddit_${article.author}_${article.creationDate}`;
    let creationDate = new Date(article.creationDate * 1000).toDateString();
    let author = article.author;
    let score = article.score;
    let title = article.title;
    let text = article.text;
    let postUrl = `https://www.reddit.com/${article.postUrl}`;
    let mediaSrc = article.mediaSrc;
    let thumbnail = article.thumbnail;
    let postType = article.postHint;

    return {
      source: source,
      id: id,
      creationDate: creationDate,
      author: author,
      score: score,
      title: title,
      text: text,
      postUrl: postUrl,
      mediaSrc: mediaSrc,
      thumbnail: thumbnail,
      postType: postType,
    };
  });

  return normalizedData;
};

export default getDataFromReddit;
