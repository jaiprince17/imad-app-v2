console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML ='cool tool you gotta be a fool';

// move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = MarginLeft + 'px' ;
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    
};
    