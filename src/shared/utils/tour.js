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

export const getRating = points => {
  let stars = [], gold = true;
  const maxRating = 5;
  for (let i = 1; i <= maxRating; i++) {
    gold ? (i <= points ? stars.push(1) : stars.push(i - points)) :  stars.push(0);
    if (points - i <= 0) { gold = false; }
  }
  return stars;
}