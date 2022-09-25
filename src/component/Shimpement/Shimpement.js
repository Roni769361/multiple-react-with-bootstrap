import React, { useContext } from "react";
import { CatagoryRoni } from "../../App";

const Shimpements =()=>{
    const [count, setCount] = useContext(CatagoryRoni);
    return(
        <div>
            <h1>Shimpements Section</h1>
            <button onClick={()=> setCount(count -1)}>ShipmentButtonForIncrement</button>
        </div>
    )
}

export default Shimpements;