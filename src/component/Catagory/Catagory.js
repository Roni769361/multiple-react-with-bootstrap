import React, { useContext } from "react";
import { CatagoryRoni } from "../../App";
import CatagoryDetails from "../CatagoryDetails/CatagoryDetails";

const Catagory =()=>{
    // const {count} = props;
    return(
        <div>
            <h1>Catagory Section </h1>
            <CatagoryDetails></CatagoryDetails>
        </div>
    )
}

export default Catagory;