import { KHOA_HOC,LIST_MON_HOC, LIST_VIDEO_MON_HOC } from '../types';

const initialstate = {
    Khoa: 1,
    Monhoc: 1,
    Videomonhoc: 1,

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
        case LIST_MON_HOC:
            return Object.assign({}, state, {
                Monhoc: action.payload,
            });
        case LIST_VIDEO_MON_HOC:
            return Object.assign({}, state, {
                Videomonhoc: action.payload,
            });
        default:
            return state;
    }
};