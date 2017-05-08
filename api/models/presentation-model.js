'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresentationSchema = new Schema({
  title: {
    type: String,
    required: 'title: Enter the title of the presentation'
  },
  description: {
    type: String
  },
  speaker: {
    type: String,
    required: 'speaker: Enter the name of the speaker'
  },
  topic: {
    type: [String]
  },
  related_url: {
    type: String
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled'],
    default: ['scheduled']
  },
  scheduled_date: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Presentations', PresentationSchema);
