console.log("Hello world");

var open = false;

function changeTransform(element) {
  // console.log("You have clicked me");
  var d = document.getElementsByClassName("navbar-items2");
  d[0].style.transition = "0.4s";
  d[0].style.display = "none";
  if(open == true) {
    element.classList.remove("change");
    d[0].style.display = "none"; // this is the navbar-items div
    open = false;
  } else {
      element.classList.add("change");
      d[0].style.display = "block";
      d[0].style.transition = "0.4s";
      open = true;
  }
}
