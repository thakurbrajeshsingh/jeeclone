import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    
    address: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    locality: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    area: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    country: {
        type: String,
        // required: true,
    },
    state: {
        type: String,
        // required: true,
    },
    district:{
        type: String,
        // required: true,
    },
    pin : {
        type: String,
        // required: true,
        trim: true,
        index: true,
        lowercase: true,
    },
    mobile : {
        type: String,
        // required:true,
        trim: true,
        // unique: true,
        lowercase: true,
    },
    email : {
        type: String,

    },
    phone :{
        type: String,
    }

})


const address = mongoose.model('newAddress', addressSchema);

export default address; 