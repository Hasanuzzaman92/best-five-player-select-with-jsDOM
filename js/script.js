function getPlayerName(elementId){
    const nameElement = document.getElementById(elementId);
    const name = nameElement.innerText;
    return name;
}



function selectPlayer(elementId){
    const playerSelect = document.getElementById('select-five-list');
    const li =  document.createElement("li");
    const playerName = getPlayerName(elementId)

    li.innerHTML = `
    <ol class="fs-4 list-unstyled">
        <li class="player-list">${playerName}</li>
    </ol>
    `;
    
    playerSelect.appendChild(li);
}
