/* eslint-disable no-console */
import fluent from '../config/fluent';

class ConvertVideo {
  async convert(req, res) {
    try {
      const { format, name, pathToFile } = req.body;
      const videConverted = fluent.ConvertVideo(
        format,
        name,
        String(pathToFile)
      );

      console.log(videConverted);
      res.contentType(`video/${format}`);
      res.attachment('myfile.mp3');
      return res.status(200).json({
        msg: 'Success!',
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
}

export default new ConvertVideo();
