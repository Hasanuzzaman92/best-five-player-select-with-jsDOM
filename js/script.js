function selectPlayerName(elementId){
   const playerNameElenent = document.getElementById(elementId);
   const playerName = playerNameElenent.innerText;
   return playerName;
}

function selectVitor(){
    const nameElement = document.getElementById('vitor-machado');
    const name = nameElement.innerText;
    return name
}

function selectPlayer(){
    const playerSelect = document.getElementById('select-five-list');
    const li =  document.createElement("li");
    li.innerHTML = `
    <li>${selectPlayerName(elementId)}</li>
    `;

    playerSelect.appendChild(li);

}