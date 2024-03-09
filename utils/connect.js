import mongoose from 'mongoose';

export async function ConnectDB(){

    try{
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri);
        console.log('Database connected');
    }
    catch(err){
        console.log('Database connection failed');
        console.log(err);
    }
}