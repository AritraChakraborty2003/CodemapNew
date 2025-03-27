import express from 'express';
import { isLoggedin } from '../middlewares/isLoggedin.m-ware.js';
import { get, login, logout, remove, sendOTP, signup, update } from '../controllers/admin.ctrls.js';

const Admin_route = express.Router();

Admin_route.get('/',get)

Admin_route.post('/signup',signup)

Admin_route.post('/login',login)

Admin_route.get('/sendOTP',isLoggedin,sendOTP)

Admin_route.patch('/update/:id',isLoggedin,update)

Admin_route.delete('/delete/:id',isLoggedin,remove)

Admin_route.get('/logout',logout)

export default Admin_route;