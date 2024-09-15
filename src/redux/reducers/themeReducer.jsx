import SET_THEME from "../actions/themeActions";

const initialState = {
  theme: "light",
};
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
