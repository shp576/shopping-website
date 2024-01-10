const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MongoDB connection options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/personal';

// Function to connect to MongoDB
const connectToDatabase = () => {
  mongoose.connect(mongoURI, mongoOptions)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      // Retry connection after a delay (e.g., 5 seconds)
      setTimeout(connectToDatabase, 5000);
    });
};

// Initial connection to MongoDB
connectToDatabase();

// Define a mongoose schema
const NameSchema = new mongoose.Schema({
  name: String,
  phone: Number,
});

// Create mongoose models
const NameModel = mongoose.model('names', NameSchema);

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle form submissions
app.post('/submit', (req, res) => {
  const { name, phone } = req.body;

  // Create a new document and save it to the database
  const newName = new NameModel({ name, phone });
  newName.save()
    .then(() => {
      res.send('Name and phone number successfully saved to the database');
    })
    .catch((err) => {
      console.error('Error saving to database:', err);
      res.status(500).send(`Error saving to database: ${err.message}`);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});















// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// mongoose.connect('mongodb://127.0.0.1:27017/personal', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Define a mongoose schema
// const NameSchema = new mongoose.Schema({
//   name: String,
//   phone: Number,
// });

// // Create mongoose models
// const NameModel = mongoose.model('Name', NameSchema);
// const PhoneModel = mongoose.model('Phone', NameSchema);

// // Middleware to parse incoming requests
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the HTML form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + 'index.html');
// });

// // Handle form submissions
// app.post('/submit', (req, res) => {
//   const { name, phone } = req.body;

//   // Create a new document and save it to the database
//   const newName = new NameModel({ name, phone });
//   newName.save()
//     .then(() => {
//       res.send('Name and phone number successfully saved to the database');
//     })
//     .catch((err) => {
//       console.error('Error saving to database:', err);
//       res.status(500).send(`Error saving to database: ${err.message}`);
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
