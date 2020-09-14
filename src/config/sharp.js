/* eslint-disable no-console */
import fs from 'fs';
import sharp from 'sharp';

exports.convertImage = async (pathToFile, format, size, quality) => {
  const newPath = `${pathToFile.split('.')[0]}.${format}`;

  const convertedImage = await sharp(pathToFile)
    .resize(size)
    .toFormat(format)
    .png({ quality })
    .toBuffer();

  fs.access(pathToFile, (err) => {
    if (!err) {
      fs.unlink(pathToFile, (error) => {
        if (error) console.log(error);
      });
    }
  });

  const path = fs.writeFile(newPath, convertedImage, (err) => {
    if (err) {
      throw err;
    }
  });

  return path;
};
