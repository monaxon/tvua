// eslint-disable-next-line
import React, { useReducer } from "react";

const initialState = {
  LoginBox: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-LOGIN-BOX": {
      return { ...state, LoginBox: action.payload };
    }
    default: {
      return state;
    }
  }
};

function useHeaderStates() {
  const [{ LoginBox }, dispatch] = useReducer(reducer, initialState);

  function changeState(type, input) {
    dispatch({ type: "CHANGE-" + type, payload: input });
  }

  return [LoginBox, changeState];
}

export default useHeaderStates;
