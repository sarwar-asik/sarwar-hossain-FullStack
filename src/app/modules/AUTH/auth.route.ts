import express from 'express'


import validateRequest from '../../middlesWare/validateUserRequest'
import { AuthValidation } from './auth.validation'
import { authController } from './auth.controller'





const router = express.Router()

router.post(
    '/signup',
    validateRequest(AuthValidation.signUpZodSchema),
    authController.signupController
  )

router.post(
'/login',
validateRequest(AuthValidation.LoginZodSchema),
authController.loginController
)

router.post(
'/refresh-token',
validateRequest(AuthValidation.refreshTokenZodSchema),
authController.refreshTokenController
)



// router.get("/",userController.getUser)

export const AuthRouter = router
