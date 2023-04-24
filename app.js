const mongoClient = require('mongodb').MongoClient;
//const uri = "mongodb://localhost:27017/"
const uri="mongodb+srv://newton:HgMtlQUu4y7EJSwQ@cluster0.y9jfw0a.mongodb.net/augustNewton"
const connect = new mongoClient(uri);
const db = connect.db('augustNewton');
const objectId = require('mongodb').ObjectId;

async function insert(){
    try{
let result = await db.collection('employee').insertOne({
    firstName:"akash",
    age:26,
    salary:40000,
    permanant:false
})
console.log(result);
}
catch(error){
    console.log(error);
   }
}
insert();

async function find(){
    try{
       // let query ={firstName:"sujeet"}
        let query ={_id: new objectId('644696b99f8f40240099b742')}
        let result= await db.collection('employee').find(query).toArray();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
//find();

async function update(){
  try{
    let filter ={firstName:"sujeet"};
    let update={$set:{age:30}};
    let result=await db.collection('employee').updateOne(filter,update);
    console.log(result);
  }
  catch(error){
    console.log(error);
  }
}
//update();

async function deleteItem(){
    try{
        let filter={_id: new objectId("644696b99f8f40240099b742")};
        let result= await db.collection('employee').deleteOne(filter);
     console.log('succes');
    }
    catch(error){
      console.log(error);
    }
}
//deleteItem();
