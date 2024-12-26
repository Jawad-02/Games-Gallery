// gamesModule.js

// Function to get all games from Local Storage
const getGames = () => {
    const games = [];
    // Iterate over Local Storage and collect games
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('game_')) {
            const game = JSON.parse(localStorage.getItem(key));
            games.push(game);
        }
    }
    return games;
};

// Function to add a new game to Local Storage
const addGame = (game) => {
    // Check if the game already exists in Local Storage by its ID
    const existingGame = localStorage.getItem(`game_${game.id}`);
    
    if (!existingGame) {
        // If the game doesn't exist, store it in Local Storage
        localStorage.setItem(`game_${game.id}`, JSON.stringify(game));
        console.log(`Game "${game.gameName}" added successfully.`);
    } else {
        console.error(`Game "${game.gameName}" with ID ${game.id} already exists.`);
    }
};

// Function to delete a game by ID from Local Storage
const deleteGame = (id) => {
    const gameKey = `game_${id}`;
    if (localStorage.getItem(gameKey)) {
        localStorage.removeItem(gameKey);
        console.log(`Game with ID ${id} deleted successfully.`);
    } else {
        console.error(`Game with ID ${id} not found.`);
    }
};

// Export the functions
export { getGames, addGame, deleteGame };
