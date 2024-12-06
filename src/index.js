import dotenv from 'dotenv';
import dbConnect from './db/dbConnect.js';
import app from './app.js';

dotenv.config({
    path: './.env'
})


dbConnect()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is listening at port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("DB Connection failed", error)
    throw error
})

