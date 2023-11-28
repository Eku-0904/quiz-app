




const mongoose = require('mongoose');
const uri = "mongodb+srv://eku:Ochenko1223@cluster0.ujt2jdx.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database ok")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connect











// // Database Name
// const dbName = 'firstMongoDB'; // replace with your database name

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// // Use connect method to connect to the server
// client.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }

//   console.log('Connected to MongoDB successfully');

//   // Perform operations on the database using client
//   const db = client.db(dbName);

//   // Example: Insert document into a collection
//   const collection = db.collection(`mongodb://localhost:${port}`);
//   collection.insertOne({ key: 'value' }, (insertErr, result) => {
//     if (insertErr) {
//       console.error('Error inserting document:', insertErr);
//     } else {
//       console.log('Document inserted:', result.ops[0]);
//     }

//     // Close the connection
//     client.close();
//   });
// });
