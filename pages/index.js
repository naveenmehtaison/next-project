import { title } from "process"
import MeetupList from "../components/meetups/MeetupList"
function Homepage(){
    const Dummy_Place = [{
        id:'m1',
        image:'https://uttarakhandtourism.gov.in/sites/default/files/2020-09/Almora%20Thumbnail_0.jpg',
        title:'Almora',
        address:'kasar Devi , Almora'

    },
    {id:'m2',
     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pithoragarh_Sunrise.jpg/250px-Pithoragarh_Sunrise.jpg',
     title:'Pithoragarh',
     address:'Pithoragh City'
    }]
    return(
    <>
        <MeetupList meetups = {Dummy_Place} />

    
    </>
    )
} 
export default Homepage