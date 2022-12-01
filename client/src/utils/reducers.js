import { useReducer } from "react";
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
} from "./actions";

export const reducer = (state, action) => {
  switch(action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, ...action.projects]
      };
      
    case DELETE_PROJECT:
      let newState = state.projects.filter(project => {
        return project._id !== action._id
      });

      return {
        ...state,
        projects: newState
      };

    case UPDATE_PROJECT:
      return {
        ...state,
        projects: [...action.projects]
      };
    
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}