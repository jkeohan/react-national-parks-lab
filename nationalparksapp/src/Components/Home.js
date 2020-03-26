import React, {useState, useEffect } from "react"
import json from "../parks.json"
import {Link} from "react-router-dom"

function Home(props){
    // const [result, setResult] = useState([])
    
    const showInfo = (park)=>{
        console.log("I got the element", park)
        props.showInfo(park)
    }
    // useEffect(()=>{
    //     console.log("thats it")
    //     apiPull();
    // }, [])
    
    const apiPull =async()=>{
        console.log("I am in apiPull")
        let res = await fetch(`https://developer.nps.gov/api/v1/parks?api_key=swkeV3UVN0seL6RIBkXzn4KSN0NVXES37Ub2sYnP`)
        let result = res.json()    
        console.log(result)
    }
    apiPull()

    const displayImages = json.map((element, index)=>{
        return(
       <Link to={`/park/${element.id}`} key={index}>
         <div 
        className="images"  
        style={{
            backgroundImage: "url(" + element.images[0].url + ")",
            backgroundSize: "cover"
        }}
        onClick = {()=> showInfo(element.parkCode)}>
        {element.fullName}
        </div>
    </Link>
        )
    })
    return(
        <main>
            {displayImages}
        </main>
    )
}
export default Home
