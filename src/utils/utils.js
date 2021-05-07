const sleep = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, milliseconds);
  });
};

export { sleep };
