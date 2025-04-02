import React, { useState, useEffect } from "react";
import Counter from "./counter";

const Doubler = (count) => {
    const [count, setCount] = useState(0);
    
    const double = () => {
        setCount(count * 2);
    };

    return (
        <div>
            <button onClick={double}>Double</button>
        </div>
    )
}
export default Doubler