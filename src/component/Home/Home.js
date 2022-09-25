import React from "react";
import Catagory from "../Catagory/Catagory";

const Home =(props)=>{
    const {count} = props;
    return(
        <div style={{border:'2px solid black'}}>
            <h1>Home Section : {count}</h1>
            <Catagory count={count}></Catagory>
            <AnatherPart></AnatherPart>
 
        </div>
    )
}

function AnatherPart(){
    return(
        <div>
            <div className="row">
                <div className="col-md-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A blanditiis quia eius dolore nemo magni ducimus et sequi saepe, adipisci earum veniam in harum quis sunt sint suscipit doloribus nisi.</p>
                </div>
                <div className="col-md-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A blanditiis quia eius dolore nemo magni ducimus et sequi saepe, adipisci earum veniam in harum quis sunt sint suscipit doloribus nisi.</p>
                </div>
            </div>
        </div>
    )
}


export default Home;