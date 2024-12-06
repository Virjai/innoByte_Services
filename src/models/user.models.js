import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    }

},{ timestamps: true })


const UserModel = mongoose.model('User', userSchema)

export default UserModel