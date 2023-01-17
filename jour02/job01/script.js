document.addEventListener("DOMContentLoaded", function() {   
    
    // fonction qui récupère le texte de l'article et l'affiche dans la console grâce au button
    function citation(){
        
        // cible l'article et le button
        const button = document.querySelector("#button")
        const article = document.querySelector("#citation").innerHTML
    
        console.log(article);
    }
    
    button.addEventListener('click', citation, {
        
    });

});