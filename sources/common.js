window.onload = function () {
  $(function () {
    var style = "<link rel=\"stylesheet\" href=\"css/animation.css\">";
    $("head link:last").after(style);
  });
}

document.oncontextmenu = function () { return false; }

function hf() {
  $(function () {
    $("#head").load("parts/head.html");
    $("#foot").load("parts/foot.html");
  });

}

/*
function birthday() {
  const Year = 2005;
  const Month = 5;
  const Day = 7;

  var today = new Date();
  var nowBirth = new Date(today.getFullYear(), Month-1, Day);
  var age = today.getFullYear() - Year;
  if(today < nowBirth){
    age--;
  }
  return age;
}*/