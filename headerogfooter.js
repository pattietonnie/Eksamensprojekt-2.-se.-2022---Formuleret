// kode inspireret fra: https://www.w3schools.com/howto/howto_js_curtain_menu.asp

/* Åbner menu ved click */
function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  /* Lukker menu ved click på krydset */
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }

  // kode inspireret fra: https://www.w3schools.com/howto/howto_js_collapsible.asp
  var coll = document.getElementsByClassName("menupunkter");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}