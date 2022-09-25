import React from "react";

const CatagoryDetails =(props)=>{
    const {count} = props;
    return(
        <div>
            <h3>CatagoryDetails Section</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos. Sl No: {count}</h4>
        </div>
    )
}

export default CatagoryDetails;