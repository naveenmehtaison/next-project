import { title } from "process"
import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"
// const Dummy_Place = [{
//     id:'m1',
//     image:'https://uttarakhandtourism.gov.in/sites/default/files/2020-09/Almora%20Thumbnail_0.jpg',
//     title:'Almora',
//     address:'kasar Devi , Almora'

// },
// {id:'m2',
//  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pithoragarh_Sunrise.jpg/250px-Pithoragarh_Sunrise.jpg',
//  title:'Pithoragarh',
//  address:'Pithoragh City'
// }]
function Homepage(props){

    return(
    <>
        <MeetupList meetups = {props.meetups} />

    
    </>
    )
} 

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://9012770504:9012770504@cluster0.p1wrexw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db()
    const meetupscollection = db.collection('meetups');
    const meetups = await meetupscollection.find().toArray()
    client.close()
    return{
        props:{
            meetups:meetups.map((meetup)=>({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),

            }))
        },
        revalidate:10
    }
}
export default Homepage