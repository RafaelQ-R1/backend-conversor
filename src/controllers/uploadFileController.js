class FileController {
  async store(req, res) {
    try {
      const { file } = req;

      return res.status(200).json({
        originalname: file.originalname,
        path: file.path,
        size: file.size,
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new FileController();
