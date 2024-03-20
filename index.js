const container = document.getElementById('container');

for(i = 0; i < 16 * 16; i++){
    const square = document.createElement(`div`)
    square.classList.add(`square`)
    square.id = `square`;
    container.appendChild(square)

}

const squares = document.querySelectorAll('.square');

squares.forEach(function(square) {
    square.addEventListener('mouseenter', function() {
        square.classList.add('squareHover');
    });
});

const reset = document.getElementById(`reset`)


reset.addEventListener('click', function(){
    squares.forEach(function(square) {
        square.classList.remove('squareHover');
    });
});