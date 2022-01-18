import mongoose from "mongoose";


// connecting mongodb Cloud
const Connection = async (username, password) => {
    const URL = `mongodb://brajesh:Brajesh123@stljeedb-shard-00-00.e5pih.mongodb.net:27017,stljeedb-shard-00-01.e5pih.mongodb.net:27017,stljeedb-shard-00-02.e5pih.mongodb.net:27017/STLJEE?ssl=true&replicaSet=atlas-14bitj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB cloud')
    } catch (error) {
        console.log("DB Not Connected", error.message)
    }
}
export default Connection;



