var filter = document.getElementsByClassName("filter");
var btns = filter.getElementsByTagName("a");
console.log(btns.length);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("filter-active");
    current[0].className = current[0].className.replace("filter-active", "");
    this.className += " filter-active";
  });
}
