function creatGame(player1, hour, player2) {
    return `
    
    <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>

    </li>
    
    `
}

let delay = 0;
function creatCard(date, day, games) {
    delay = delay + 0.3;
    return `
    
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}  <span>${day}</span></h2>

    <ul>

    ${games}
       
    </ul>

</div>
    
    
    `
}


document.querySelector('#cards').innerHTML = 

                    creatCard('24/11','quinta', 
                      creatGame("brazil", "16:00","serbia") + creatGame("portugal", "15:00","uruguay")) +
                    
                    creatCard('28/11',
                    'segunda', 
                    creatGame("brazil", "13:00","switzerland") + creatGame("argentina", "14:00", "japan"))+

                    creatCard('02/12', 'sexta', 
                    creatGame("cameroon", "16:00","brazil")) 
                    
                 



