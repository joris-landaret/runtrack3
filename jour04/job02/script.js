document.addEventListener("DOMContentLoaded", function() {   
    
    const unjson = {
        "name" : "La Plateforme_",
        "address":"8 rue d'hozier",
        "city" : "Marseille",
        "nb_staff" : "11",
        "creation" : "2019"
    };
    
    //const uncity = JSON.stringify(Object.keys(unjson)[2])

    //const mycity = 'city';
    //
    function jsonValueKey(string, key){

        let value = "";
        value = string[key];
        console.log(value);
        //return value;
        
        const p1 = document.createElement('p');
        p1.textContent = value
        document.body.append(p1)
      
    };
    
  jsonValueKey(unjson, 'city');
  jsonValueKey(unjson, 'address');
});