import React, { useState } from 'react'
import Select from 'react-select'

import '../App.css';

export default function MultipleSelectArea(props) {

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
              isMulti={true} 
              onChange={onChange} />
          </div> :
          <div className="text">
              <Select className="input_style" 
                value={val}
                options={props.options} 
                isMulti={true} 
                onChange={onChange} />
          </div>
        }
    </div>  
  )}
