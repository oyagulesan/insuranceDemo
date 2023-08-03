import React, { useContext } from 'react'
import '../App.css';
import SingleInputArea from './SingleInputArea';
import { ageSingleInputProps } from '../util/constants';
import {Context as AppContext} from '../context/AppContext';

export default function Children(props) {
  const { state } = useContext(AppContext);

  return (
    <div className="area_children">
      {props.number > 0 && Array(props.number).fill(1).map((item, index) => {
        const tmpProps = {...ageSingleInputProps};
        tmpProps.onChange = (event) => props.onChange(event, index);
        tmpProps.value = state.children[index].age;
        const tempProps = {...tmpProps, label: 'Çocuk ' + (index + 1) + ' yaş:', key: index, value: state.children[index].age}
        return <SingleInputArea {...tempProps} />
      })}
    </div>
  )
}
