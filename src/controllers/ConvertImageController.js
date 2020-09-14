// import cleanTmp from '../utils/cleanTemp';

const sharp = require('../config/sharp');

class ConvertImage {
  async convert(req, res) {
    try {
      const { pathToFile, format, size, quality } = req.body;
      console.log(pathToFile);

      const convertedImage = await sharp.convertImage(
        pathToFile,
        format,
        size,
        quality
      );

      return res.status(200).json({
        convertedImage,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
}

export default new ConvertImage();
