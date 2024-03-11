import { ACTION_TYPE, MyAction } from './action_type';

export const myAction = (payload: any): MyAction => ({
  type: ACTION_TYPE,
  payload,
});