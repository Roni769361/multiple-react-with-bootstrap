import React from "react";
import CatagoryDetails from "../CatagoryDetails/CatagoryDetails";

const Catagory =(props)=>{
    const {count} = props;
    return(
        <div>
            <h1>Catagory Section</h1>
            <CatagoryDetails count={count}></CatagoryDetails>
        </div>
    )
}

export default Catagory;