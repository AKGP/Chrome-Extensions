var obj = document.getElementsByClassName("active");
obj[0].style.display = "none";
obj[0].remove();
var obj2 = document.getElementsByClassName("tab-head");
obj2[0].className +=" active";
var obj3 = document.getElementById("internships");
var obj4 = document.getElementById("placements");
obj3.remove();
obj4.className+=" in active";