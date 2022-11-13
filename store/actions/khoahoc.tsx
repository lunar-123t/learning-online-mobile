import { KHOA_HOC, LIST_MON_HOC, LIST_VIDEO_MON_HOC,  } from '../types';

export const setKhoahoc = (payload: any) => ({
    type: KHOA_HOC,
    payload,
  });
export const setListmonhoc = (payload: any) => ({
    type: LIST_MON_HOC,
    payload,
  });
export const setList_video_mon_hoc = (payload: any) => ({
    type: LIST_VIDEO_MON_HOC,
    payload,
  });
export default {
    KHOA_HOC,
    LIST_MON_HOC,
    LIST_VIDEO_MON_HOC,
};  