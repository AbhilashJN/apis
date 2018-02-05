const request = require('request');

function getRatings(id, callback) {
  const stringId = id.toString();
  const secondApiUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
  request(
    secondApiUrl + stringId,
    (error, resp, body) => {
      const rating = JSON.parse(body).rating;
      callback(rating);
    },
  );
}


module.exports = getRatings;
