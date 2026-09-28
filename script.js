fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);
fetch("right-navi.html")
  .then((response) => response.text())
  .then(html => {
    document.getElementById('right-navi').innerHTML = html;
    if (window.google && google.search && google.search.cse && google.search.cse.element) {
      google.search.cse.element.go();
    })
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);
