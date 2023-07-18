"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRouter = void 0;
const express_1 = __importDefault(require("express"));
const project_validation_1 = require("./project.validation");
const auth_1 = __importDefault(require("../../middlesWare/auth"));
const router = express_1.default.Router();
const validateUserRequest_1 = __importDefault(require("../../middlesWare/validateUserRequest"));
const project_controller_1 = require("./project.controller");
// it is optional
router.post('/create-project', (0, validateUserRequest_1.default)(project_validation_1.ProjectValidation.createProjectZodSchema), 
// auth(ENUM_USER_ROLE.ADMIN),
project_controller_1.ProjectController.createProject);
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
project_controller_1.ProjectController.getSingleProject);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN),
project_controller_1.ProjectController.getALLProject);
router.delete('/:id', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), project_controller_1.ProjectController.deleteProject);
router.patch('/:id', (0, validateUserRequest_1.default)(project_validation_1.ProjectValidation.updateProjectZodSchema), (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), project_controller_1.ProjectController.updateProject);
exports.ProjectRouter = router;
