
//jQuery
$("#button1").click(function() {
     $('article').css({'color':'red'});
   });  
//JS
const parrafo = document.querySelector("article");
const boton2 = document.getElementById("button2");
boton2.onclick = function () {
  parrafo.style.color= "blue";
  
};
  



