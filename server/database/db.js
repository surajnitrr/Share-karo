import mongoose from 'mongoose';


const DBconnection = async () => {
    const MONODB_URI=`mongodb://suraj:Suraj01@ac-bxmmfvo-shard-00-00.ciyuw9w.mongodb.net:27017,ac-bxmmfvo-shard-00-01.ciyuw9w.mongodb.net:27017,ac-bxmmfvo-shard-00-02.ciyuw9w.mongodb.net:27017/?ssl=true&replicaSet=atlas-pnam7d-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI ,{useNewUrlParser: true});
        console.log('Database is connected successfully')
    }catch (error) {
        console.error('Error while connecting the databases',error.message);
    }
}

export default DBconnection;