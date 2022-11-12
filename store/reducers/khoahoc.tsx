import { KHOA_HOC, } from '../types';

const initialstate = {
    Khoa: 1,

};

type Action = {
    type: string,
    payload?: any
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case KHOA_HOC:
            return Object.assign({}, state, {
                Khoa: action.payload,
            });
        default:
            return state;
    }
};