function getMinMax(str) {
  let arr = str.split(' ').filter(val => Number(val));

  let minMax = arr.reduce(() => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
  }));

  return minMax;
}