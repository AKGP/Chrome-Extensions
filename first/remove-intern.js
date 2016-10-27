var obj = document.getElementsByClassName("active");
obj[0].style.display = "none";
obj[0].remove();
var obj2 = document.getElementsByClassName("tab-head");
obj2[0].className +=" active";