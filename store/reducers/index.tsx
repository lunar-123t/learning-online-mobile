import { combineReducers } from 'redux';
import khoahoc from './khoahoc';



const appReducer = combineReducers({
    khoahoc,

});

export default appReducer;

export type State = ReturnType<typeof appReducer>