import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    
    candidate: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    father: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    mother: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    dob: {
        type: String,
        // required: true,
    },
    gender: {
        type: String,
        // required: true,
    },
    idType:{
        type: String,
        // required: true,
    },
    identity: {
        type: String,
        // required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        // required:true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,

    },

})


const user = mongoose.model('newcandidate', userSchema);

export default user; 