import { title } from "process"
import MeetupList from "../components/meetups/MeetupList"

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
function Homepage(){

    return(
    <>
        <MeetupList meetups = {Dummy_Place} />

    
    </>
    )
} 
// export async function getServerSideProps(context){
//     const req = context.req
//     const res = context.res
//     return{
//         props:{
//             meetups:Dummy_Place
//         },

//     }
// }
export async function getStaticProps(){
    return{
        props:{
            meetups:Dummy_Place
        },
        revalidate:10
    }
}
export default Homepage