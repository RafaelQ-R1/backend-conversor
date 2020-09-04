/* eslint-disable func-names */
/* eslint-disable no-console */
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
// import path from 'path';

exports.ConvertVideo = async (file, format, res) => {
  const newPath = `${file.path.split('.')[0]}.${format}`;
  // const pathToFile = path.resolve(__dirname, '..', '..', 'tmp', `mia.mp4`);

  const convertedVideo = ffmpeg(file.path)
    .toFormat('mp3')
    .on('end', function (err) {
      if (err) return err;
      return console.log('done');
    })
    .on('error', function (err) {
      console.log(`an error ocorrued:${err}`);
    })
    .pipe(res, { end: true })
    .on('end', () => {
      console.log('process finished!');
    });

  fs.access(file.path, (err) => {
    if (!err) {
      fs.unlink(file.path, (error) => {
        if (error) console.log(error);
      });
    }
  });

  fs.writeFile(newPath, convertedVideo, (err) => {
    if (err) {
      throw err;
    }
  });

  return newPath;
};
