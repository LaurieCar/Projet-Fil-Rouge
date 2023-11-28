// SCRIPT MENU NAVIGATION

// Récupération bouton HTML
const button = document.getElementById('bt');
// Récupération input checkbox du menu
const menuNav = document.querySelector('#menu-cb');

// Ajouter évènement sur le menu burger
menuNav.addEventListener('click', ()=>{
    const menuNav = document.querySelector('#menu-cb');
    const actif = menuNav.checked;

    // test si le menu nav est actif
    if(actif){
        const button = document.getElementById('bt');
        // Ajouter évènement sur le bouton fermer
        button.addEventListener('click', () => {
            menuNav.checked = false; 
        });
    }
});



// Création de la fonction fermer le menu
/* const fermerMenu = () =>{
    // Récupérer le menu
    const menuNav = document.querySelector('#menu-cb');
    menuNav.checked = false;
}

const changerEtatMenu = () =>{
    // Récupérer le menu
    const menuNav = document.querySelector('#menu-cb');
    const actif = menuNav.checked;

    if (actif){
        const button = document.getElementById('bt');
        button.addEventListener('click', fermerMenu);
    }    
}

menuNav.addEventListener('click', changerEtatMenu); */

// SCRIPT CARROUSEL

document.body.onload = function(){
    nbr=3;
    position=0;
    // Récuperation des éléments HTML
    container=document.getElementById("container");
    gauche=document.getElementById("gauche");
    droit=document.getElementById("droit");
    // Modification largeur container*nbr images carrousel
    container.style.width=(1000*nbr)+"px";

    // Boucle intégration des images
    for(let i=1; i<=nbr; i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage = "url('images/carrousel"+i+".svg')";
        // Rajout des div créés au conteneur
        container.appendChild(div);
    }
}
// Programmation des boutons
gauche.onclick=function(){
    if(position>-nbr+1){
        position--;
        container.style.transform="translate("+position*1000+"px)";
        container.style.transition="all 0.5s ease";
        afficherMasquer();
    }
}
droit.onclick=function(){
    if(position<0){
        position++;
        container.style.transform="translate("+position*1000+"px)";
        container.style.transition="all 0.5s ease";
        afficherMasquer();
    }
}
// Fonction afficher ou masquer les boutons
function afficherMasquer(){
    if(position==-nbr+1){
        gauche.style.visibility="hidden";
    }
    else{
        gauche.style.visibility="visible";
    }
    if(position==0){
        droit.style.visibility="hidden";
    }
    else{
        droit.style.visibility="visible";
    }
}