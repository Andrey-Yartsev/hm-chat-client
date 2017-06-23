var c = {
  host: 'localhost',
  httpPort: 8000,
  wsPort: 3100,
  storageSuffix: 'hmcc',

  hmUserToken: '4f105aa6-2f2d-4604-9e92-dda982be0147',
  hmHost: '188.227.17.99',
  //hmPort: 8081
  hmPort: 80
};

if (window.config) {
  module.exports = Object.assign(c, window.config);
} else {
  module.exports = c;
}
