import express from 'express';
import { UserRouter } from '../modules/users/user.route';
import { ProjectRouter } from '../modules/PROJECT/project.route';


const router = express.Router();

const modulesRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/projects',
    route: ProjectRouter,
  },
  
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
