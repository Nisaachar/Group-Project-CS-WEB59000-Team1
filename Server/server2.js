const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const { Double } = require('mongodb');

const app = express();

// For parsing json encoded and url encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());
app.use(cors({
  origin: ['https://a-zstudyabroad.netlify.app', 'http://localhost:5173'],
  optionsSuccessStatus: 200
}));

// Defining the MongoDB connection string to connect to MongoDB database
const uri = 'mongodb+srv://naiks01:welcome%40123@cluster0.c0l5kdd.mongodb.net/users_details_web_proj?retryWrites=true&w=majority';
// Configuring mongoose to use the database users_details_web_proj created
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'users_details_web_proj'
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.log(err);
});

// Defining the users schema
const usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  sop_progress: String,
  visa_application_progress: String,
  i_20_progress: String,
  GPA : String,
  Admitted : String
}, {
  collection: 'users' // setting the collection name to 'users'
});

const User = mongoose.model('User', usersSchema); // renaming the model to 'User' and passing the schema to it

// Sending all the users data from the database to the client
app.get('/api/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

// Sending only the username and password fields of all the users from the database to the client
app.get('/api/login', (req, res) => {
  User.find({}).select('username password')
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

// Adding a new user to the database
app.post('/users/add', (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    sop_progress: req.body.sop_progress,
    visa_application_progress: req.body.visa_application_progress,
    i_20_progress: req.body.i_20_progress,
    GPA : req.body.GPA
  });

  user.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Serving the React app from the client/build directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Serving uploaded images from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Sending the React app's index.html file to the client for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
