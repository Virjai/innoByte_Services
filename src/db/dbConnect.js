import mongoose from "mongoose";
import { dbName } from "../constants.js";


const dbConnect = async() => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName} || ''`, {})

        const host = db.connections[0].host
        console.log(`Db is connected at ${host}`);
        
    } catch (error) {
        process.exit(1)
    }
}


export default dbConnect