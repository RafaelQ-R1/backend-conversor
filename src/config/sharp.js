import fs from 'fs';
import sharp from 'sharp';

exports.convertImage = async (file, size, format) => {
  const newPath = `${file.path.split('.')[0]}.${format}`;

  return sharp(file.path)
    .resize(size)
    .toFormat(format)
    .webp({
      quality: 80,
    })
    .toBuffer()

    .then((data) => {
      fs.access(file.path, (err) => {
        if (!err) {
          fs.unlink(file.path, (err) => {
            if (err) console.log(err);
          });
        }
      });

      fs.writeFile(newPath, data, (err) => {
        if (err) {
          throw err;
        }
      });

      return newPath;
    });
};
