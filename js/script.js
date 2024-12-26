import { getGames, addGame, deleteGame } from '/js/Modules/Favorite.Module.js';

document.addEventListener('DOMContentLoaded', () => {

    fetch('js/Data/games.json')
    .then(Response => Response.json())
    .then(games => {

        let containeer = document.querySelector('.containeer');

        games.forEach(game => {
                let div = document.createElement('div');
                div.className = 'gameCard';

                div.innerHTML = `

                <img src="${game.gameImage}" alt="">
                    <h2>${game.gameName}</h2>
                    <p> ${game.description}</p>
                    <input class = "btn" type="button" value="Add To Favorate">
                
                `;

                let btn = div.querySelector('.btn');
                btn.addEventListener('click', () => {
                    
                    addGame(game);
                    alert('game Add Successfully');
                })

                containeer.appendChild(div);
        });

    })

    .catch(error => console.error('Error:', error))





});