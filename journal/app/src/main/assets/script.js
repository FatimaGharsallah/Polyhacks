
function save() {	
	var checkbox = document.getElementById("checkbox");
    localStorage.setItem("checkbox", checkbox.checked);	
}

//for loading
var checked = JSON.parse(localStorage.getItem("checkbox"));
    document.getElementById("checkbox").checked = checked;


// Fonction qui permet d'enregistrer les informations entrées à l'étape 2.
function validationEtape2() {    
    toggleText('etape3') 
    coursEte=false;
    stageFait=false;
    nbreCreditParSession=0;
    nbreSession=0;
    nbreSessionsPlanifiees = 0;
    document.getElementById("erreurEtape2").innerHTML = "";
    // Validation de la réponse à la question du stage obligatoire   
    if(document.getElementById('ouiStage').checked) {
      stageFait = true;   
    }   
    else if(document.getElementById('nonStage').checked) {   
      stageFait = false;
    }   
    else {   
      document.getElementById("erreurEtape2").innerHTML = "Il manque au moins une réponse";   
    }
    // Validation de la réponse à la question pour les cours d'été
    if(document.getElementById('ouiEte').checked) {
      coursEte = true;
    }
    else if(document.getElementById('nonEte').checked) {  
      coursEte=false;
    }   
    else {   
      document.getElementById("erreurEtape2").innerHTML = "Il manque au moins une réponse";  
      toggleText('etape3')  
    } 
    nbreCreditParSession = parseInt(document.getElementById("nbreCours").value);
    nbreSession = parseInt(document.getElementById("nbreSession").value);
    nbreSessionsPlanifiees = Math.ceil((120-nbreCreditsReussis)/nbreCreditParSession);   
  }

  