const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const generateOTP = require("./generateOTP");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  
  console.log(email);

  const otp=generateOTP()
  
  console.log('email otp',otp)
  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "OTP Verification Mail",
    text: `Your OTP is: ${otp}`,

  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
      res.status(200).json({ message: "Email sent successfully", otp });
     }     
  });
});

module.exports = { sendEmail };