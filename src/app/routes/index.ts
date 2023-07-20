import express from 'express';

import { ProjectRouter } from '../modules/PROJECT/project.route';
import { AuthRouter } from '../modules/AUTH/auth.route';
// import { UserRouter } from '../modules/USER/user.route';


const router = express.Router();

const modulesRoutes = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/projects',
    route: ProjectRouter,
  },
  
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
