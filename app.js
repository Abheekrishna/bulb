const imageDiv = document.getElementById('images');
const button = document.getElementById('button');
const bulb = document.getElementById('bulb');

const on = () => {
    bulb.src = './images/bulb-on.png';
    bulb.classList.add('on');
}

