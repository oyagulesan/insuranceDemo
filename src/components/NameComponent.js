import React, { useState, useEffect } from 'react'
import Child from './Child.js'

export default function NameComponent() {

    const [count, setCount] = useState(0);

    console.log(Array(20).fill(1).map(i => i));

    const onCountChange = (event) => {
        setCount(parseInt(event.target.value));
        // alert("Number entered is: " + event.target.value);
    }

    return (
        <div>
            <div>Name:</div>
            <input
                className="inputStyle"
                placeholder='Enter some number between 1 and 20'
                type='number'
                min={1}
                max={20}
                onChange={onCountChange}
                value={count}>
            </input>
            {count > 0 && Array(count).fill(1).map((item, index) => <Child number={index + 1}/>)}
        </div>
    )
}
