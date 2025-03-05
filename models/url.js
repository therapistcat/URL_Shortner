const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
    shortyy: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    Clicks: [{
        timestamp: { type: Number }
    }] // This is an Array that stores at what time the clicks happen
}, 
{ timestamps: true });

const URL = mongoose.model('URL', URLSchema);
module.exports = { URL };