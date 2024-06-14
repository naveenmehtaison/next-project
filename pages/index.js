import Head from "next/head"

import MeetupList from "../components/meetups/MeetupList"
import { MongoClient, TypedEventEmitter } from "mongodb"
import { Fragment } from "react"

function Homepage(props){

    return(
    <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content='Browse a huge list of highly active React Meetup'></meta>
        </Head>

        <MeetupList meetups = {props.meetups} />

    
    </Fragment>
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