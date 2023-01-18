document.addEventListener("DOMContentLoaded", function() {   
    
    let button = document.querySelector("#button");
    let div = document.querySelector("#div");

       

    // fonction qui récupère le texte de l'article et l'affiche dans la console grâce au button
    function showhide(){
        
        let article = document.createElement("article");
        const text = "L'important n'est pas la chute, mais l'atterrissage."
        article.textContent = text;
        let select_article = document.querySelector("article");
        //div.appendChild(article);
        console.log(select_article);

        if(select_article == null){
           
            div.appendChild(article);
        }else {
            console.log('toto');
            div.removeChild(div.children[0]);
            
        }
        
        showhide.onclick;
    }
    
    button.addEventListener('click', showhide, {
        
    });

});