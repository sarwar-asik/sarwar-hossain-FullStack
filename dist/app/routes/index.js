"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_route_1 = require("../modules/PROJECT/project.route");
const auth_route_1 = require("../modules/AUTH/auth.route");
// import { UserRouter } from '../modules/USER/user.route';
const router = express_1.default.Router();
const modulesRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRouter,
    },
    {
        path: '/projects',
        route: project_route_1.ProjectRouter,
    },
];
modulesRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
