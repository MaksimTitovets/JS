const sequenceSum = (begin, end, step) => {
  let s = 0;
  while (begin <= end) {
    begin += step;
    s += begin;
  }
  return s;
};
