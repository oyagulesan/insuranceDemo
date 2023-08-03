import React, { useState } from 'react'
import Select from "react-dropdown-select";

import '../App.css';

export default function SingleSelectArea(props) {

  const [val, setVal] = useState(props.value);

  const onChange = (event) => {
    props.onChange(event);
    setVal(event);
  }

  return (
    <div className="area_single">
        <div className="label">
            {props.label}
        </div>
        {val == null ?
          <div className="text">
            <Select className="input_style"
            options={props.options} 
            onChange={onChange} />
          </div> :
          <div className="text">
              <Select className="input_style"
              values={val}
              options={props.options} 
              onChange={onChange} />
          </div>
        }
    </div>  
  )}
