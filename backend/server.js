const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const AWS = require('aws-sdk');
const cors = require('cors');
const Document = require('./models');

const app = express();
require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors()); 

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.post('/upload-document', async (req, res) => {
    try {
      const { title, category } = req.body;
      const file = req.files.document;
  
      // Upload file to S3
      const s3Response = await s3.upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `documents/${Date.now()}_${file.name}`,
        Body: file.data,
      }).promise();
  
      // Save document metadata in MongoDB
      const newDocument = new Document({
        title,
        category,
        s3Url: s3Response.Location
      });
  
      await newDocument.save();
  
      res.status(201).send({ message: 'Document uploaded successfully', data: newDocument });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error uploading document' });
    }
  });
  
  app.get('/documents', async (req, res) => {
    try {
      const documents = await Document.find();
      res.status(200).send(documents);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error fetching documents' });
    }
  });
  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  