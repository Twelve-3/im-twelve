window.onload = function(){
  $(function(){
  var style = "<link rel=\"stylesheet\" href=\"css/animation.css\">";
  $("head link:last").after(style);
  });
}

document.oncontextmenu = function () {return false;}

function hf(){
    $(function(){
        $("#head").load("parts/head.html");
        $("#foot").load("parts/foot.html");
      });
      
}