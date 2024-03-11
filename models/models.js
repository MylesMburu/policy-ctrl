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

const commentSchema = new mongoose.Schema({
    content: { 
        type: String, required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true 
    },
    createdAt: { 
        type: Date, default: Date.now 
    }
});
  

  
const postSchema = new mongoose.Schema({
    title: { 
        type: String, required: true 
    },
    content: { 
        type: String, required: true 
    },
    creator: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true 
    },
    topicTag: { 
        type: String, required: true 
    },
    comments: [commentSchema],
    createdAt: { 
        type: Date, default: Date.now 
    },
    updatedAt: { 
        type: Date, default: Date.now 
    }
});

// Indexes for efficient querying
postSchema.index({ creator: 1, topicTag: 1 });
  
  
const UserModel = mongoose.model('User', UserSchema);
const ForumModel = mongoose.model('Forum', ForumSchema);
const CommentModel = mongoose.model('Comment', commentSchema);
const PostModel = mongoose.model('Post', postSchema);

