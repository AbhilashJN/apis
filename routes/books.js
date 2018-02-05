module.exports = [

  {
    method: 'GET',
    path: '/books',
    handler: (request, response) => { response('server OK'); },
  },
];

