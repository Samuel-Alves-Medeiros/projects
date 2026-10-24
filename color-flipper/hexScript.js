const btn = document.getElementById('btn');
const colorName = document.getElementById('color-name');

btn.addEventListener('click', swapCollor);

const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ];

function swapCollor() {

    let newHexColor = '#'

    for (let i = 0; i < 6; i++){
        const randomColor = Math.floor(Math.random() * hexValues.length);
        newHexColor += hexValues[randomColor]
    }

    
    // --> change background color and button color
    const divColor = document.querySelector('div.container');
    divColor.style.backgroundColor = newHexColor;
    btn.style.backgroundColor = newHexColor;

    // --> Change color name
    colorName.innerText = newHexColor;


}
