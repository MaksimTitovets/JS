String.prototype.toJadenCase = function () {
  return this.replace(/^.| ./g, (m) => m.toUpperCase());
};
