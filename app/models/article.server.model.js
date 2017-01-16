// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Comment = new Schema({
    title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
  	body: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
  	created: { 
		type: Date
	},
  	modified: { 
		type: Date
	}
});

// Define a new 'ArticleSchema'
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	comments: [Comment]
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Article', ArticleSchema);