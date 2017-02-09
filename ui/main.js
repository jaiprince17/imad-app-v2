console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementbyTd('main-text');

element.innerHTML ='new value';

// move the image
var img = document.getElementbyid('madi');
img.onclick = function () {
    img.style.marginleft = '100px';
    
};
    