import React, { useContext } from "react";
import { CatagoryRoni } from "../../App";
import Catagory from "../Catagory/Catagory";


const Home =()=>{
    // const {count} = props;
    const catagoryDDD = useContext(CatagoryRoni);
    return(
        <div style={{border:'2px solid black'}}>
            <h1>Home Section Part: {catagoryDDD}</h1>
            <h3>This is Hi {catagoryDDD}</h3>
            <Catagory></Catagory>
            <AnatherPart></AnatherPart>
 
        </div>
    )
}

function AnatherPart(){
    const catagoryDDD = useContext(CatagoryRoni);
    return(
        <div>
            <div className="row">
                <div className="col-md-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A blanditiis quia eius dolore nemo magni ducimus et sequi saepe, adipisci earum veniam in harum quis sunt sint suscipit doloribus nisi. {catagoryDDD}</p>
                </div>
                <div className="col-md-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A blanditiis quia eius dolore nemo magni ducimus et sequi saepe, adipisci earum veniam in harum quis sunt sint suscipit doloribus nisi. {catagoryDDD}</p>
                </div>
            </div>
        </div>
    )
}


export default Home;