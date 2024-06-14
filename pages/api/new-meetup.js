import { MongoClient } from "mongodb"
const handler=async (req,res)=>{
    if(req.method=='POST'){
        const data = req.body
        const {title,image,address,description}= data
        const client = await MongoClient.connect('mongodb+srv://9012770504:9012770504@cluster0.p1wrexw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db()
        const meetupscollection = db.collection('meetups');
        const result = await meetupscollection.insertOne(data)
        console.log(result)
        client.close()
         res.status(201).json({message:'meetup inserted'})
    }

}
export default handler