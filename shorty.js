const express = require("express");
const path = require("path");
const URLRoute = require("./routes/url");
const { connectDB } = require("./routes/connect");

const app = express();
const PORT = 8005;

app.use(express.json());

connectDB('mongodb://localhost:27017/shorty').then(() => console.log('MongoDB connected'));

app.use("/url", URLRoute);

// Serve the HTML file
app.use(express.static(path.join(__dirname, 'shorty frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'shorty frontend', 'shorty.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Something broke! Error: ${err.message}`);
});

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));