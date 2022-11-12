import { combineReducers } from 'redux';
import todo from './todo';
import soluu from './soluu';
import khoahoc from './khoahoc';



const appReducer = combineReducers({
    todo,
    soluu,
    khoahoc,

});

export default appReducer;

export type State = ReturnType<typeof appReducer>