import mongoose from 'mongoose';

const educationDetailsSchema = new mongoose.Schema({

    matricboard: {
        type: String,

    },
    matricyear: {
        type: String,

    },
    matricMarks: {
        type: String,

    },
    interboard: {
        type: String,

    },
    interYear: {
        type: String,

    },
    interMarks: {
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


const educationDetail = mongoose.model('educationDetail', educationDetailsSchema);

export default educationDetail; 