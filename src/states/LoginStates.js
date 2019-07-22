// eslint-disable-next-line
import React, { useReducer } from "react";

const initialState = {
  UsernameColor: "#23282c",
  PasswordColor: "#23282c"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-USERNAME-COLOR": {
      return { ...state, UsernameColor: action.payload };
    }
    case "CHANGE-PASSWORD-COLOR": {
      return { ...state, PasswordColor: action.payload };
    }
    default: {
      return state;
    }
  }
};

function useLoginStates() {
  const [{ UsernameColor, PasswordColor }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function changeState(type, input) {
    dispatch({ type: "CHANGE-" + type, payload: input });
  }

  return [UsernameColor, PasswordColor, changeState];
}

export default useLoginStates;
