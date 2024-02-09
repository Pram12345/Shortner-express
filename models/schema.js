const { default: mongoose } = require('mongoose');

require('./connection');

// Schema
const UrlSchema = new mongoose.Schema({
    ShortID: {
        type: String,
        required: true,
        unique: true,
    },
    RedirectURL: {
        type: String,
        required: true,
    },
    VisitedHistory: [{
        timestamp: {
            type: Number
        }
    }]
},{ timestamps: true }); 

// Model
const URL = mongoose.model("TableForShortURLGen",UrlSchema);

// Exporting
module.exports = URL;
