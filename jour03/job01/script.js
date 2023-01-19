$(document).ready(function(){     
    //Dès qu'on clique sur #b1, on applique hide() au titre
    $("#button1").click(function(){
        $("p").hide();
    });
    
    //Dès qu'on clique sur #b1, on applique show() au titre
    $("#button2").click(function(){
        $("p").show();
    });
});