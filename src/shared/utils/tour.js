import { TopTourSearchListNumber } from '../../shared/constants/tour';

/**
 * get list of strings for auto complete dropdown
 * @param {searchString} string = to compare and search based on it
 * @param {initialState} object = initial State of project
 * returns array
*/
export const getSuggestionListBy = (searchString, initialState) => {
  return initialState.tours.reduce((list, tour) => {
    const title = tour.title.toLowerCase();
    if (title.indexOf(searchString) > -1) {
      const titleInfo = {
        title,
        id: tour.id
      }
      list.push(titleInfo);
    }
    return list;
  }, []);
}

/**
 * get filtered tours based on search string
 * @param {searchString} string = to compare and search based on it
 * @param {id} number = id of tour selected to be shown
 * @param {initialState} object = initial State of project
 * returns array
*/
export const getFilteredTours = (searchString, id, initialState) => {
  let tours = [];
  for (let i = 0; i < initialState.tours.length; i++) {
    const tour = initialState.tours[i];
    if (id && tour.id === id) {
      tours.push(tour);
      return tours;
    }
    else if (searchString.trim().length && tour.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1){
      tours.push(tour);      
    }
  }
  if (!searchString.trim().length) {
    return initialState.tours;
  }
  return tours;
}

/**
 * get array of ratings to plot stars
 * @param {points} number = rating
 * returns array
*/
export const getRating = points => {
  let stars = [], gold = true;
  const maxRating = 5;
  for (let i = 1; i <= maxRating; i++) {
    gold ? (i <= points ? stars.push(1) : stars.push(i - points)) :  stars.push(0);
    if (points - i <= 0) { gold = false; }
  }
  return stars;
}

/**
 * get top 5 tours based on search string
 * @param {tours} array = tours associated with search string
 * returns array
*/
export const getTopTourList = (tours) => tours.slice(0, TopTourSearchListNumber);
