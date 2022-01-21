import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({

    Caddress: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Clocality: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Ccity: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Ccountry: {
        type: String,
        // required: true,
    },
    Cstate: {
        type: String,
        // required: true,
    },
    Cdistrict: {
        type: String,
        // required: true,
    },
    Cpin: {
        type: String,
        // required: true,
        trim: true,
        index: true,
        lowercase: true,
    },
    Cmobile: {
        type: String,
        // required:true,
        trim: true,
        // unique: true,
        lowercase: true,
    },
    Cemail: {
        type: String,

    },
    Cphone: {
        type: String,
    },
    Paddress: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Plocality: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Pcity: {
        type: String,
        // required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Pcountry: {
        type: String,
        // required: true,
    },
    Pstate: {
        type: String,
        // required: true,
    },
    Pdistrict: {
        type: String,
        // required: true,
    },
    Ppin: {
        type: String,
        // required: true,
        trim: true,
        index: true,
        lowercase: true,
    },
    Pmobile: {
        type: String,
        // required:true,
        trim: true,
        // unique: true,
        lowercase: true,
    },
    Pemail: {
        type: String,

    },
    Pphone: {
        type: String,
    }

})


const address = mongoose.model('newAddress', addressSchema);

export default address; 