// import cleanTmp from '../utils/cleanTemp';

const sharp = require('../config/sharp');

class ConvertImage {
  async convert(req, res) {
    try {
      const { size, format, quality } = req.body;

      const { file } = req;

      await sharp.convertImage(file, Number(size), format, Number(quality));

      return res.status(200).json({
        name: file.originalname,
        size: file.size,
        path: file.path,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
}

export default new ConvertImage();
