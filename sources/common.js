function hf(){
    $(function(){
        $("#head").load("parts/head.html");
        $("#foot").load("parts/foot.html");
      });
}

document.getElementById('twitMain').addEventListener('mouseover', function(){
	document.getElementById('twitMain').innerHTML = '乗った！';
	document.getElementById('twitMain').style.background = '#cc9900';
});
document.getElementById('twitMain').addEventListener('mouseout', function(){
	document.getElementById('twitMain').innerHTML = '離れた！';
	document.getElementById('twitMain').style.background = '#0099cc';
});