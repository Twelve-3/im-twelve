var xhr = new XMLHttpRequest();

function header(){
    xhr.open("get","htmls/head.html");
    xhr.send();
    xhr.addEventListener('readystatechange', () => {
		if( xhr.readyState === 4 && xhr.status === 200) {
			
		}
	});
}

function footer(){
    $.ajax({
        url:"htmls/foot.html",
        cache:false,
        success:function(html){
            document.write(html);
        }
    });
}