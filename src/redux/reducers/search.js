import { FILTER, SUGGEST, RESETSUGGESTIONLIST } from "../actionTypes";
import data from '../../dataStorage/tours';
import { getFilteredTours, getSuggestionListBy } from '../../shared/utils/tour';

const initialState = {
  tours: data.tours,
  suggestList: []
};

const Search = (state = initialState, action) => {
  let  searchString, id;
  if (action.payload) {
    searchString = action.payload.searchString;
    searchString = searchString  && searchString.toLowerCase();
    id = action.payload.id;
  }
  switch (action.type) {
    case FILTER: {
      return {
        suggestList: [],
        tours: getFilteredTours(searchString, id, initialState)
      }
    }
    case SUGGEST: {
      return {
        tours: state.tours,
        suggestList: getSuggestionListBy(searchString, initialState)
      }
    }
    case RESETSUGGESTIONLIST: {
      return {
        tours: state.tours,
        suggestList: []
      }
    }
    default: {
      return state;
    }
  }
};

export default Search;
