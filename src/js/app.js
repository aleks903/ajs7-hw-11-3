function canIterate(obj) {
// eslint-disable-next-line
  return obj ? Object.getPrototypeOf(obj).hasOwnProperty(Symbol.iterator) : false;
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
