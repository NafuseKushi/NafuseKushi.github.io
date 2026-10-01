fetch("/header.html")
  .then((response) => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    if (window.location.hash) {
      const targetId = window.location.hash;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  });
fetch("/right-navi.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#right-navi").innerHTML = data);
fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);
