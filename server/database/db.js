import mongoose from "mongoose";


// connecting mongodb Cloud
const Connection = async (username, password) => {
    const URL = `mongodb+srv://brajesh:Brajesh123@stljee.n92xc.mongodb.net/STLJEE?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB cloud')
    } catch (error) {
        console.log("DB Not Connected", error.message)
    }
}
export default Connection;



