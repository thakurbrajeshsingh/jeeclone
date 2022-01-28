import mongoose from 'mongoose';

const educationDetailsSchema = new mongoose.Schema({

    matBoard: {
        type: String,
    },
    matYear: {
        type: String,
    },
    matMark: {
        type: String,

    },
    interBoard: {
        type: String,
    },
    interYear: {
        type: String,
    },
    interMark: {
        type: String,
    },
    gradBoard: {
        type: String,

    },
    gradYear: {
        type: String,

    },
    gradMark: {
        type: String,

    },


})


const educationDetail = mongoose.model('userEducation', educationDetailsSchema);

export default educationDetail; 