import mongoose, { model } from "mongoose";
const otpverificationSchema = new mongoose.Schema(
    {
        code : {
            type : String,
            required : true
        },
        verify : {
            type : Boolean,
            required : true,
            default : false
        },
        createdAt : {
            type : String,
            required : true
        },
        deleteAt : {
            type : String,
            required : true
        },
    },
    {
        timestamps : true
    },
    {
        collection : "otpverification"
    }
);
const OTPVerification = mongoose.model("OTPVerification", otpverificationSchema);
export default OTPVerification;