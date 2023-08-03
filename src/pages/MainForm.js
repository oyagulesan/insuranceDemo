import '../App.css';
import SingleInputArea from '../components/SingleInputArea';
import SingleSelectArea from '../components/SingleSelectArea';
import MultipleSelectArea from '../components/MultipleSelectArea';
import Children from '../components/Children';
import {nameSingleInputProps, ageSingleInputProps, 
    genderProps, relationProps, childSingleInputProps,
    diseaseSingleInputProps, ownCarSingleInputProps,
    ownHouseSingleInputProps, investSingleInputProps,
    incomeSingleInputProps, savingSingleInputProps,
    debtSingleInputProps, lifeStyleProps, goalProps
  } from '../util/constants';
  import {Context as AppContext} from '../context/AppContext';
  import React, {useContext, useState, useEffect} from 'react';
  
export default function MainForm({ onButtonClick, onSetDisabled }) {
    const { setName, setAge, setGender, setRelation, 
        setNumberOfChildren, setChildAge, setDisease,
        setOwnCar, setOwnHouse, setIncome, setInvestment,
        setSaving, setDebt, setLifeStyle, setGoals,
        state } = useContext(AppContext);
    const [num, setNum] = useState(state.numberOfChildren);

    useEffect(() => {
        onSetDisabled(!state.enabled);
    }, [state, onSetDisabled]);

    nameSingleInputProps.onChange = (event) => {
        setName(event.target.value)
    }
    nameSingleInputProps.value = state.name;
    ageSingleInputProps.value = state.age;
    ageSingleInputProps.onChange = (event) => {
        setAge(parseInt(event.target.value));        
    }

    genderProps.onChange = (event) => {
        setGender(event)
    }
    genderProps.value = state.gender;

    relationProps.onChange = (event) => {
        setRelation(event)
    }
    relationProps.value = state.relation;

    childSingleInputProps.value = state.numberOfChildren;
    childSingleInputProps.onChange = (event) => {
        setNumberOfChildren(parseInt(event.target.value));
        setNum(parseInt(event.target.value));
    }
    const onChildAgeChange = (event, index) => {
        let children = null        
        if (state.children == null || state.children.length === 0) {
            children = Array(index + 1).fill({age: null});
        } else if (state.children.length <= index) {
            children = [...state.children];
            children.concat(Array(index - state.children.length + 1).fill({age: null}));
        } else {
            children = [...state.children];
        }
        children[index].age = parseInt(event.target.value);
        setChildAge(children);
    }
    diseaseSingleInputProps.value = state.disease;
    diseaseSingleInputProps.onChange = (event) => {
        setDisease(event.target.checked)
    }
    ownCarSingleInputProps.value = state.ownCar;
    ownCarSingleInputProps.onChange = (event) => {
        setOwnCar(event.target.checked)
    }
    ownHouseSingleInputProps.value = state.ownHouse;
    ownHouseSingleInputProps.onChange = (event) => {
        setOwnHouse(event.target.checked)
    }
    incomeSingleInputProps.value = state.income;
    incomeSingleInputProps.onChange = (event) => {
        setIncome(parseFloat(event.target.value))
    }
    investSingleInputProps.value = state.investment;
    investSingleInputProps.onChange = (event) => {
        setInvestment(parseFloat(event.target.value))
    }
    savingSingleInputProps.value = state.saving;
    savingSingleInputProps.onChange = (event) => {
        setSaving(parseFloat(event.target.value))
    }
    debtSingleInputProps.value = state.debt;
    debtSingleInputProps.onChange = (event) => {
        setDebt(parseFloat(event.target.value))
    }

    lifeStyleProps.value = state.lifeStyle;
    lifeStyleProps.onChange = (event) => {
        console.log('Life style event: ', event)
        setLifeStyle(event)
    }

    goalProps.value = state.goals;
    goalProps.onChange = (event) => {
        console.log('Goals event: ', event)
        setGoals(event)
    }

    return (
        <div className="App">
          <div className="header">FORM</div>
          <SingleInputArea {...nameSingleInputProps}/>
          <SingleInputArea {...ageSingleInputProps}/>
          <SingleSelectArea {...genderProps} />
          <SingleSelectArea {...relationProps} />
          <SingleInputArea {...childSingleInputProps}/>
          <Children number={num} onChange={onChildAgeChange}/>
  
          <SingleInputArea {...diseaseSingleInputProps}/>
          <SingleInputArea {...ownCarSingleInputProps}/>
          <SingleInputArea {...ownHouseSingleInputProps}/>
          <SingleInputArea {...incomeSingleInputProps}/>
          <SingleInputArea {...investSingleInputProps}/>
          <SingleInputArea {...savingSingleInputProps}/>
          <SingleInputArea {...debtSingleInputProps}/>
          <SingleSelectArea {...lifeStyleProps} />
          <MultipleSelectArea {...goalProps} />
          <div className="area_single">
            <button disabled={!state.enabled} className="button_style" onClick={onButtonClick}>SONUÇ</button>
          </div>
        </div>
    );
  }
  