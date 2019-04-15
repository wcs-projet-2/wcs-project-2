// getDataFromHN.js

/*

inputs: None
Output: Array of fake data

*/
// get random text
const getRandomText = (minLenght, maxLenght) => {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quod culpa quaerat nobis enim corporis mollitia reprehenderit nulla, sint maxime eaque architecto harum perferendis obcaecati sequi voluptate nemo doloremque aspernatur eveniet consequuntur? Esse cupiditate repellat at aperiam natus quibusdam nam voluptate nihil eius deleniti amet in mollitia, ex doloremque quam nulla dolore quod repudiandae dolores nobis dolorum architecto voluptas molestias. Illum in a pariatur sint illo similique molestias vitae? Aliquid earum alias, neque esse beatae dolorum dignissimos consectetur nisi dolores tempore deleniti qui et saepe delectus. Saepe cupiditate, eaque et, eveniet natus, mollitia vitae hic eligendi placeat non nostrum sapiente expedita. Illo ea, vero accusamus maxime dignissimos, iure perspiciatis et nobis non labore quod dolorem beatae amet possimus aspernatur? Fuga exercitationem error sequi voluptas animi aut, unde tempora labore? Veniam, quasi? Obcaecati, et eos rem possimus quae distinctio itaque quia. Sint dolore, illo accusantium numquam cupiditate dolores sed quis dolorum deserunt nisi nihil iste autem cumque provident animi quae eligendi porro dicta iure delectus quasi obcaecati saepe est itaque. Omnis ad quia quisquam dicta eius dignissimos delectus. Minus facere cum pariatur vero sunt, nobis quibusdam aliquid dolores deleniti eveniet placeat quaerat recusandae, aperiam impedit numquam? Velit sunt quo illum incidunt debitis tenetur. Commodi libero deserunt similique soluta quia ratione quasi, corrupti dolor nihil, explicabo quibusdam beatae iste molestias doloribus vel at fuga sint iure. Rerum quae sequi praesentium eveniet est aliquid rem dolor recusandae soluta pariatur maxime, mollitia sit eius. Natus at quibusdam consectetur voluptates hic, officia enim fuga possimus culpa quas commodi iusto asperiores neque quis mollitia eius ex itaque animi veniam, nisi magni, earum molestias veritatis. A, quam! Aliquam accusantium possimus iste sint quisquam soluta, expedita sequi id deleniti, consequuntur commodi beatae facere exercitationem perferendis quaerat. Necessitatibus, magnam quos cupiditate beatae autem ratione reprehenderit, quia, sint accusamus ipsa temporibus. Atque officia dignissimos omnis, esse, earum ipsum labore odio excepturi culpa, id quibusdam nulla voluptatem quo amet placeat? Quis laudantium, illo non laboriosam itaque assumenda voluptatum sapiente, adipisci hic laborum magni saepe, soluta repudiandae voluptates. Quod itaque sapiente, molestiae ducimus minima et quo id dolorum amet quibusdam esse culpa obcaecati velit corporis quae laborum veritatis laboriosam dolorem quia ut totam incidunt. Suscipit rerum eius doloribus molestiae magni distinctio est, exercitationem saepe repudiandae! Optio ipsum ex aspernatur ea et labore, repellendus dolores nam qui odit sunt animi quae reprehenderit sequi non ab maxime praesentium nisi harum sed voluptatem doloribus! Odio vitae neque voluptates voluptatem accusantium tempore enim autem, sapiente cumque ipsum quisquam qui dignissimos sunt nobis, modi esse eveniet culpa accusamus mollitia necessitatibus sequi cum! Quasi iusto quod eos, illo dolorum atque ad laborum similique ex assumenda rerum, nobis iure eius. Incidunt iste sapiente cum nostrum harum, blanditiis sequi deleniti ducimus inventore earum veniam quas repellendus dolore! Illum nihil recusandae consequuntur omnis ipsum doloremque dicta nostrum itaque, debitis nobis saepe earum. Minus ex rem deleniti expedita ducimus quaerat dignissimos? Alias quae illum repellat eligendi accusantium ea enim repudiandae ullam excepturi, reiciendis vero, asperiores dolorum quo voluptatem doloremque itaque ducimus et. Laborum, facilis quos nihil perspiciatis quaerat doloribus at, est esse atque blanditiis rem magni! Aliquam, nihil, eveniet adipisci odit cupiditate modi saepe tenetur architecto provident velit, magni natus quibusdam voluptate nobis illo est quasi! Eveniet obcaecati maxime possimus totam minima quisquam iste nam, nulla molestias? Incidunt repudiandae, accusantium nisi aperiam nulla iste dolore quasi ipsum recusandae aliquid officiis, quidem pariatur, eum neque? Natus odio incidunt, veritatis, pariatur perspiciatis quam amet sint tempore provident illo nostrum laboriosam reiciendis reprehenderit animi, modi sequi exercitationem adipisci? Qui dolores nihil vero ut rem aut cum repudiandae recusandae nisi explicabo? Incidunt, architecto. Distinctio assumenda laudantium incidunt sequi, modi fugit tempore laborum necessitatibus ad veritatis eaque molestiae dolore hic ab non ratione quo. Natus quibusdam error quo laudantium consequatur illum optio et laborum quam? Distinctio officia, odio ex quod modi vero debitis rem a, porro repellendus aut iusto, iste alias iure maxime dignissimos amet tempora. Illum, tempora labore voluptatum dolorum quas explicabo, quasi, nostrum ipsa sint et optio voluptatibus voluptas temporibus adipisci! Ipsum earum similique odio expedita reprehenderit numquam, assumenda totam doloribus? Provident molestiae obcaecati esse accusamus architecto est natus doloribus. Quam dolorum maiores voluptates laborum illo ea. Consequatur delectus iure veritatis omnis autem! Tempore tempora sint ex consectetur harum aperiam cum sequi praesentium adipisci natus placeat, quibusdam, quam ut expedita, autem omnis? Ex voluptatibus aut, est iusto consequuntur, sunt dolor culpa ad praesentium, non officia labore. Similique placeat vero quaerat autem non voluptate delectus consequatur sunt impedit. Hic ad nulla perferendis. Praesentium, minus voluptatibus? Eius aperiam tempore beatae totam neque quia eligendi officiis tempora eos incidunt quae, recusandae maxime facere sed possimus, iusto necessitatibus labore, sint repellendus? Maiores quae iure nesciunt repellat iste ipsa vel consectetur, dolor velit animi quos perspiciatis veritatis similique dolores sapiente ratione, in tempora delectus fugit nulla eius natus, esse blanditiis recusandae? Ullam quos dolore unde maxime iste, et minus possimus quia perferendis asperiores velit adipisci obcaecati enim similique voluptates hic id ipsam fuga! Minima commodi, id beatae dolore reiciendis quas ab earum aliquam ex quia blanditiis, vitae distinctio molestiae quibusdam nemo deserunt molestias corporis vel fuga laboriosam praesentium recusandae tempora quod facilis. Corporis accusamus quam, soluta enim qui aliquid quidem suscipit nobis molestiae molestias reprehenderit. Repellendus sint minus praesentium iusto dolorum, tenetur quaerat saepe soluta velit temporibus id voluptatibus aut quam suscipit nam nobis iste atque. Veniam veritatis inventore nam, harum nemo rerum quis laudantium vitae quam ab sunt. Minus numquam repellat maiores dignissimos nihil architecto nesciunt illum hic a expedita corrupti, magnam saepe ad ullam consectetur distinctio veritatis. Id harum velit repellendus perspiciatis veritatis cumque labore consequuntur, aut, incidunt asperiores porro itaque tempora perferendis vero nobis libero culpa et. Obcaecati beatae est, temporibus aliquam architecto placeat impedit. Quasi minus aperiam dolorem consequatur tenetur assumenda nemo asperiores, fugit, veniam provident adipisci ut porro! Voluptas possimus ea aperiam saepe qui excepturi architecto tempore amet ullam quod, vitae error quos rerum libero eaque sunt cupiditate nisi itaque temporibus nobis dolor voluptate nemo! Totam mollitia ea neque odit deleniti voluptatum magnam tenetur accusamus?';

  let textLenght = Math.floor(Math.random() * (maxLenght - minLenght)) + minLenght;
  let startIndex = Math.floor(Math.random() * lorem.length - maxLenght);
  let endIndex = startIndex + textLenght;

  return lorem.substring(startIndex, endIndex);
};

// get random number
const getRandomNumber = () => {
  return Math.ceil(Math.random() * 100);
};

// get random post type
const getRandomPostType = () => {
  let result;
  let num = Math.ceil(Math.random() * 3);
  switch (num) {
    case 1:
      result = undefined;
      break;
    case 2:
      result = 'image';
      break;

    case 3:
      result = 'link';
      break;

    default:
      break;
  }
  return result;
};

// Fake data
let fakeDataFromHN = [
  {
    source: 'HackerNoon',
    id: 'HackerNoon_1',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_2',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_3',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_4',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_5',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_6',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_7',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_8',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_9',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
  {
    source: 'HackerNoon',
    id: 'HackerNoon_10',
    creationDate: 'Tue Jan 15 2019',
    author: getRandomText(2, 20),
    score: getRandomNumber(),
    title: getRandomText(20, 100),
    text: getRandomText(100, 300),
    postUrl: 'https://en.wikipedia.org/wiki/Pizza',
    mediaSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    postType: getRandomPostType(),
  },
];

const getDataFromHN = () => {
  return fakeDataFromHN;
};

export default getDataFromHN;
