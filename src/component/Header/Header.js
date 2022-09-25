import React, { useContext, useState } from "react";
import { CatagoryRoni } from "../../App";

const Header =()=>{
    const [cata, setCount] = useContext(CatagoryRoni);
    // const {setCount} = props;
    return(
        <div>
            <h1>Header Section No: {cata}</h1>
            <button className="btn" onClick={()=> setCount(cata +1)}>Cut Now</button>
        </div>
    )
}

export default Header;