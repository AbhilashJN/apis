
function parseResponse(jsonData) {
  const booksArray = jsonData;
  const booksObj = {};
  let author = '';
  const rating = 0;
  for (let i = 0; i < booksArray.length; i++) {
    // console.log(booksArray[i]);
    author = booksArray[i].Author;
    booksArray[i].rating = Number(rating);
    if (author in booksObj) {
      booksObj[author].push(booksArray[i]);
    } else {
      booksObj[author] = [];
      booksObj[author].push(booksArray[i]);
    }
  }
  return booksObj;
}


module.exports = parseResponse;

