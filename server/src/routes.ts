import express, { Request, Response } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

//import routes
import AuthController from './controllers/AuthController';
import PageContentController from './controllers/Admin/PageContentController';
import BannerImageController from './controllers/Admin/BannerImageController';

//import middleware
import authAdmin from './middlewares/auth/AdminMiddleware';

const routes = express.Router();

//construct controllers
const authController = new AuthController();
const pageContentController = new PageContentController();
const bannerImageController = new BannerImageController();

// index, show, create, update, delete

routes.get('/', (request: Request, response: Response) => {
  return response.send('API greetings');
})

routes.get('/banner_image', bannerImageController.index);
routes.post('/page_content/get_many', pageContentController.getMany);

routes.post('/login', authController.adminLogin);

routes.get('/admin/page_content/:content_name', pageContentController.get);
routes.put('/admin/page_content/:content_name/update', pageContentController.update);

routes.get('/admin/banner_image', authAdmin, bannerImageController.index);
routes.post('/admin/banner_image/upload', [ authAdmin, multer(multerConfig).single("file") ], bannerImageController.update);

export default routes;