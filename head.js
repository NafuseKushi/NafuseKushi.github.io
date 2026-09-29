fetch("/head.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("beforeend").innerHTML = data);
