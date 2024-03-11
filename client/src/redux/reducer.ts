import { Reducer } from "redux";
import { ACTION_TYPE, MyAction } from "./action_type";

interface MyState {
    data: any;
  }
  
  const initialState: MyState = {
    data: null,
  };
  
  const rootReducer: Reducer<MyState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TYPE:
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };

export default rootReducer