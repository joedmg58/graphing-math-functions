const myCanvas = document.getElementById('my-canvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight ;
const ctx = myCanvas.getContext('2d');

const axis = new Axis(-10, -10, 10, 10, myCanvas.width, myCanvas.height);
axis.draw(ctx);