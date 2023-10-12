const initialState = {
    waitingList: []
  };
  
  const waitingListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WAITING_LIST':
        return {
          ...state,
          waitingList: [...state.waitingList, action.payload]
        };
  
      default:
        return state;
    }
  };
  
  export default waitingListReducer;
  