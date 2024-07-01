const defaultDelay = 50;

export const getThrottledFunction = (callback: Function, delayMs = defaultDelay) => {
  let isThrottled = false,
    savedArgs: any,
    savedThis: any;

  function wrapper(...args: any) {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    callback.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, delayMs);
  }

  return wrapper;
};

