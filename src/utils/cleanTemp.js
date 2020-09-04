/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
const fs = require('fs');
const path = require('path');

const directory = path.resolve(__dirname, '..', '..', 'tmp');

const CleanTmp = () => {
  fs.readdir(directory, (err, files) => {
    if (!files) return;
    if (err) throw err;
    setTimeout(() => {
      for (const file of files) {
        fs.unlink(path.join(directory, file), (err) => {
          if (err) throw err;
        });
      }
    }, 5000);
  });
};

export default CleanTmp;
