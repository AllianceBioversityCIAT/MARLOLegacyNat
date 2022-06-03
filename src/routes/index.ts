import {Router} from "express";
import documents from "./documents";
import morgan from 'morgan';

const Routes = Router();

Routes.use(morgan('dev'));
Routes.use('/marlo',documents);

export default Routes;