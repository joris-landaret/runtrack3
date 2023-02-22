document.addEventListener("DOMContentLoaded", function() {   
    
    let button = document.querySelector("#button");
    let p = document.querySelector("#compteur");
    let i = 0;
       
    function addone(){
        p.innerHTML = i++;
    }
    
    button.addEventListener('click', addone, {
        
    });

});