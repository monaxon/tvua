const initialState = {
  APIToken: "a",
  Name: "",
  Level: "",
  Route: "/absence",
  UsernameValue: "",
  PasswordValue: ""
};

const reducer = (state = initialState, action) => {
  JSON.stringify(state);
  switch (action.type) {
    case "API-TOKEN":
      return {
        ...state,
        APIToken: action.payload
      };
    case "NAME":
      return {
        ...state,
        Name: action.payload
      };
    case "LEVEL":
      return {
        ...state,
        Level: action.payload
      };
    case "ROUTE":
      return {
        ...state,
        Route: action.payload
      };
    case "USERNAME-VALUE":
      return {
        ...state,
        UsernameValue: action.payload
      };
    case "PASSWORD-VALUE":
      return {
        ...state,
        PasswordValue: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
