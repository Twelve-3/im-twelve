function header(){
    //document.write("<header><h1 class=\"title\"><a>Twelve's website</a></h1></header>");
    $.ajax({
        url: "htmls/head.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}

function footer(){
    //document.write("<header><h1 class=\"title\"><a>Twelve's website</a></h1></header>");
    $.ajax({
        url: "htmls/foot.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}