import mongoose from "mongoose";


// connecting mongodb Cloud
const Connection = async (username, password) => {
    const URL = `mongodb://brajesh:Brajesh123@stljee-shard-00-00.n92xc.mongodb.net:27017,stljee-shard-00-01.n92xc.mongodb.net:27017,stljee-shard-00-02.n92xc.mongodb.net:27017/STLJEE?ssl=true&replicaSet=atlas-gkyk90-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB cloud')
    } catch (error) {
        console.log("DB Not Connected", error.message)
    }
}
export default Connection;



