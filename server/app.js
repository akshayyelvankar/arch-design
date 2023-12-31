const express = require("express")
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const mongoose = require("mongoose")
const UserModel = require('./models/User')
const cors = require("cors")
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express()
dotenv.config();
app.use(express.json())




app.use(cors(
  {
    origin:["https://arch-design-frontend.vercel.app"],
    methods:["POST","GET"],
    credentials:true
  }
))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'https://arch-design-frontend.vercel.app');
  // You can also specify which HTTP methods and headers are allowed.
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



// MongoDB Connection 
//mongoose.connect("mongodb://localhost:27017/user");

const DB = 'mongodb+srv://signifyteam:signifytechnologies@cluster0.hzhe076.mongodb.net/project1?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => {
  console.log(`connection successful`);

}).catch((err) => console.log(`no connection`));

//Signup and login
app.use("/email", emailRoutes);


// Function to generate a four-digit unique user ID
const generateUniqueUserId = async () => {
  // Find the highest existing user ID in the database
  const highestUserId = await UserModel.findOne({}, { userId: 1 }, { sort: { userId: -1 } });

  let nextUserId;

  if (highestUserId) {
    // Increment the highest user ID by 1 and pad it with leading zeros
    nextUserId = String(Number(highestUserId.userId) + 1).padStart(4, '0');
  } else {
    // If there are no existing users, start with "0001"
    nextUserId = '0001';
  }
  return nextUserId;
};


// User Login  
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("The Password is Incorrect")
        }
      } else {
        res.json("No Record Exist")
      }
    })
})

// Post Method    
app.post('/register', async (req, res) => {
  try {
    const { role, type, teamLeaderName, member1, member2, member3, member4, name, email, mobileNo, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      // User with the same email already exists
      return res.status(400).json({ msg: 'User with this email already exists.' });
    }
    if (!email || !password) {
      return res.status(400).json({ message: 'Name, Email, and Password are required fields.' });
    }
    
    // Generate a unique four-digit user ID       
    const userId = await generateUniqueUserId();
    const user = await UserModel.create({ userId, role, type, teamLeaderName, member1, member2, member3, member4, name, email, mobileNo, password })
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
})

// get User Data

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({}, '-password')
    res.json(users)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server Error' })
  }
});

// Pdf Upload and Download Code
const upload = multer({ storage: multer.memoryStorage() });
app.post('/upload/:email', upload.single('file'), async (req, res) => {
  const email = req.params.email;
  const { pdf } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Access the uploaded file's buffer and content type
    const pdfBuffer = req.file.buffer;
    const contentType = req.file.mimetype;

    // Update the user's document with the PDF data
    user.pdf = {
      data: pdfBuffer,
      contentType,
    };

    await user.save();
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint for downloading a PDF file  
app.get('/download-pdf/:email', async (req, res) => {
  try {
    const email = req.params.email

    const user = await UserModel.findOne({ email });

    if (!user || !user.pdf) {
      return res.status(404).json({ message: 'PDF file not found' });
    }
    if (!user.pdf.contentType) {
      return res.status(500).json({ message: 'PDF content type is missing' });
    }
    // Set the response content type to PDF
    res.contentType(user.pdf.contentType);

    // Send the PDF file data         
    res.send(user.pdf.data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});  
  
//Heroku 
app.get("/",(req,res)=>{
  res.json("Hello")
})


// Server Listen    
//const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log("Server is Running on port 3001")

})       