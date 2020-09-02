import { Router } from 'express';
import multer from 'multer';
import MulterConfig from './config/multer';
import ConvertImage from './controllers/convertImage';

const routes = new Router();
const upload = multer(MulterConfig);

routes.post('/upload_image', upload.single('file'), ConvertImage.convert);

export default routes;
