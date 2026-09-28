fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);
fetch("right-navi.html")
    .then((response) => response.text())
   .then(html => {
    document.getElementById("right-navi").innerHTML = html;
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=f4580689ba19f4b9b';
    script.async = true;
    document.head.appendChild(script);
  });
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);
