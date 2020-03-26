import React, {useState, useEffect} from "react"

function ParkInfo(props){
    console.log("parkInfo", props.park)
    console.log(`https://developer.nps.gov/api/v1/parks?parkCode=${props.park}&api_key=swkeV3UVN0seL6RIBkXzn4KSN0NVXES37Ub2sYnP`)
   const [parks, setPark] = useState({})
   const [image, setImage] = useState("")
   const [address, setAddress] =useState("")
    useEffect(()=>{
        fetchPark()
    },[])
    
    const fetchPark = () => {
        let url =
          `https://developer.nps.gov/api/v1/parks?parkCode=${props.park}&api_key=swkeV3UVN0seL6RIBkXzn4KSN0NVXES37Ub2sYnP`;
        fetch(url)
        .then (res=>res.json())
        .then (json => {
            setPark(json.data[0])
            setImage(json.data[0].images[0])
            setAddress(json.data[0].addresses[0])
            })
    }
         
    return(
    <>
        <div 
        className="parkInfo" 
        style={{
            backgroundImage: "url(" + image.url + ")",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <h1>{parks.fullName}</h1>
        </div>
        <div className="description">
           {parks.description}
        </div>  
        <h3>Address</h3>
        <p>{address.line1}<br/>
            {address.city}, {address.stateCode} {address.postalCode}</p>
        <h3>Directions</h3>
        <p>{parks.directionsInfo}</p>

    </>
    )
}
export default ParkInfo
