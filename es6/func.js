/*eslint-env es6*/

const addOddSquare = (limit, list) => {
  const acc = list
    .filter((a) => a % 2)
    .map((a) => a * a)
    .slice(0, limit)
    .reduce((prev, cur) => prev + cur, 0);

  return acc;
};

addOddSquare(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

const drawStar = (n) => {
  new Array(n)
    .fill(0)
    .forEach((_, idx) => console.log(new Array(idx + 1).fill("*").join("")));
};

drawStar(5);
