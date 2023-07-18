/* eslint-disable no-console */
import { Request, Response } from 'express';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
import { ProjectService } from './project.service';
import { Project } from './projects.model';
import { IProject } from './project.interface';

const createProject = catchAsync(async (req: Request, res: Response) => {
  const { ...Project } = req.body;
  // console.log(Project, 'from controller=================');

  const result = await ProjectService.createProjectServices(Project);
  if (result) {
    sendResponse(res, {
      success: true,
      message: 'successfully create Project',
      statusCode: 200,
      data: result,
    });
    // next()
  }
});

const getALLProject = catchAsync(async (req: Request, res: Response) => {
  const data = await Project.find({});
  sendResponse(res, {
    success: true,
    message: 'successfully get Projects',
    statusCode: 200,
    data: data,
  });
});
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ProjectService.getSingleProject(id);
  // console.log(id,"id");

  sendResponse<IProject>(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrieved successfully !',
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ProjectService.deleteProject(id);

  sendResponse<IProject>(res, {
    statusCode: 200,
    success: true,
    message: 'Student deleted successfully !',
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await ProjectService.updateProject(id, updatedData);

  sendResponse<IProject>(res, {
    statusCode: 201,
    success: true,
    message: 'Academic Faculty updated successfully',
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getALLProject,
  getSingleProject,
  deleteProject,
  updateProject,
};
