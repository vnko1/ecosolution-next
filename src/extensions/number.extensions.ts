// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Number {
  addLeadingZero(this: number): string;
}

Number.prototype.addLeadingZero = function () {
  return String(this).padStart(2, "0");
};
