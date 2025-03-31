import AdminModel from "../models/Admin.model.js";
import { tokenDecoder } from "../utils/jwt.util.js";

export async function isLoggedin(req,res,next){
    try {
        const token = req.cookies.token;
        if(!token) return res.status(401).json('Token Expire Login Again');
        let {email, role} = tokenDecoder(token);
        let admin = await AdminModel.findOne({email,role});

        req.admin = admin;
        next()
    } catch (error) {
        res.status(500).json('Server Error')
    }
}