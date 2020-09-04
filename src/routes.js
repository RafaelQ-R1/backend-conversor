import { Router } from 'express';
import multer from 'multer';
import MulterConfig from './config/multer';
import ConvertImage from './controllers/convertImage';
import ConvertVideo from './controllers/convertVideo';

const routes = new Router();
const upload = multer(MulterConfig);

routes.post('/upload_image', upload.single('file'), ConvertImage.convert);
routes.post('/upload_video', upload.single('file'), ConvertVideo.convert);

export default routes;
