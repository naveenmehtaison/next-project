import { useRouter } from "next/router"
import Card from "../../components/ui/Card"
import Meetupdetails from "../../components/meetups/Meetupdetails"
import { MongoClient, ObjectId} from "mongodb"
import { title } from "process"
import { setTokenSourceMapRange } from "typescript"
const Meetbyid =(props)=>{
    const route = useRouter()
    console.log(route)
    console.log(props)
    
    return(
        <Meetupdetails 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        ></Meetupdetails>

    )
}
export async function getStaticPaths(){
    // const meetupId = context.params.meetupid
    const client = await MongoClient.connect('mongodb+srv://9012770504:9012770504@cluster0.p1wrexw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db()
    const meetupscollection = db.collection('meetups');
    const meetups= await meetupscollection.find({},{_id:1}).toArray()

    return{
        fallback:true,
        paths:meetups.map(meetup=>({
            params:{meetupid:meetup._id.toString()},
        }))
        // [
        //     {
        //         params:{
        //             meetupid:'m1',
        //         },
        //     },
        //     {
        //         params:{
        //             meetupid:'m2',
        //         }
        //     }
        // ]
    }

}
export async function getStaticProps(context){
    const meetupId = context.params.meetupid
    const client = await MongoClient.connect('mongodb+srv://9012770504:9012770504@cluster0.p1wrexw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db()
    const meetupscollection = db.collection('meetups');
    const selectedaMeetup = await meetupscollection.findOne({
        _id: new ObjectId(meetupId),})
    client.close()
    return{
        props:{
            meetupData:{
                id:selectedaMeetup._id.toString(),
                title:selectedaMeetup.title,
                address:selectedaMeetup.address,
                image:selectedaMeetup.image,
                description:selectedaMeetup.description
            },
        }
    }
}
export default Meetbyid