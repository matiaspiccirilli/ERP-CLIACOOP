import { Action } from 'redux';

export const ACTION_TYPE = 'ACTION_TYPE';

export interface MyAction extends Action {
    type: typeof ACTION_TYPE;
    payload: any;
  }