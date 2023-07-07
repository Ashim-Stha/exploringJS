const sec1 = document.querySelector(".sec1");
console.log(sec1);
const sec2 = document.getElementById("sec2");

toggle = () => {
  if (sec1.style.display === "none") {
    sec1.style.display = "flex";
  } else {
    sec1.style.display = "none";
  }
};
