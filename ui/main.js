console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML ='cool tool you gotta be a fool';

// move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = Marginleft + 'px' ;
    
}

img.onclick = function () {
    var interval = setInterval(moveright, 100);
    
};
    