const Client = require('./clientFile');

const test = new Client();

test.normals('ramlethal')
  .then((result) => {
    const parsed = JSON.parse(result);
    console.log(parsed);
  })
