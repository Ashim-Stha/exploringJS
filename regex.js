document.getElementById("phone").addEventListener("input", (e) => {
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;

  const phone = document.getElementById("phone");
  const val = phone.value;

  const format = document.querySelector(".format");

  const test = regex.test(val);

  if (!test && val.length) {
    format.classList.add("show");
  } else {
    format.classList.remove("show");
  }
});

document.getElementById("phoneForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const regex = /[()-. ]/g;

  const phone = document.getElementById("phone");

  const val = phone.value.replaceAll(regex, "");
  console.log(val);
});
