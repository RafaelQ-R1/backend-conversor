const VideoConversor = require('../config/VideoConversor');

class ConvertVideo {
  async convert(req, res) {
    try {
      res.contentType('audio/mp3');
      res.attachment('myfile.mp3');
      const { format } = req.body;

      const { file } = req;

      await VideoConversor.ConvertVideo(file, format, res);

      return res.status(200).json(file);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
}

export default new ConvertVideo();
