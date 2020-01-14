

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------HEADER-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------BIO-INTRO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function idade() {
    let hoje = new Date();
    let nascimento = new Date(1985, 08);
    let aniversario = parseInt(Math.floor((hoje.getTime() - nascimento.getTime()) / (1000 * 60 * 60 * 24 * 365)));

    document.getElementById("age").innerHTML = ` ${aniversario} anos `;
}



age.addEventListener("load", idade());

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------AUDIOVISUAL-INTRO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------WEB-INTRO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------------------------------------------------------------- RESPONSIVE ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// function myFunction() {
//   let x = document.getElementById("myNaveg");
//   if (x.className === "naveg") {
//     x.className += " responsive";
//   } else {
//     x.className = "naveg";
//   }
// }