document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("completed");
    initApp();
  }
});

const initApp = () => {
  const view = document.getElementById("view");
  const div = document.querySelector("div");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");

  view.addEventListener("click", (e) => {
    // view.style.backgroundColor = "red";
    view.classList.toggle("red");
    view.classList.toggle("yellow");
  });

  div.addEventListener("click", (e) => {
    e.stopPropagation();
    div.classList.toggle("green");
    div.classList.toggle("purple");
  });

  h1.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.target);
    const val = e.target.textContent;
    val === "hello"
      ? (e.target.textContent = "clicked")
      : (e.target.textContent = "hello");
  });

  p.addEventListener("mouseover", (e) => {
    p.classList.add("height100");
  });

  p.addEventListener("mouseout", (e) => {
    p.classList.remove("height100");
  });
};
