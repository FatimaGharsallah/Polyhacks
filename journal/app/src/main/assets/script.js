
function saveNourriture() {
    list = ["glutendejeuner", "lactosedejeuner", "viandedejeuner", "cafeinedejeuner", "legumineusedejeuner", "glutendiner", "lactosediner", "viandediner", "cafeinediner", "legumineusediner", "glutensouper", "lactosesouper", "viandesouper", "cafeinesouper", "legumineusesouper", "glutencollation", "lactosecollation", "viandecollation", "cafeinecollation", "legumineusecollation"]
    for (i = 0; i < 20; i++) {
        checkbox = document.getElementById(list[i]).checked;
        localStorage.setItem(list[i],checkbox);
    }
		
}

//for loading
function load_(){
    //qpouraucuneraison = localStorage.getItem(checkbox)
    for (i = 0; i < 20; i++) {
        var checked = JSON.parse(localStorage.getItem(list[i]));
        document.getElementById(list[i]).checked = checked;
    }
}


