import { MongoClient } from 'mongodb';

// /api/new-meetup
// Post /api/new-meetup
// code written here will never shown on client side so its a secure place

async function handler(req, res){
   if(req.method === 'POST'){
    const data = req.body;
     
    const client = await MongoClient.connect('mongodb+srv://GiteshPareek:eGMSALMvO28HvudS@cluster0.tkdoyug.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db(); // to get hold of the data to which we are connecting
    // if that data is not created yet it will be created on fly

    const meetupsCollection = db.collection('meetups');
    // Mongodb works with collections full of documents
    // collections like tables in sql db
    // documents would be the entries in those tables

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup Inserted!'});
   }
}

export default handler;