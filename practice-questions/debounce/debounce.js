// Debounce is used to prevent function calls within a set timeframe from creating another invocation.

// Each time there is input, it will reset the timer to the timer.

/**
 * @param function
 */
function myDebounce(callback, timeout = 300) {
  let timer = 0;

  return (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {callback.apply(this, args)}, timeout)
  }
  

  try {
    // What is this ID? How can I get the time from this?
    counterID = countsetTimeout(callback, 1000);
  } catch {}
}
