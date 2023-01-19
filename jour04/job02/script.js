document.addEventListener("DOMContentLoaded", function() {   
    
    // cible le bouton
    const button = document.querySelector("#button")
    const texte = document.createElement('p');
    document.body.append(texte)
    let select_p = document.querySelector("p");
    
    //
    function expression(){

        //console.log('heu');
        fetch('expression.txt')
            .then( (response) => {
                return response.text();
                console.log(response.text());
            })
            .then((ok) => {
                console.log(select_p);
                select_p.innerHTML = ok;
                console.log(ok);
            })
    };
    
    button.addEventListener('click', expression, {
        
    });

});