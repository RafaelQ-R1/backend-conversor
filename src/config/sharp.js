/* eslint-disable no-console */
import fs from 'fs';
import sharp from 'sharp';

exports.convertImage = async (file, size, format, quality) => {
  const newPath = `${file.path.split('.')[0]}.${format}`;

  const convertedImage = await sharp(file.path)
    .resize(size)
    .toFormat(format)
    .webp({ quality })
    .toBuffer();

  fs.access(file.path, (err) => {
    if (!err) {
      fs.unlink(file.path, (error) => {
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
