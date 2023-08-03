import React, { useContext, useEffect, useState } from 'react'
import '../App.css';
import {Context as AppContext} from '../context/AppContext';
import { calculateResult } from '../util/constants';

export default function Result({ onButtonClick }) {
    const { state } = useContext(AppContext);
    const [res, setRes] = useState({});

    useEffect(() => {
        setRes(calculateResult(state));
    }, [state]);

    return (
        <div className="area_children">
            <header className="res">{res.title}</header>
            <p className="res">{res.line1}</p>
            <p className="res">{res.line2}</p>
            <ul className="res">
                <li><p>{res.line3}</p></li>
                {res.line4 && <li><p>{res.line4}</p></li>}
                {res.line5 && <li><p>{res.line5}</p></li>}
            </ul>
            <div className="area_single">
                <button className="button_style" onClick={onButtonClick}>GERİ</button>
            </div>
        </div>
  )
}
