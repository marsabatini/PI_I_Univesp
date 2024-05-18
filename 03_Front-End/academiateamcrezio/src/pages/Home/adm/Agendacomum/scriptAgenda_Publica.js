const dia              = document.querySelector(".dia_semana"),
      prevNextWeek     = document.querySelectorAll(".Titulo_Semana span"),
      calend_aula      = document.querySelector(".aula"),
      hora             = document.querySelector(".horario ul"),
      popup            = document.querySelectorAll(".alter_aula"),
      add_aluno        = document.querySelectorAll(".alter_participantes button");


const alter_aula       = document.getElementById("alter_aula"),
      cab_data_aula    = document.getElementsByClassName("Titulo_Semana"),
      menu_agenda      = document.getElementsByClassName("Agendamento"),
      data_aula        = document.getElementById("nome_aula");
 
const dia_semana = ["Domingo","Segunda","Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      horarios   = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];





//adicionar dia da semana e horário como argumentos
function handlePopup(open, obj){

    if (open){
        var id = obj.id;
        alter_aula.classList.add('opened');
        const word = id.split(' ');
        data_aula.innerHTML = document.getElementById(word[0]).innerHTML + "  -  " + word[2];
    }

    else 
        alter_aula.classList.remove('opened');

}


const menu_aula = () => {

    let semana     = "",
    qtd_data_aula = 0,
    qtd_horarios  = 0,
    qtd_participantes = 0,
    aulas         = "",
    horario       = "",
    menu_alter_aula = "";

    
    let startday  = currDay - currDayweek + 1,
    lastDateofMonth     = new Date(currYear, currMonth + 1, 0).getDate();

    //Iteração dos dias da semana para o caledario de aula

    for (let i = 0; i <= startday + 5; i++) {

        if (i >= startday && i <= startday + 5 && i <= lastDateofMonth)

        {
            semana += `<li id="${dia_semana[(i+2) % 7]}">${dia_semana[(i+2) % 7]}  -  ${(i).toString().padStart(2,'0')}/${(currMonth+1).toString().padStart(2,'0')}</li>`;
            qtd_data_aula+=1;

        }

        switch (qtd_data_aula) {
            case 1:
                menu_agenda[0].style.width = '200px';
                break;
            case 2:
                menu_agenda[0].style.width = '420px';
                break;
            case 3:
                menu_agenda[0].style.width = '650px';
                break;
            case 4:
                menu_agenda[0].style.width = '840px';
                break;
            case 5:
                menu_agenda[0].style.width = '1020px';
                break;
            default:
                menu_agenda[0].style.width = '1200px';
                break;
        }

    }


    //Iteração dos horários 'linhas'
    for (let i = 6; i <= 21; i++) {

        horario += `<li id="${i}:00">${i}:00</li>`;
        qtd_horarios +=1;
        
    }

    //Iteração das aulas matriz linhas x colunas e popup para cada 'aula'
    for (let i = 0; i < qtd_horarios; i++) {

        for (let j = 0; j <= qtd_data_aula; j++) {

            if (dia_semana[j] != "Domingo") {

                aulas += `<li onclick="handlePopup(true, this)" id="${dia_semana[j]} - ${horarios[i]}">${"Vazio"}<br>${ 8 - qtd_participantes } VAGAS</li>`; 
                menu_alter_aula += `<div></div>`;
            }

        }

    }   


    popup.innerHTML = menu_alter_aula;
    hora.innerHTML = horario;
    calend_aula.innerHTML = aulas;
    dia.innerHTML = semana;
}

menu_aula();




prevNextWeek.forEach(icon => {
    icon.addEventListener("click", () =>{ // adicionando um evento ao clicar nos dois icones
        // se o icone clicado for anterior(previous) decrementará os dias em 7, caso for posterior(next) incrementara em 7
        currDay = icon.id === "prevWeek" ? currDay - 7: currDay + 7;
        menu_aula();
    })
})

