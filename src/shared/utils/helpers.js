/**
 * Debounce a function by specified time limit
 * @param callback Function to debounce
 * @param limit Time limit (in ms)
 * @returns {Function}
 */
export const debounce = (callback, limit) => {
  var wait = false, timer;
  return function () {
      if(wait) {
          clearTimeout(timer);
          timer = null;
      }
      timer = setTimeout(function () {
          callback.call();
      }, limit);
      wait = true;
  };
};
