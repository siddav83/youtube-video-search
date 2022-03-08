import React, { useState } from "react";

const Rating =() => {
    const [rate, setRate] = useState(0);

    function RateUp() {
        setRate(rate + 1)
    }

    return(
        <div className="vote">
          <i>thumb</i><div className='counter'>{rate}</div><i>thumb</i>
       </div>
    )
}

export default Rating;