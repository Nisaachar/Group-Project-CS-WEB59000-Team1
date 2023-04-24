// We have covered three of the requirements mentioned in the assignemnet:
// Serve files to the client - We are serving the React app from the client/build directory and serving uploaded images from the uploads directory
// Manipulate data in a database or data store  - We are creating a Mongoose schema for the "products" collection. We are also adding data to the products collection and then reading it to display it on the frontend
// Save and load files on the server file system -  We are defining a POST route for uploading files to the server and saving them in the uploads directory using Multer

// Making all the required imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const multer = require('multer');
const path = require('path');

const app = express();

// For parsing json encoded and url encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Defyning the MongoDB connection string to connect to MongoDB database
const uri = 'mongodb+srv://naiks01:welcome%40123@cluster0.c0l5kdd.mongodb.net/users_details_web_proj?retryWrites=true&w=majority';
// Configures mongoose to use the database productsdb created
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'users_details_web_proj'
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.log(err);
});
// // Defining storage engine for Multer that specifies that the uploaded files should be stored in uploads
// // Aslo defyning how the filename should be
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })
// // Creates a multer middleware
// const upload = multer({ storage: storage })
// Defining a Mongoose schema for the "products" collection in the database.
const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    sop_progress: String,
    visa_application_progress: String,
    i_20_progress: String
}, {
  collection: 'users'
});
// creates a Mongoose model based on the "products" schema, which allows for CRUD operations on the "products" collection.
const Product = mongoose.model('Users', usersSchema);

// // Add multiple products to the "products" collection.
// // I had already added some data to the database using the UI of Mongo DB
// // Adding more data to the database since the assignment requires to Manipulate data in a database or data store
// // The below data and the existing data which I had previously added into MongoDB is visible in the Our Products table of the main page
// const products = [
//   { name: "Rockerz 3.0", price: 9.99, rating: 3.5 },
//   { name: "Air bass earpods", price: 19.99, rating: 4.0 },
//   { name: "Airdope speakers", price: 29.99, rating: 4.5 },
// ];

// Product.insertMany(products)
//   .then(() => {
//     console.log("Products added successfully");
//   })
//   .catch((err) => {
//     console.log("Error while adding products:", err);
//   });

// defines a route that responds to GET requests to "/api/products", which retrieves all products from the "products" collection and returns them as a JSON response.
app.get('/api/users', (req, res) => {
  Product.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json({error: err.message});
    });
});

app.get('https://web-dev-server-wm7w.onrender.com/api/login', (req, res) => {
    Product.find({}).select('username password')
      .then((users) => {
        // if (!username) {
        //     return res.status(401).json({ error: 'Invalid username or password' });
        //   }
        res.json(users);
      })
      .catch((err) => {
        res.json({error: err.message});
      });
  });
  


// defines a route that responds to POST requests to "/api/upload", which expects a file with the key "image" to be included in the request body. The route handles the file upload and returns the path to the uploaded file as a JSON response.
// To upload images please go the main page of the react app
// At the end of the page there is a section called Upload an Image.
// Choose an image and upload it . It will get saved to the uploads folder here in ther server directory.
// All the images currently in uploads folder have been uploaded using this method
// app.post('/api/upload', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No files were uploaded.' });
//   }
//   res.json({ path: `/${req.file.path}` });
// });

// Serve the React app
// To see the image from the uploads on the frontend, click the fetch image button at the end of the main page.
// This will diplay the broken headphones image from the uploads folder of the server in the frontend

// app.use(express.static(path.join(__dirname, 'client', 'build')));

// // Serve uploaded images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.listen(443, () => {
  console.log('Server running on port 80');
});
