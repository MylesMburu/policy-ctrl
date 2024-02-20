const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: String,
  category: String,
  uploadedAt: { type: Date, default: Date.now },
  s3Url: String
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
