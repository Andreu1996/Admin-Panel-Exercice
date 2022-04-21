let hamburger = document.querySelector(".ham");  
let menuadmin = document.querySelector(".menuadmin"); 

hamburger.addEventListener('click', () => {  
    hamburger.classList.toggle("change");  
    menuadmin.classList.toggle("menuhide"); 
});


let edit = document.querySelectorAll('.useredit');
let table = document.querySelector('.sidetablehide');
let maintable = document.querySelector('.tablefill');

edit.forEach(useredit => {
    useredit.addEventListener("click", () => {
        table.classList.toggle("sidetablehide");
        maintable.classList.toggle("maintable");
    });
});



