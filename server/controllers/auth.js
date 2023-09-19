import nodemailer from "nodemailer";
import mailgen from "mailgen";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import OTPVerification from "../models/otpverification.js";
import Admin from "../models/admin.js";
import { encryptData, decryptData } from "../utils/encryption.js";

const otpGenerateFunc = async (email) => {
    let val = Math.floor(Math.random() * 899999 + 100000);
    let strval = val.toString();
    const salt = await bcrypt.genSalt(11);
    const newVal = await bcrypt.hash(strval, salt);
    const createOTP = new OTPVerification({
        code: newVal,
        verify: false,
        createdAt: Date.now(),
        deleteAt: Date.now() + 900000
    });
    const savedOTP = await createOTP.save();

    let config = {
        service: "gmail",
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASSWORD
        }
    }
    let transporter = nodemailer.createTransport(config);
    let mailgenerator = new mailgen({
        theme: 'default',
        product: {
            name: 'Prakalp',
            link: 'https://mailgen.js/'
        }
    });

    let response = {
        body: {
            name: 'Admin',
            intro: 'Welcome to Prakalp! We\'re very excited to have you on board.',
            action: {
                instructions: 'To get started with Prakalp, use this OTP:',
                button: {
                    color: '#03C988',
                    text: strval,
                    link: ''
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };
    let emailBody = mailgenerator.generate(response);
    let message = {
        from: process.env.MAIL_ID,
        to: email,
        subject: "Verification for Admin",
        html: emailBody,
    }
    transporter.sendMail(message).then(async () => {
        let data = {
            sent: true,
            message: "OTP has been sent to your email!",
            id: savedOTP._id
        }
        return data;
    }).catch((error) => {
        let data = {
            sent: false,
            message: error.message,
        }
        return data;
    })
    return data;
}

// Admin
export const signupAdmin = async (req, res) => {
    try {
        const { aishe, inst_name, email, username, password, c_password } = req.body;

        if (!aishe || !inst_name || !email || !username || !password || !c_password) {
            return res.status(400).json({ message: "Please fill up all fields!" });
        }
        const prevEmail = await Admin.findOne({ email: email });
        if (prevEmail) {
            return res.status(400).json({ message: "Email already exists!" });
        }
        const prevUsername = await Admin.findOne({ username: username });
        if (prevUsername) {
            return res.status(400).json({ message: "Username already exists!" });
        }
        if (password !== c_password) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }

        const data = await otpGenerateFunc(email);
        const encryptedId = encryptData(data.id);

        if (data.sent === true) {
            return res.status(200).json({ id: encryptedId });
        }
        else {
            return res.status(400).json({ message: data.message });
        }


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const verifyOTPAdmin = async (req, res) => {
    try {
        const { aishe, email, username, password, otp, id } = req.body;
        if (!otp) {
            return res.status(400).json({ message: "Enter the OTP!" });
        }

        const decryptedId = decryptData(id);
        const otpData = await OTPVerification.findById(decryptedId);
        if (!otpData) {
            return res.status(400).json({ message: "Bad request!" });
        }
        const otpMatch = await bcrypt.compare(otp, otpData.code);
        if (!otpMatch) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        const idExist = await OTPVerification.findById(decryptedId);
        if (idExist) {
            await OTPVerification.deleteOne({ _id: decryptedId });
        }
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newAdmin = new Admin({
            aishe, email, username, password: hashedPassword
        });
        const savedNewAdmin = await newAdmin.save();
        const token = jwt.sign({ id: savedNewAdmin._id }, process.env.JWT_KEY);
        savedNewAdmin.password = "";
        return res.status(200).json({ message: "Admin created successfully!", token, savedNewAdmin });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const resendOTP = async (req, res) => {
    try {
        const { id, email } = req.body;
        const decryptedId = decryptData(id);
        const idExist = await OTPVerification.findById(decryptedId);
        if (idExist) {
            await OTPVerification.deleteOne({ _id: decryptedId });
        }

        const data = await otpGenerateFunc(email);
        const encryptedId = encryptData(data.id);
        if (data.sent === true) {
            return res.status(200).json({ id: encryptedId });
        }
        else {
            return res.status(400).json({ message: data.message });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const loginAdmin = async (req, res) => {
    try {
        const { aishe, username, password } = req.body;

        if (!aishe || !username || !password) {
            return res.status(400).json({ message: "Please fill up all fields!" });
        }
        const userExist = await Admin.findOne({ username: username });
        if (!userExist) {
            return res.status(400).json({ message: "Username does not exist!" });
        }
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const data = await otpGenerateFunc(userExist.email);
        const encryptedId = encryptData(data.id);
        if (data.sent === true) {
            return res.status(200).json({ id: encryptedId });
        }
        else {
            return res.status(400).json({ message: data.message });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const verifyOTPLogin = async (req, res) => {
    try {
        const { username, otp, id } = req.body;
        if (!otp) {
            return res.status(400).json({ message: "Enter the OTP!" });
        }
        const decryptedId = decryptData(id);
        const otpData = await OTPVerification.findById(decryptedId);
        if (!otpData) {
            return res.status(400).json({ message: "Bad request!" });
        }
        const otpMatch = await bcrypt.compare(otp, otpData.code);
        if (!otpMatch) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        const idExist = await OTPVerification.findById(decryptedId);
        if (idExist) {
            await OTPVerification.deleteOne({ _id: decryptedId });
        }
        const admin = await Admin.find({ username: username });
        const token = jwt.sign({ id: admin._id }, process.env.JWT_KEY);
        admin.password = "";
        return res.status(200).json({ message: "Admin login successfully!", token, admin });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


// Viewer