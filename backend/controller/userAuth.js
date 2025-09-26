const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const Otp = require("../models/Otp.model");
require('dotenv').config();


const register = async (req, res) => {
    const { name, email, password, role, showroomName, location, contactNumber, licenseNumber, website } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            if (user.isVerified) {
                return res.status(400).json({ message: "User already exists" });
            } else {
                // Delete old OTP for unverified user
                await Otp.deleteMany({ email });
            }
        } else {
            // Create new user
            const hashedPassword = await bcrypt.hash(password, 10);
            user = await User.create({
                name,
                email,
                password: hashedPassword,
                role,
                showroomName,
                location,
                contactNumber,
                licenseNumber,
                website,
                isVerified: false
            });
        }

        // Generate OTP
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min expiry
        await Otp.create({ email, otp: otpCode, expiresAt });

        // Send OTP email
        const html = `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h2 style="color: #ff6f61;">Welcome to Vahaan Bazaar</h2>
        <p>Hi ${name},</p>
        <p>Use the OTP below to verify your email and complete your registration:</p>
        <h1 style="color: #007bff;">${otpCode}</h1>
        <p>This OTP is valid for 5 minutes.</p>
        <hr>
        <p style="font-size: 12px; color: gray;">If you did not register, please ignore this email.</p>
      </div>
    `;
        await sendEmail({ to: email, subject: "Verify Your Vahaan Bazaar Account", html });

        res.status(201).json({ message: "OTP sent to your email. Please verify to complete registration." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const record = await Otp.findOne({ email, otp })
        if (!record) {
            return res.status(400).json({ message: "Invalid OTP" })
        }
        if (record.expiresAt < new Date()) return res.status(400).json({ message: "OTP expired" });
        await User.findOneAndUpdate({ email }, { isVerified: true });
        await Otp.deleteMany({ email });

        res.json({ message: "OTP verified successfully. You can now login." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}


const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found please register" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        const token = await jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" })
        const html = `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h2 style="color: #ff6f61;">Welcome to Vahaan Bazaar</h2>
        <p>Hi ${user.name},</p>
        <p>You have been Successfully logged in:</p>
        <h1 style="color: #ff7300ff;">Not You?</h1>
        <p>Contact the support team </p>
        <hr>
      </div>
    `;
        await sendEmail({ to: email, subject: "Verify Your Vahaan Bazaar Account", html });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Json Server Error" })
    }
}
module.exports = { register, verifyOtp, login }