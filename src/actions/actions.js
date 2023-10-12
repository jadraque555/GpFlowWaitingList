export const SET_SELECTED_INCOME = 'SET_SELECTED_INCOME';
export const SET_SELECTED_GOAL = 'SET_SELECTED_GOAL';
export const SET_SELECTED_EXPERIENCE = 'SET_SELECTED_EXPERIENCE';
export const ADD_TO_WAITING_LIST = 'ADD_TO_WAITING_LIST';

export const setSelectedIncome = (income) => ({
    type: SET_SELECTED_INCOME,
    payload: income
});
  
export const setSelectedGoal = (goal) => ({
    type: SET_SELECTED_GOAL,
    payload: goal
});
  
export const setSelectedExperience = (experience) => ({
    type: SET_SELECTED_EXPERIENCE,
    payload: experience
});

export const addToWaitingList = (email, selection, selectedInvestments) => ({
    type: ADD_TO_WAITING_LIST,
    payload: {
      email,
      selection,
      selectedInvestments
    }
});
  