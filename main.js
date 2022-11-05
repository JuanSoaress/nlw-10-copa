function createGroups(Rodada){
    return `
    <header>
<img src="./assets/logo.svg" alt="Logo da NLW">
</header>`
}


function createGames(player1, hour, player2,){
    return `   

    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>`
}
let delay = 0.5;

function createCard(date, day, games,group,rodada){
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s" >
    <h3>${group}</h3>
    <p>${rodada} </p>
    
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>    
    `
}

document.querySelector("#app").innerHTML = `<header>
<img src="./assets/logo.svg" alt="Logo da NLW">
</header>
<main id="cards">
${createCard("20/11","Domingo",  createGames('Catar', '13:00', 'Ecuador'), ('Grupo A'),('1° Rodada') )}
${createCard("21/11", "Segunda",createGames('senegal', '13:00', 'netherlands'),'Grupo A', '1° Rodada')}
${createCard("25/11", "Sexta",createGames('Catar', '10:00', 'senegal'),'Grupo A', '2° Rodada')}
${createCard("25/11", "Sexta",createGames('netherlands', '13:00', 'Ecuador'),'Grupo A','2° Rodada')}
${createCard("29/11", "Sexta",createGames('netherlands', '12:00', 'Catar'),'Grupo A', '3° Rodada')}
${createCard("29/11", "Sexta",createGames('Ecuador', '12:00', 'senegal'),'Grupo A', '3° Rodada')}

${createCard("21/11","Domingo",  createGames('england', '10:00','iran'), ('Grupo B'),('1° Rodada') )}
${createCard("21/11", "Segunda",createGames('senegal', '13:00', 'netherlands'),'Grupo B', '1° Rodada')}
${createCard("25/11", "Sexta",createGames('Catar', '10:00', 'senegal'),'Grupo B', '2° Rodada')}
${createCard("25/11", "Sexta",createGames('netherlands', '13:00', 'Ecuador'),'Grupo B','2° Rodada')}
${createCard("25/11", "Sexta",createGames('netherlands', '12:00', 'Catar'),'Grupo B', '3° Rodada')}
${createCard("25/11", "Sexta",createGames('Ecuador', '12:00', 'senegal'),'Grupo B', '3° Rodada')}
</main>

`
