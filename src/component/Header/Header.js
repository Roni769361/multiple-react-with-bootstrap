import React, { useState } from "react";

const Header =(props)=>{
    const {count, setCount} = props;
    return(
        <div>
            <h1>Header Section No: {count}</h1>
            <button onClick={()=> setCount(count +1)}>Cut Now</button>
        </div>
    )
}

export default Header;