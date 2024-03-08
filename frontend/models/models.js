import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "This username is already registered, kindly choose another one"],
    },
    email:
    {
        type: String,
        required: true,
        unique: [true, "This email is already registered"],
    },
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
});

const UserModel = mongoose.model('User', UserSchema);