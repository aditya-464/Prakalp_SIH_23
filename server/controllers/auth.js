import Admin from "../models/admin.js";
import nodemailer from "nodemailer";
import mailgen from "mailgen";
import OTPVerification from "../models/otpverification.js";
import bcrypt from "bcrypt";

export const signupAdmin = async (req, res) => {
    try {
        // const { aishe, email, username, password, c_password } = req.body;

        // if (!aishe || !email || !username || !password || !c_password) {
        //     return res.status(400).json({ message: "Please fill up all fields!" });
        // }
        // const prevEmail = await Admin.findOne({ email: email });
        // if (prevEmail) {
        //     return res.status(400).json({ message: "Email already exists!" });
        // }
        // const prevUsername = await Admin.findOne({ username: username });
        // if (prevUsername) {
        //     return res.status(400).json({ message: "Username already exists!" });
        // }
        // if (password !== c_password) {
        //     return res.status(400).json({ message: "Passwords do not match!" });
        // }

        let val =  Math.floor(Math.random() * 899999 + 100000);
        let strval = val.toString();
        const salt = await bcrypt.genSalt(11);
        const newVal = await bcrypt.hash(strval, salt);
        const createOTP = new OTPVerification({
            code : newVal,
            verify : false,
            createdAt : Date.now(),
            deleteAt : Date.now() + 900000
        });
        const savedOTP = await createOTP.save();
        console.log(savedOTP._id);

        // let config = {
        //     service: "gmail",
        //     auth: {
        //         user: process.env.MAIL_ID,
        //         pass: process.env.MAIL_PASSWORD
        //     }
        // }
        // let transporter = nodemailer.createTransport(config);
        // let mailgenerator = new mailgen({
        //     theme: 'default',
        //     product: {
        //         name: 'Prakalp',
        //         link: 'https://mailgen.js/'
        //     }
        // });
        
        // let response = {
        //     body: {
        //         name: 'Admin',
        //         intro: 'Welcome to Prakalp! We\'re very excited to have you on board.',
        //         action: {
        //             instructions: 'To get started with Prakalp, use this OTP:',
        //             button: {
        //                 color: '#03C988',
        //                 text: strval,
        //                 link: ''
        //             }
        //         },
        //         outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        //     }
        // };
        // let emailBody = mailgenerator.generate(response);
        // let message = {
        //     from: process.env.MAIL_ID, 
        //     to: email, 
        //     subject: "Verification for Admin", 
        //     html: emailBody,
        // }

        // transporter.sendMail(message).then(()=>{
        //     return res.status(200).json({message : "OTP has been sent to your email!"});
        // }).catch((error)=>{
        //     return res.status(400).json({message : error.message});
        // })

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const dummy = async(req,res,next)=>{
    req.dummy = "Krishna";
    next();
}

