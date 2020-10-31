import express, { Request, Response } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

//import routes
import AuthController from './controllers/AuthController';
import WelcomeController from './controllers/Admin/WelcomeController';

//import middleware
import authAdmin from './middlewares/auth/AdminMiddleware';

const routes = express.Router();

//construct controllers
const authController = new AuthController();
const welcomeController = new WelcomeController();

// index, show, create, update, delete

routes.get('/', (request: Request, response: Response) => {
  return response.send('API greetings');
})

routes.post('/login', authController.adminLogin);

routes.get('/admin/welcome_content', authAdmin, welcomeController.index);
routes.post('/admin/welcome_content/image/upload', [ authAdmin, multer(multerConfig).single("file") ], welcomeController.updateImage);

export default routes;