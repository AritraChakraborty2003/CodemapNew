import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|co|io|in|us|uk|biz|info|xyz|dev)$/,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    role:{
        type: String,
        enum:['admin','user'],
        default: 'user'
    },
    OTP: Number,
})

const AdminModel = mongoose.model('admins',AdminSchema)
export default AdminModel;