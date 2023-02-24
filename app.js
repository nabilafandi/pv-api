const { config } = require('dotenv');
config();

const dbconfig = require('./config/db.config')
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")


const Link = require('./routes/index')
const app = express();
//middleware
app.use(express.json());
app.use(cookieParser())


app.use('/', Link)



//configure mongoose
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${dbconfig.user}:${dbconfig.password}@${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);
// Start server
const port = 3000
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})


