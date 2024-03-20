const container = document.getElementById('container');
const sizeButton = document.getElementById(`sizeGrid`);
const resetButton = document.getElementById(`reset`);
let squares;

// Créer une grille avec un côté donné
function createGrid(side) {
    container.innerHTML = ``;
    for (let i = 0; i < side * side; i++) {
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        container.appendChild(square);
    }
}

// Ajouter l'effet hover à tous les carrés
function addHoverEffect() {
    squares = document.querySelectorAll('.square');
    squares.forEach(function(square) {
        square.addEventListener('mouseenter', function() {
            square.classList.add('squareHover');
        });
    });
}

// Retirer l'effet hover de tous les carrés
function removeHoverEffect() {
    squares.forEach(function(square) {
        square.classList.remove('squareHover');
    });
}

// Créer la grille initiale au chargement de la page
createGrid(16);
addHoverEffect(); // Ajouter l'effet hover initial

// Ajouter un écouteur d'événements au bouton de redimensionnement
sizeButton.addEventListener('click', function() {
    const sideSquareSize = prompt(`Entrez une taille de grille entre 0 et 100`);
    if (sideSquareSize > 0 && sideSquareSize<= 100) {
        createGrid(sideSquareSize);
        addHoverEffect(); // Réappliquer l'effet hover sur la nouvelle grille
    }else {alert(`Entre un nombre en 0 et 100`)}
});

// Ajouter un écouteur d'événements au bouton de réinitialisation
resetButton.addEventListener('click', function() {
    removeHoverEffect(); // Retirer l'effet hover de tous les carrés
});
