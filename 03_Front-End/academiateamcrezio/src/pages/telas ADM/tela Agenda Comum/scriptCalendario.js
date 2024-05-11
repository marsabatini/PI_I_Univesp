const currentDate = document.querySelector(".current-date"),
daysTag           = document.querySelector(".days"),
prevNextIcons     = document.querySelectorAll(".menu_calendario span");

// atribuindo nova data, ano e mês atual
let date    = new Date(),
currYear    = date.getFullYear(),
currMonth   = date.getMonth();

const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // primeiro dia do mês
    lastDateofMonth     = new Date(currYear, currMonth + 1, 0).getDate(), // ultima data do mês
    LastDayofMonth      = new Date(currYear, currMonth, lastDateofMonth).getDay(), // ultimo dia do ultimo mês
    LastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //  ultima data do ultimo mês
    let liTag           = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${LastDateofLastMonth - i + 1}</li>`;    
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        // atribuindo a classe 'active' na data selecionada
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                      && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = LastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - LastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcons.forEach(icon => {
    icon.addEventListener("click", () =>{ // adicionando um evento ao clicar nos dois icones
        // se o icone clicado for anterior(previous) decrementará o mês em 1 caso for posterior(next) incrementara em 1
        currMonth = icon.id === "prev" ? currMonth -1 : currMonth + 1; // '?' equivalente ao then, caso ocorra o ':' equivalente ao else, caso não ocorra a condição id do icon = "prev"
        renderCalendar();
    })
})

