
const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client = new MongoClient(url);

async function Data(){
    let result= await client.connect();
    let db=result.db('E-comm');
    return db.collection('users');
}

module.exports=Data;