import * as Actions from "./actions";
import initialState from "../store/initialState";

export const MessagesReducer = (state = initialState.messages, action) => {
  switch (action.type) {
    case Actions.LOG_IN:
      return {
        ...state,
        ...action.payload,
      };

    case Actions.LOG_OUT:
      return {
        ...state,
        ...action.payload,
      };

    case Actions.POST:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const MessagesListReducer = (
  state = initialState.messagesList,
  action
) => {
  switch (action.type) {
    case Actions.START_IS_LOADING:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.FETCH_MESSAGES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
