// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3000;

// // Connect to MongoDB (replace 'yourDatabaseName' and connection string)
// mongoose.connect('mongodb://localhost:27017/personal', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a mongoose schema
// const contactSchema = new mongoose.Schema({
//   name: String,
//   contactNumber: String,
// });

// // Create a mongoose model
// const Contact = mongoose.model('Contact', contactSchema);

// // Set up middleware to parse JSON requests
// app.use(express.json());

// // Serve HTML form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Handle form submissions
// app.post('/submit', async (req, res) => {
//   const { name, contactNumber } = req.body;

//   // Create a new contact instance
//   const newContact = new Contact({
//     name,
//     contactNumber,
//   });

//   try {
//     // Save the contact to the database
//     const savedContact = await newContact.save();
//     console.log('Contact saved:', savedContact);
//     res.send('Contact saved successfully!');
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
