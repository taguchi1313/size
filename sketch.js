//window.onresize = function(){
//  location.reload();
//};

setTimeout(function () {
    location.reload();
}, 2000);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  text("width: " + windowWidth,10,20);
  text("height: " + windowHeight,10,40);
}
