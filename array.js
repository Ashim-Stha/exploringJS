const arr = ["Ashim", 7, true];
console.log(arr);

arr.unshift("1st");
console.log(arr);

arr.shift();
console.log(arr);

arr.push(9);
console.log(arr);

arr.pop();
console.log(arr);

arr.splice(2, 2);
console.log(arr);

arr.splice(0, 1);
console.log(arr);

arr.splice(1, 1, "s");
console.log(arr);

arr.splice(1, 0, "added");
console.log(arr);

arr.splice(1, 1, "replaced");
console.log(arr);

const a = ["a", "b", "c", "d"];

const sl = a.slice(2, 4);
console.log(sl);

const str = a.join();
console.log(str);

const newarr = str.split(",");
console.log(newarr);

const b = ["x", "y"];

const withoutSpread = [a, b];
console.log(withoutSpread);
console.log(withoutSpread[0][2]);
console.log(withoutSpread[1][1]);

const withSpread = [...a, ...b];
console.log(withSpread);
