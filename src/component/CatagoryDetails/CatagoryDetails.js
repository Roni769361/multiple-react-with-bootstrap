import React, { useContext } from "react";
import { CatagoryRoni } from "../../App";

const CatagoryDetails =()=>{
    // const {count} = props;
    const count = useContext(CatagoryRoni);
    return(
        <div>
            <h3>CatagoryDetails Section</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos. Sl No: {count}</h4>
        </div>
    )
}

export default CatagoryDetails;