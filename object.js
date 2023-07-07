const obj1 = {
  name: "Ashim",
  roll: 7,
  fun: function () {
    return `roll is ${this.roll}`;
  },
};

console.log(obj1.fun());

const obj2 = Object.create(obj1);
obj1.greet = "Hello";

console.log(obj2.greet);
console.log(obj2.fun()); //Inheritance

console.log(Object.keys(obj1));
console.log(Object.values(obj1));

for (let obj in obj2) {
  console.log(obj + ":" + obj2[obj]);
}

console.log(obj1.hasOwnProperty("greet"));
delete obj1.greet;
console.log(obj1.hasOwnProperty("greet"));

const { name, roll } = obj1;
console.log(name);
console.log(roll);

function fun({ name }) {
  return name;
}

console.log(fun(obj1));
