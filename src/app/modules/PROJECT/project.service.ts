import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IProject } from "./project.interface";
import { Project } from "./projects.model";



const createProjectServices = async (project: IProject): Promise<IProject | null> => {
    // console.log(Project, 'from services');
  
    const createdProject = await Project.create(project);
    if (!createdProject) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Failed to create new Project');
    }
    return createdProject;
    // return null
  };

  
const getSingleProject = async (id: string): Promise<IProject | null> => {
    const result = await Project.findById(id);
  
    return result;
  };
  
  const deleteProject = async (id: string): Promise<IProject | null> => {
    const result = await Project.findByIdAndDelete(id)
    return result;
  };
  
  const updateProject = async (
    id: string,
    payload: Partial<IProject>
  ): Promise<IProject | null> => {
  
    const result = await Project.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };
  
  export const ProjectService ={createProjectServices,getSingleProject,deleteProject,updateProject}