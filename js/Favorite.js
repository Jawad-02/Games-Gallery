import { getGames, addGame, deleteGame } from '/js/Modules/Favorite.Module.js';



function displayGames(){

    let listGames = getGames();

    if(listGames.length !== 0){

        let containeer = document.querySelector('.containeer');
        containeer.innerHTML = '';

        listGames.forEach(game => {

            let div = document.createElement('div');
            div.className = 'gameCard';

            div.innerHTML = `

                <img src="${game.gameImage}" alt="">
                <h2>${game.gameName}</h2>
                <p>${game.description}</p>
                <input class = "remove-btn" type="button" value="remove form Favorate">
            
            `;

            let btn = div.querySelector('.remove-btn');
            btn.addEventListener('click', () => {

                deleteGame(game.id);
                displayGames();
            })

            containeer.appendChild(div);

        });

        }else{
            alert('the favorite is empty');
            window.location.href = 'index.html';
        }
    }
    


document.addEventListener('DOMContentLoaded', () => {
    displayGames();
})