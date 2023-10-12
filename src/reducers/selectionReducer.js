  const initialState = {
    income: '',
    goal: '',
    experience: ''
  };
  
  const selectionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_INCOME':
        return {
          ...state,
          income: action.payload
        };
  
      case 'SET_SELECTED_GOAL':
        return {
          ...state,
          goal: action.payload
        };
  
      case 'SET_SELECTED_EXPERIENCE':
        return {
          ...state,
          experience: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default selectionReducer;
  