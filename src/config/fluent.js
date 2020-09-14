/* eslint-disable func-names */
/* eslint-disable no-console */
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';

exports.ConvertVideo = async (format, name, pathToFile) => {
  const pathToOutPut = path.resolve(
    __dirname,
    '..',
    '..',
    'tmp',
    'uploads',
    `${name}.${format}`
  );
  const videoConverted = ffmpeg({ source: pathToFile })
    .toFormat('avi')
    .on('error', function (err) {
      console.log(`An error occurred${err.message}`);
    })
    .on('end', function () {
      console.log('Processing finished !');
    })
    .saveToFile(pathToOutPut);
  console.log(videoConverted);

  setTimeout(() => {
    fs.access(pathToFile, (err) => {
      if (!err) {
        fs.unlink(pathToFile, (error) => {
          if (error) console.log(error);
        });
      }
    });
  }, 6000);
};
