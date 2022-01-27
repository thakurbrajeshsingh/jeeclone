import mongoose from "mongoose";


// connecting mongodb Cloud
const Connection = async (username, password, dbname) => {
    const URL = `mongodb+srv://${username}:${password}@stljee.n92xc.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB cloud')
    } catch (error) {
        console.log("DB Not Connected", error.message)
    }
}
export default Connection;



