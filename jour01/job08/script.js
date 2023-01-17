function sommenombrespremiers(int1, int2){
    function égalpremier(int){
        if (int < 2) {
            return false;
        }
        for(let i = 2; i <= Math.sqrt(int); i++ ) {
            if (int % i === 0){
                return false;
            }
        }
        return true;
    }

    if (estpremier(int1) && estpremier(int2)) {
        return int1 + int2;
    }
    else {
        return false;
    }
}
sommenombrespremiers(int1, int2);