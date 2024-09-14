// redux/slices/themeSlice.js

  
  // Actions
 export const SET_THEME = 'SET_THEME';
  
  const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
  });

  export default setTheme
  
  // Reducer

  