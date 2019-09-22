import { FILTER, SUGGEST, RESETSUGGESTIONLIST } from './actionTypes';

export const suggestBy = searchString => ({
  type: SUGGEST,
  payload: {
    searchString
  }
});

export const filteredTours = (searchString, id) => ({
  type: FILTER,
  payload: {
    searchString,
    id
  }
});

export const resetSuggestionList = () => ({
  type: RESETSUGGESTIONLIST
});


