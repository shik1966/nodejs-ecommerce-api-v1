import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnection from "./config/database.js";
import categoryRoute from "./routes/categoryRoute.js"

dotenv.config({path:'config.env'});

//connect with db
dbConnection();

// express app
const app = express();

//  Middlewares
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use('/api/v1/categories', categoryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is Running on port ${PORT}`);
});


