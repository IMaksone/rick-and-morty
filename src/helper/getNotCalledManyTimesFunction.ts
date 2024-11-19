export default function createNotCalledManyTimesFunction(
  callback: Function,
  cacheTime: number
) {
  let cache: any = null;
  let called = false;
  let timeout: NodeJS.Timeout;

  const timer = () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        called = null;
        cache = null;
      }, cacheTime);
    }
  };

  return (...args: any[]) => {
    if (!called) {
      called = true;
      timer();

      cache = callback(...args);
    }

    return cache;
  };
}
