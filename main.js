function createGroups(Rodada){
    return `
    <header>
<img src="./assets/logo.svg" alt="Logo da NLW">
<<h1>${Rodada}</h1> 
</header>`
}


function createGames(player1, hour, player2){
    return `   

    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>`
}
let delay = 0.5;
function createCard(date, day, games,group){
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s" >
    <h3>${group}</h3>
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>    
    `
}

document.querySelector("#app").innerHTML = `<header>
<img src="./assets/logo.svg" alt="Logo da NLW">
<<h1>Grupo A</h1>, <<h1>Grupo B</h1>
</header>
<main id="cards">
${createCard("20/11","Domingo",  createGames('Catar', '13:00', 'Ecuador'),'1° Rodada')}
${createCard("21/11", "Segunda",createGames('senegal', '13:00', 'netherlands'), '1° Rodada')}
${createCard("25/11", "Sexta",createGames('Catar', '10:00', 'senegal'), '2° Rodada')}
${createCard("25/11", "Sexta",createGames('netherlands', '13:00', 'Ecuador'), '2° Rodada')}
${createCard("25/11", "Sexta",createGames('netherlands', '12:00', 'Catar'), '3° Rodada')}
${createCard("25/11", "Sexta",createGames('Ecuador', '12:00', 'senegal'), '3° Rodada')}
</main>

`
