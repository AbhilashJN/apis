const Server = require('./server');


describe('Testing Hapi server', () => {
  test('Should return status 200', (done) => {
    const request = {
      method: 'GET',
      url: '/books',
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      expect(response.payload).toMatch('server OK');
      done();
    });
  });
});
