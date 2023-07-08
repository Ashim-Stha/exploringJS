// const sec1 = document.querySelector(".sec1");
// console.log(sec1);
// const sec2 = document.getElementById("sec2");

// toggle = () => {
//   if (sec1.style.display === "none") {
//     sec1.style.display = "flex";
//   } else {
//     sec1.style.display = "none";
//   }
// };

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.getElementById("view2");
console.log(view2);

const view = document.getElementsByClassName("view");
console.log(view);

const views = document.querySelectorAll(".view");
console.log(views);

const div = view1.querySelectorAll("div");
console.log(div);

const divs = view1.getElementsByTagName("div");
console.log(divs);

const evendiv = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evendiv);

for (let i = 0; i < evendiv.length; i++) {
  evendiv[i].style.backgroundColor = "blue";
  // evendiv[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
navText.textContent = "Hello";
console.log(navText);

const nav = document.querySelector("nav");
nav.innerHTML = `<h1>Hii</h1> <p>blahblah</p>`;
console.log(nav);

const p = nav.querySelector("p");
console.log(p);
p.style.textAlign = "center";

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDiv = (parent, iter) => {
  const newdiv = document.createElement("div");
  newdiv.textContent = iter;
  newdiv.style.backgroundColor = "black";
  newdiv.style.height = "100px";
  newdiv.style.width = "100px";
  newdiv.style.margin = "10px";
  newdiv.style.display = "flex";
  newdiv.style.alignItems = "center";
  newdiv.style.justifyContent = "center";
  parent.append(newdiv);
};

for (let i = 1; i <= 12; i++) {
  createDiv(view2, i);
}
