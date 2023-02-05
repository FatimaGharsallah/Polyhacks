  function cacherAfficher(nomId) {
    var text = document.getElementById(nomId);
    if (text.style.display === "none") {
      text.style.display = "block";
    }
}