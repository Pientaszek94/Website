import express from 'express';
import { signin, signup } from '../controller/user.js';

const usersRoutes=express.Router();

usersRoutes.post('/signin', signin )
usersRoutes.post('/signup', signup )

export default usersRoutes;