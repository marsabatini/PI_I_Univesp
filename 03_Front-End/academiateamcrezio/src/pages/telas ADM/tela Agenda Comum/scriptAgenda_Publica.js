const alter_aula = document.getElementById("alter_aula");

function handlePopup(open){
    if (open)
        alter_aula.classList.add('opened');
    else 
        alter_aula.classList.remove('opened');

    }