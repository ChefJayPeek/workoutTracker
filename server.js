// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const mongoose = require("mongoose");

// Express Setup
const PORT = process.env.PORT || 3000;
const app = express();

// Morgan Logger
app.use(logger("dev"));

// Express Data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json);
app.use(express.static("public"));


// Database Connection
mongoose.connect(
    URI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    },
    (err) => console.log(err)
    );

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on ${PORT}!`);
});
