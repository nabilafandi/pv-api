const { config } = require('dotenv');
config();

const dbconfig = require('./config/db.config')
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")

const Link = require('./routes/index')
const app = express();
//middleware
app.use(express.json({limit: "5MB"}));
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())
app.use(morgan("dev"))


app.use('/', Link)



//configure mongoose
mongoose.set('strictQuery', false);
dbconfig.user ? 
mongoose.connect(`mongodb://${dbconfig.user}:${dbconfig.password}@${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Connected to MongoDB ${dbconfig.HOST}/${dbconfig.PORT}`);
        }
    }
) :
mongoose.connect(`mongodb://127.0.0.1:27017/${dbconfig.DB}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Connected to local MongoDB ${dbconfig.HOST}/${dbconfig.PORT}`);
        }
    }
) 

// Start server
const port = 3000
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})


