import AdminModel from '../models/Admin.model.js';
import { hashingPassword, verifyPassword } from '../utils/bcrypt.util.js';
import { tokenGenerator } from '../utils/jwt.util.js';
import { gererateOTP, OTP_sender } from '../utils/OTP.js';

export const get = async (req,res) => {
    try {
        let admins = await AdminModel.find()
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json('Server Error');
    }
}

export const signup = async (req,res)=>{
    try {
        const {email,password,role} = req.body;
        if(password.length < 8) return res.status(400).json('Password should have minimum 8 characters')

        let hashPassword = await hashingPassword(password)
        let new_Admin = await AdminModel.create({
            email,
            password: hashPassword,
            role: 'admin'
        })

        res.status(201).json({Message: 'Admin Created', Admin: new_Admin});
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const login = async (req,res)=>{
    try {
        const {email, password} = req.body;

        let admin = await AdminModel.findOne({email});
        if(!admin) return res.status(401).json('Email or Password Incorrect');

        let result = await verifyPassword(password,admin.password);
        if(!result) return res.status(401).json('Email or Password Incorrect');

        let payload = {
            role: admin.role,
            email: email,
        }

        let token = tokenGenerator(payload)
        res.cookie('token',token,{
            httpOnly: true,
            sameSite: 'lax',
            secure:false,
            maxAge: 1000*60*60*24
        })

        res.status(200).json({Message: 'Login Successfully', Admin: admin})

    } catch (error) {
        res.json({Error: error.message})
    }
}

export const sendOTP = async (req,res)=>{
    try {
        let OTP = gererateOTP()
        const admin = await AdminModel.findOne({email: req.admin.email})
        await OTP_sender(OTP,admin.email)
        admin.OTP = OTP;
        await admin.save()
        res.status(200).json({message: 'OTP sent', admin: req.admin})
    } catch (error) {
        res.status(500).json(`Error ${error.message}`);
    }
}

export const update = async (req,res) => {
    try {
        const {email, password, OTP} = req.body;
        let admin = await AdminModel.findOne({email: req.admin.email});

        if (admin.OTP != OTP) return res.status(400).json('Incorrect OTP');

        if( email ){
            let isPresent = await AdminModel.findOne({email});
            if(isPresent) return res.status(400).json('This email user already present')

            admin.email = email
            await admin.save()
        }
        else{
            if(password.length < 8) return res.status(400).json('Password should have minimum 8 characters');

            let hashPassword = await hashingPassword(password);
            admin.password = hashPassword
        }
        admin.OTP = undefined;
        await admin.save()
        res.status(200).json({Message: 'Credential update successfully',admin:admin});
    } catch (error) {
        res.status(500).json({Message:'Server Error', error: error.message})
    }
}

export const remove = async (req,res)=>{
    try {
        const adminId = req.params.id;
        let admin_del = await AdminModel.deleteOne({_id:adminId});
        res.status(204).json(`Admin Deleted: ${admin_del}`)
    } catch (error) {
        res.status(500).json({Message: 'Server Error',Error: error.message})
    }
}

export const logout = async (req,res)=>{
    try {
        res.cookie('token','')
        res.status(200).json('Logout Successfully');
    } catch (error) {
        res.status(500).json({Message: 'Server Error', Error: error.message});
    }
}