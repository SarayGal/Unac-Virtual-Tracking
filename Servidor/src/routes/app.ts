import { Router } from 'express';
import auth from './auth';
import user from './user';
import  studentRoutes from './studentRoutes';
import subjectRoutes from './subjectRoutes';
import rolRoutes from './rolRoutes';

//import { StudentController } from '../Controller/StudentController';


const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/rolcontrol', rolRoutes);
routes.use('/student', studentRoutes);
routes.use('/subjectcontrol', subjectRoutes);

export default routes;