var c = {
  host: 'localhost',
  httpPort: 8000,
  wsPort: 3000,
  storageSuffix: 'hmcc2',

  hmUserToken: '4f105aa6-2f2d-4604-9e92-dda982be0147',
  //hmHost: '188.227.17.99',
  //hmPort: 80,
  hmHost: 'localhost',
  hmPort: 1234,

  tariffHost: '95.79.46.185',
  tariffPort: 56362

};

if (window.config) {
  module.exports = Object.assign(c, window.config);
} else {
  module.exports = c;
}
