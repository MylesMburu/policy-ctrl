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


const ForumSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});


const UserModel = mongoose.model('User', UserSchema);
const ForumModel = mongoose.model('Forum', ForumSchema);