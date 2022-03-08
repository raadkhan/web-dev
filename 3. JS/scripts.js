var clickedTime; var createdTime; var reactionTime;
var react = false;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++)
        color +=letters[Math.round(Math.random()*15)];
    return color;
}

function getSquareOrCirle() {
    var bit = Math.random();
    bit = Math.round(bit);
    if (bit)
        var squarecircle = '100px';
    else
        var squarecircle = '0px';

    return squarecircle;
}

function getRelPositionLeft() {
    var left = Math.random()*1100 + "px";
    return left;
}

function getRelPositionTop() {
    var top = Math.random()*400 + "px";
    return top;
}

function makeShape() {
    var rand = Math.random();
    rand *= 5000;
    react = true;

    setTimeout(function() {
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.borderRadius = getSquareOrCirle();
    document.getElementById("shape").style.top = getRelPositionTop();
    document.getElementById("shape").style.left = getRelPositionLeft();

    createdTime = Date.now();
    }, rand);
}

document.getElementById("shape").onclick = function() {
    clickedTime = Date.now();

    if (react == true) {
        reactionTime = (clickedTime - createdTime)/1000;
        document.getElementById("clickTime").innerHTML = reactionTime;
    }

    this.style.display = "none";
    makeShape();
}

