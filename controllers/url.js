const shortid = require("shortid");
const { URL } = require('../models/url');  // Ensure this is the correct model

async function genurl(req, res) {
    const short = shortid.generate();  // Correct shortid usage

    await URL.create({  // Use the correct model name
        shortyy: short,  // Use the generated short ID
        redirectURL: req.body.url,  // Correct way to access body data
        Clicks: [],  // Ensure field names match the schema
    });

    const baseUrl = `http://localhost:8005/url`;  // Use localhost
    const shortUrl = `${baseUrl}/${short}`;  // Full shortened URL

    return res.json({ shortUrl });  // Return the full shortened URL
}

// Export the function properly
module.exports = {
    genurl,
};
