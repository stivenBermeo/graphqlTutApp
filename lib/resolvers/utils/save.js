const fs = require('fs');
const { cwd } = require('node:process');

exports.save = (domain, content) => {
  console.log(`Current directory: ${cwd()}`);
  fs.writeFile(`./lib/mocks/${domain}.json`, JSON.stringify(content, null, 2), err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}