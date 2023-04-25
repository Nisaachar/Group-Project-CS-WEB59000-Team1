// Making all the required imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// For parsing json encoded and url encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Defining the MongoDB connection string to connect to MongoDB database
const uri = 'mongodb+srv://naiks01:welcome%40123@cluster0.c0l5kdd.mongodb.net/users_details_web_proj?retryWrites=true&w=majority';

// Configures mongoose to use the database "users_details_web_proj" created
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'users_details_web_proj'
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.log(err);
});

// Defining a Mongoose schema for the "users" collection in the database.
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  sop_progress: String,
  visa_application_progress: String,
  i_20_progress: String
}, {
  collection: 'users'
});

// creates a Mongoose model based on the "users" schema, which allows for CRUD operations on the "users" collection.
const User = mongoose.model('User', userSchema);

// Defines a route that responds to POST requests to "/api/login", which authenticates a user based on the provided credentials.
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password })
    .then((user) => {
    //   if (!user) {
    //     return res.status(401).json({ error: 'Invalid username or password' });
    //   }

      // If the user is authenticated, return a JSON response containing the user data.
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Serve the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
