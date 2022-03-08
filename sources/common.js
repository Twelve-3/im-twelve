function header(){
    //document.write("<header><h1 class=\"title\"><a>Twelve's website</a></h1></header>");
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(req.readyState == 4){
            if(req.status == 200){
                var data = req.responseXML;
                document.write(data);
            }
        }
    }

    req.open("GET","https://twelve-3.github.io/im-twelve/htmls/head.html");
    req.send(null);


}