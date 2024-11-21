// --- *1 Reduire la navbar à la descente et taille intiale en haut de page ---
const navBar = document.getElementById("navbar");
// --- *2 Faire apparaitre l'image de la partie improvise
const imgImprovise = document.getElementById("imgImprovise");
// --- *3 Faire apparaitre la popup quand on est en bas du site
const popUp = document.getElementById("popup");
// *Bonus : quand on clicke sur la popup elle disparait pour toujours
const closePopUp = document.getElementById("closeBtn");
// pour activer le retour impossible du popup au click
let isItPlay = true;

// --- Event scroll ---
window.addEventListener("scroll", () => {
  // *1
  if (window.scrollY > 90) {
    navBar.style.height = "40px";
  } else {
    navBar.style.height = "90px";
  }
  // on recupere la hauteur de la page en %(voir ci-dessous du code **)
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // *2
  if (scrollValue > 0.39) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0)";
  } else {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.transform = "translateX(-200px)";
  }
  // *3
  if (scrollValue > 0.81 && isItPlay) {
    popUp.style.opacity = "1";
    popUp.style.transform = "translateX(0)";
    isItPlay = false;
  }
  // *Bonus
  closePopUp.addEventListener("click", () => {
    popUp.style.transition = "0.7s";
    popUp.style.transform = "translateX(500px)";
    popUp.style.opacity = "0";
  });
});

// ** : Problème
// Animation 2 et 3 apparaissent dans la page.
// Donc le probleme est de constament connaitre la hauteur de page,
// car quand l'ecran change de resolution de page les valeurs de hauteur changent aussi.
// Donc en responsiv impossible d'avoir un fonctionnement correct en valeur dur "px",
// par ex:
// -ma page en destock a une hauteur de 1500px
// -en tablette la hauteur et de 1900px
// -en mobile la hauteur est de 2300px
// *** Solution ***
// Obtenir la hauteur de la page en %.
// On doit faire calculer le % de la hauteur de la page,
// haut de page = 0% et bas de page = 100%.
// On recupère la valeur de : window.scrollY + la valeur : window.innerHeight
// qu'on divise par : document.body.offsetHeigth
// console.log((window.scrollY + window.innerHeight) / document.body.offsetHeight);
