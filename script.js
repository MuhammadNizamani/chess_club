// script.js

const players = [
    "BABU_69", "hamidullahnizamani", "Zararnizamani", "muhammadnizamani", "salmannizamani7",
    "UmAr212212", "Alinizamani101", "inamullahniz6", "GUMNAM_69", "sarwan920"
];

players.forEach((player) => {
    console.log(player);
    fetch(`https://api.chess.com/pub/player/${player}/stats`)
        .then(response => response.json())
        .then(data => {
            const rapidRating = data.chess_rapid.last.rating;
            const bulletRating = data.chess_bullet.last.rating;
            const blitzRating = data.chess_blitz.last.rating;
            
            console.log(`Rapid Rating for ${player}: ${rapidRating}`);
            console.log(`Bullet Rating for ${player}: ${bulletRating}`);
            console.log(`Blitz Rating for ${player}: ${blitzRating}`);
            
            // You can use these rating values to update your HTML elements as needed
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
