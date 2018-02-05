const rp = require('request-promise');
const parseResponse = require('../parseResponse');


module.exports = [{
  method: 'GET',
  path: '/books',
  handler: (req, reply) => {
    const firstApiUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    const secondApiUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

    let booksArray = [];
    rp(firstApiUrl)
      .then((value) => {
        booksArray = JSON.parse(value).books;
        return rp(secondApiUrl + booksArray[0].id);
      })

      .then((value) => {
        booksArray[0].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[1].id);
      })
      .then((value) => {
        booksArray[1].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[2].id);
      })
      .then((value) => {
        booksArray[2].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[3].id);
      })
      .then((value) => {
        booksArray[3].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[4].id);
      })
      .then((value) => {
        booksArray[4].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[5].id);
      })
      .then((value) => {
        booksArray[5].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[6].id);
      })
      .then((value) => {
        booksArray[6].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[7].id);
      })
      .then((value) => {
        booksArray[7].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[8].id.toString());
      })
      .then((value) => {
        booksArray[8].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[9].id);
      })
      .then((value) => {
        booksArray[9].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[10].id);
      })
      .then((value) => {
        booksArray[10].rating = JSON.parse(value).rating;
        return rp(secondApiUrl + booksArray[11].id);
      })
      .then((value) => { booksArray[11].rating = JSON.parse(value).rating; })
      .then(() => booksArray)
      .then((value) => {
        const result = parseResponse(value);
        reply(result);
      });
  },

},
];

