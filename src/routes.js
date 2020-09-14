import { Router } from 'express';
import multer from 'multer';
import MulterConfig from './config/multer';
import ConvertImage from './controllers/ConvertImageController';
import ConvertVideo from './controllers/ConvertVideoController';
import uploadFileController from './controllers/uploadFileController';

const routes = new Router();
const upload = multer(MulterConfig);

routes.post('/uploadfile', upload.single('file'), uploadFileController.store);
routes.post('/convert_video', ConvertVideo.convert);
routes.post('/convert_image', ConvertImage.convert);

export default routes;
