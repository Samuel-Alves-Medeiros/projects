const btn = document.getElementById('btn');
const colorName = document.getElementById('color-name');
btn.addEventListener('click', swapCollor);

const simpleColors = ['red', 'green', 'blue', 'purple', 'pink', '#f1f5f8', 'aqua', 'black',
     'white', 'silver', 'gray', 'maroon', 'fuchsia', 'lime', 'oliver', 'yellow', 'navy', 'teal' ];

function swapCollor() {
    // --> Get a random number between 0 and 17
    const randomColor = Math.floor(Math.random() * simpleColors.length);

    // --> change background color and button color
    const divColor = document.querySelector('div.container');
    divColor.style.backgroundColor = simpleColors[randomColor];
    btn.style.backgroundColor = simpleColors[randomColor]

    // --> Change color name
    colorName.innerText = simpleColors[randomColor];

}

