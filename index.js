const container = document.getElementById('container');

for(i = 0; i < 16 * 16; i++){
    const square = document.createElement(`div`)
    square.classList.add(`square`)
    square.id = `square`;
    container.appendChild(square)

}


