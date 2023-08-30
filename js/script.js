const htmlNode = document.querySelector('html');


document.querySelector('.rem-control-container__button-increase').addEventListener('click', e => {
  htmlNode.style.fontSize = (+window.getComputedStyle(htmlNode)['font-size'].replace(/\D+/, '') + 1).toString() + 'px';
})

document.querySelector('.rem-control-container__button-decrease').addEventListener('click', e => {
  htmlNode.style.fontSize = (+window.getComputedStyle(htmlNode)['font-size'].replace(/\D+/, '') - 1).toString() + 'px';
})