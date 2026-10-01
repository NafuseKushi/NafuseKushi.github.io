fetch("/header.html")
  .then((response) => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    if (targetElement) {
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'auto';
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';
          }, 100);
        }, 100);
    }
  });
fetch("/right-navi.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#right-navi").innerHTML = data);
fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);
