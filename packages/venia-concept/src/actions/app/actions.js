import { createActions } from 'redux-actions';

const prefix = 'APP';
const actionTypes = [
    'TOGGLE_DRAWER',
    'SET_ONLINE',
    'SET_OFFLINE',
    'TOGGLE_SEARCH',
    'TOGGLE_COMPARE',
    'ADD_COMPARE',
    'EXECUTE_SEARCH'
];

export default createActions(...actionTypes, { prefix });
