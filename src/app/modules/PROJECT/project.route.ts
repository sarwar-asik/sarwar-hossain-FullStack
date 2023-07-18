import express from 'express';

import { ProjectValidation } from './project.validation';
import auth from '../../middlesWare/auth';
const router = express.Router();
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlesWare/validateUserRequest';
import { ProjectController } from './project.controller';

// it is optional

router.post(
  '/create-project',
  validateRequest(ProjectValidation.createProjectZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ProjectController.createProject
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProjectController.getSingleProject
);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), ProjectController.getALLProject);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProjectController.deleteProject
);

router.patch(
  '/:id',
  validateRequest(ProjectValidation.updateProjectZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ProjectController.updateProject
);

export const ProjectRouter = router;
