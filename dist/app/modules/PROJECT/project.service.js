"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const projects_model_1 = require("./projects.model");
const createProjectServices = (project) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(Project, 'from services');
    const createdProject = yield projects_model_1.Project.create(project);
    if (!createdProject) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Failed to create new Project');
    }
    return createdProject;
    // return null
});
const getSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.Project.findById(id);
    return result;
});
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.Project.findByIdAndDelete(id);
    return result;
});
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.Project.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.ProjectService = { createProjectServices, getSingleProject, deleteProject, updateProject };
