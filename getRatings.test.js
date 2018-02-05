const getRatings = require('./getRatings');

describe('testing getRatings function', () => {
  test('Testing with id 1 should return 4.45', (done) => {
    const callback = (arg) => {
      expect(arg).toBe(4.45);
      done();
    };
    getRatings(1, callback);
  });
});
