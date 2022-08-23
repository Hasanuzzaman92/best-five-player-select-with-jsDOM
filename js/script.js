function getPlayerName(elementId){
    const nameElement = document.getElementById(elementId);
    const name = nameElement.innerText;
    return name;
}



function selectPlayer(elementId){
    const playerSelect = document.getElementById('select-five-list');
    const li =  document.createElement("li");
    const playerName = getPlayerName(elementId);

    li.innerHTML = `
    <ol class="fs-4 list-unstyled">
        <li class="player-list">${playerName}</li>
    </ol>
    `;
    
    playerSelect.appendChild(li);
    

}


/* ---------------------------
 player expence calculation 
 ------------------------------*/

 function getInputValueById(elementId){
    const inputField = document.getElementById(elementId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
 }



document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerValue = getInputValueById('per-player-field');

    const selectedPlayers = document.getElementsByClassName('player-list');
    const totalPlayer = selectedPlayers.length;

    const playerExpencens = perPlayerValue * totalPlayer;

    const playerExpenceElement = document.getElementById('player-exp');
    playerExpenceElement.innerText = playerExpencens;
})


document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const playerExpenceElement = document.getElementById('player-exp');
    const playerExpenceValue = parseFloat(playerExpenceElement.innerText);

    const managerExpence = getInputValueById('manager-cost');
    const coachExpence = getInputValueById('coach-cost');

    const totalCost = playerExpenceValue + managerExpence + coachExpence;

    const totalExpenceElement = document.getElementById('total-exp');
    totalExpenceElement.innerText = totalCost;
})



