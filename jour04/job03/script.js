document.addEventListener("DOMContentLoaded", function() {

    let button = document.querySelector('#button');

    function filtrer() {
        
        fetch('pokemon.json')
        .then((response) => {
            return response.json();
            //console.log(response.json());
        })
        .then((ok) => {
            console.log(ok);
        })
        .catch(error => console.log("Erreur : " + error));
        
    }

    button.addEventListener('click', filtrer);

});