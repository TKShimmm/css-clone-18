const marker = document.querySelector("#marker");
const item = document.querySelectorAll("ul li a");

function Indicator(e) {
  marker.style.top = e.offsetTop + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
  link.addEventListener("mousemove", (e) => {
    Indicator(e.target);
  });
});
