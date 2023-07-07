const val = "Mathematics";

console.log(val.length);
console.log(val.charAt(3));
console.log(val.indexOf("at"));
console.log(val.lastIndexOf("at"));
console.log(val.indexOf("Mat"));

console.log(val.toUpperCase());
console.log(val.toLowerCase());
console.log(val.includes("blah"));
console.log(val.includes("mat"));

console.log(val.slice(5, 8));
console.log(val.slice(4));

console.log(val.split("m"));
console.log(val.split(""));
console.log("john,ashim,doe".split(","));
console.log("my name is".split(" "));

let m = "23";
console.log(typeof Number(m));

let myfloat = 23.4567777;
console.log(myfloat.toFixed(3));
