const dia              = document.querySelector(".dia_semana"),
      prevNextWeek     = document.querySelectorAll(".Titulo_Semana span"),
      calend_aula      = document.querySelector(".aula"),
      hora             = document.querySelector(".horario ul"),
      popup            = document.querySelectorAll(".alter_aula");
      


const alter_aula       = document.getElementById("alter_aula");
    
 
const dia_semana = ["Segunda","Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
      horarios   = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];


// atribuindo dias da semana


function handlePopup(open){
    if (open)
        alter_aula.classList.add('opened');
    else 
        alter_aula.classList.remove('opened');

}

const dia_aula = () => {
    let semana     = "",
    qtd_data_aula = 0,
    qtd_horarios  = 0,
    // precisa de uma função no botão adicionar e então +=1 se precionado, e -= 1 se excluido
    qtd_participantes = 0,
    aulas         = "",
    horario       = "",
    menu_alter_aula = "";

    let lastDateofMonth     = new Date(currYear, currMonth + 1, 0).getDate(); // ultima dia do mês
    

    //Iteração dos dias da semana para o caledario de aula
    for (let i = 1; i <= lastDateofMonth; i++) {
        if (dia_semana[(i+1) % 7] != "Domingo" && i > (currDay - 4) && i < (currDay + 4)) {
            semana += `<li id="${dia_semana[(i+1) % 7]}">${dia_semana[(i+1) % 7]}  -  ${(i).toString().padStart(2,'0')}/${(currMonth+1).toString().padStart(2,'0')}</li>`;
            qtd_data_aula+=1;
        }
    }


    //Iteração dos horários 'linhas'
    for (let i = 6; i <= 21; i++) {
        horario += `<li id="${i}:00">${i}:00</li>`;
        qtd_horarios +=1;
    }

    //Iteração das aulas matriz linhas x colunas e popup para cada 'aula'
    for (let i = 0; i < qtd_horarios; i++) {
        for (let j = 0; j < qtd_data_aula; j++) {
            if (dia_semana[j % 7] != "Domingo") {
                aulas += `<li onclick="handlePopup(true)" id="${dia_semana[j]} - ${horarios[i]}">${"Vazio"}<br>${ 8 - qtd_participantes } VAGAS</li>`; 
                menu_alter_aula += `<div></div>`;
                
            }
        }
    }   

    popup.innerHTML = menu_alter_aula;
    hora.innerHTML = horario;
    calend_aula.innerHTML = aulas;
    dia.innerHTML = semana;
}

dia_aula();

prevNextWeek.forEach(icon => {
    icon.addEventListener("click", () =>{ // adicionando um evento ao clicar nos dois icones
        // se o icone clicado for anterior(previous) decrementará o mês em 1 caso for posterior(next) incrementara em 1
        currDay = icon.id === "prevWeek" ? currDay - 7 : currDay + 7;
        dia_aula();
    })
})

