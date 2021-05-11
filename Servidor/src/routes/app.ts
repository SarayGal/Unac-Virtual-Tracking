import { Router } from 'express';
import auth from './auth';
import user from './user';

import rolRoutes from './rolRoutes';


const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/rolcontrol', rolRoutes);

export default routes;