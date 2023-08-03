import createDataContext from './createDataContext';
import {getLocalStorage} from '../util/constants';

const appReducer = (state, action) => {
    switch (action.type) {
        case 'setName':
            return {...state,
                name: action.payload, enabled: state.age != null && state.relation != null && state.saving != null && state.debt != null && state.lifeStyle != null}
        case 'setAge':
            return {...state,
                age: action.payload, enabled: action.payload != null && state.relation != null && state.saving != null && state.debt != null && state.lifeStyle != null}
        case 'setGender':
            return {...state,
                gender: action.payload}
        case 'setRelation':
            return {...state,
                relation: action.payload, enabled: state.age != null && action.payload != null && state.saving != null && state.debt != null && state.lifeStyle != null}
        case 'setNumberOfChildren':
            return {...state,
                numberOfChildren: action.payload,
                children: Array(action.payload).fill({})}
        case 'setChildAge':
            return {...state,
                children: state.children.map((child, index) => 
                    index === action.payload.index ? {age: action.payload.age} : child)
            }
        case 'setDisease':
            return {...state,
                disease: action.payload}
        case 'setOwnCar':
            return {...state,
                ownCar: action.payload}
        case 'setOwnHouse':
            return {...state,
                ownHouse: action.payload}
        case 'setIncome':
            return {...state,
                income: action.payload}
        case 'setInvestment':
            return {...state,
                investment: action.payload}
        case 'setSaving':
            return {...state,
                saving: action.payload, enabled: state.age != null && state.relation != null && action.payload != null && state.debt != null && state.lifeStyle != null}
        case 'setDebt':
            return {...state,
                debt: action.payload, enabled: state.age != null && state.relation != null && state.saving != null && action.payload != null && state.lifeStyle != null}
        case 'setLifeStyle':
            return {...state,
                lifeStyle: action.payload, enabled: state.age != null && state.relation != null && state.saving != null && state.debt != null && action.payload != null}
        case 'setGoals':
            return {...state,
                goals: action.payload}               
        case 'setEnabled':
            return {...state,
                enabled: action.payload}               
        default:
            return state;
    }
};

const setName = dispatch => (val) => {
    dispatch({type: 'setName', payload: val});
};
const setAge = dispatch => (val) => {
    dispatch({type: 'setAge', payload: val});
};
const setGender = dispatch => (val) => {
    dispatch({type: 'setGender', payload: val});
};
const setRelation = dispatch => (val) => {
    dispatch({type: 'setRelation', payload: val});
};
const setNumberOfChildren = dispatch => (val) => {
    dispatch({type: 'setNumberOfChildren', payload: val});
};
const setChildAge = dispatch => (val) => {
    dispatch({type: 'setChildAge', payload: val});
};
const setDisease = dispatch => (val) => {
    dispatch({type: 'setDisease', payload: val});
};
const setOwnCar = dispatch => (val) => {
    dispatch({type: 'setOwnCar', payload: val});
};
const setOwnHouse = dispatch => (val) => {
    dispatch({type: 'setOwnHouse', payload: val});
};
const setIncome = dispatch => (val) => {
    dispatch({type: 'setIncome', payload: val});
};
const setInvestment = dispatch => (val) => {
    dispatch({type: 'setInvestment', payload: val});
};
const setSaving = dispatch => (val) => {
    dispatch({type: 'setSaving', payload: val});
};
const setDebt = dispatch => (val) => {
    dispatch({type: 'setDebt', payload: val});
};
const setLifeStyle = dispatch => (val) => {
    dispatch({type: 'setLifeStyle', payload: val});
};
const setGoals = dispatch => (val) => {
    dispatch({type: 'setGoals', payload: val});
};
const setEnabled = dispatch => (val) => {
    dispatch({type: 'setEnabled', payload: val});
};

const initState = getLocalStorage();

export const { Context, Provider } = createDataContext(
    appReducer,
    { setName, setAge, setGender, setRelation, 
        setNumberOfChildren, setChildAge, setDisease,
        setOwnCar, setOwnHouse, setIncome, setInvestment,
        setSaving, setDebt, setLifeStyle, setGoals, setEnabled
    },
    {   
        ...initState
    }
);