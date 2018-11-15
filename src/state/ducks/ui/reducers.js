import types from './types';

const initialState = {
  numberOfAPICallsInProgress: 0
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_UI_SUCCESS: {
      const value = state[action.key] + 1;
      return {
        ...state,
        [action.key]: value
      };
    }

    case types.DECREMENT_UI_SUCCESS: {
      const value = state[action.key] - 1;
      return {
        ...state,
        [action.key]: value
      };
    }

    case types.UPDATE_UI_SUCCESS: {
      return Object.assign(
        {
          [action.key]: action.value
        },
        state
      );
    }

    default:
      return state;
  }
};

export default uiReducer;
