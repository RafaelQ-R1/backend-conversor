const sharp = require('../config/sharp');

class ConvertImage {
  async convert(req, res) {
    try {
      const { size, format } = req.body;

      const { file } = req;

      const convertFile = await sharp.convertImage(file, Number(size), format);

      return res.status(200).send({
        file: req.file,
        path: convertFile,
      });
    } catch (err) {
      return res.send(err);
    }
  }
}
export default new ConvertImage();
