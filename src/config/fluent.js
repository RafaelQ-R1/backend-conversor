import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

exports.ConvertVideo = () => {
  const pathToFile = path.resolve(__dirname, '..', '..', 'tmp', 'aa.mp4');
  const pathToOutPut = path.resolve(__dirname, '..', '..', 'tmp', 'aa.mp3');
  const command = ffmpeg(pathToFile)
    .toFormat('mp3')
    .size('1280x720')
    .on('error', function (err) {
      console.log(`An error occurred${err.message}`);
    })
    .on('end', function () {
      console.log('Processing finished !');
    })
    .save(pathToOutPut);

  return command;
};
