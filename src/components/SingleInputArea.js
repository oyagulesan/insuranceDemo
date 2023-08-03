import React, { useState } from 'react'
import '../App.css';

export default function SingleInputArea(props) {

  const [val, setVal] = useState(props.value);

  const onChange = (event) => {
    props.onChange(event);
    if (props.type === 'checkbox') {
      setVal(event.target.checked);
    } else {
      setVal(event.target.value);
    }      
  }

  return (
    <div className="area_single">
        <div className="label">
            {props.label}
        </div>
        <div className="text">
          {val == null ?
            <input
              className="input_style"                
              placeholder={props.placeHolder}
              type={props.type}
              min={props.min}
              max={props.max}
              onChange={onChange}
              checked={val}>
            </input> :
            <input
              className="input_style"                
              placeholder={props.placeHolder}
              type={props.type}
              min={props.min}
              max={props.max}
              onChange={onChange}
              checked={val}
              value={val}>
            </input>
          }
        </div>
    </div>  
  )}
