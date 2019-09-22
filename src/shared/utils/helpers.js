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
