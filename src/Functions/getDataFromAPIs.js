// getDataFromAPIs.js

const fakeData = [
  {
    source: 'Twitter',
    id: '1',
    text:
      'From pilot to astronaut, Robert H. Lawrence was the first African-American to be selected as an astronaut by any na..',
    media: 'https://cdn.pixabay.com/photo/2015/11/07/11/22/dog-1031058_960_720.jpg',
  },
  {
    source: 'Twitter',
    id: '2',
    text:
      "A magnetic power struggle of galactic proportions - new research highlights the role of the Sun's magnetic landscape in the development of solar eruptions that can trigger space weather events around Earth.",
    media: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg',
  },
];

const getDataFromAPI = () => {
  let dataArray = [];

  dataArray = [...fakeData];

  return dataArray;
};

export default getDataFromAPI;
