import { useRouter } from "next/router"
import Card from "../../components/ui/Card"
import Meetupdetails from "../../components/meetups/Meetupdetails"
const Meetbyid =()=>{
    const route = useRouter()
    console.log(route)
    
    return(
        <Meetupdetails img='https://uttarakhandtourism.gov.in/sites/default/files/2020-09/Almora%20Thumbnail_0.jpg'></Meetupdetails>

    )
}
export default Meetbyid