// var pixelPaint = (function(){

var selectedColor = 'black';

var counter = 0;

// creates side menu

var addSideMenu = function(){
  var mainDisplay = document.getElementById('main');

  var side = document.createElement('div');
    side.id = 'sideMenu';
  //var targetSideMenu = document.getElementById('sideMenu');
    // appends div to main display
    mainDisplay.appendChild(side);
//end of side menu add function
};
//invoke side menu
addSideMenu();

var colorArray = ['black', 'white', 'red', 'silver', 'gray', 'maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuchsia', 'purple', 'pink', 'hotpink', 'deeppink', 'lightsalmon', 'salmon', 'crimson', 'orangered', 'coral', 'darkorange', 'orange', 'darkolivegreen', 'mediumspringgreen', 'lightgreen', 'darkseagreen', 'forestgreen', 'lavender', 'violet', 'mediumpurple', 'darkslateblue', 'khaki', 'darkkhaki', 'lightsteelblue', 'powderblue', 'dodgerblue', 'midnightblue', 'brown'];

var targetSideMenu = document.getElementById('sideMenu');

for (var i = 0; i < colorArray.length; i++) {

  var pal = document.createElement('div');
  pal.className = 'palBox';
  pal.id = i;
  pal.style.background = colorArray[i];

  targetSideMenu.appendChild(pal);

  pal.addEventListener('click', function(){
    // console.log(colorArray[this.id]);
    // console.log(selectedColor);

    console.log('hello');
    currentColorSelectedSwatch.style.background = colorArray[this.id];
    return selectedColor = colorArray[this.id];
  });
}

var targetMainMenu = document.getElementById('main');

var currentColorSelectedSwatch = document.createElement('div');
currentColorSelectedSwatch.innerHTML = 'CURRENT COLOR';
currentColorSelectedSwatch.className = 'currentColorSelectedSwatch';
targetSideMenu.appendChild(currentColorSelectedSwatch);


for (var i = 0; i < 1316; i++) {
  var pix = document.createElement('div');
    pix.id = 'pix'+i;
  targetMainMenu.appendChild(pix);
    pix.className = 'inPixel';
    pix.addEventListener('click', function(){
      this.style.background = selectedColor;
    });
}


var defaultCanvas = function(){

  var blackDefault = [0,1,2,3,43,44,45,46,47,140,141,187,93,94,1128,1174,1175,1221,1222,1268,1269,1270,1271,1272,1312,1313,1314,1315];

  for (var i = 0; i < blackDefault.length; i++) {
    var getDefault1 = document.getElementById('pix'+blackDefault[i]);
    getDefault1.style.background = 'black';
  }

  var silverDefault = [49,91,95,139,1176,1220,1224,1266];

  for (var j = 0; j < silverDefault.length; j++) {
    var getDefault2 = document.getElementById('pix'+silverDefault[j]);
    getDefault2.style.background = 'silver';
  }

  var grayDefault = [48,92,1223,1267];

  for (var k = 0; k < grayDefault.length; k++) {
    var getDefault3 = document.getElementById('pix'+grayDefault[k]);
    getDefault3.style.background = 'gray';
  }

  // console.log('hellooooo');

};

defaultCanvas();

var clearButton = document.createElement('button');
clearButton.innerHTML = 'CLEAR';
clearButton.id = 'clearButton';

targetSideMenu.appendChild(clearButton);

// clearButton.addEventListener('click', function(){
//   console.log('hellooooo');
//   var selectAllPixels = document.querySelectorAll("div.inPixel");
//     for (var m = 0; m < 2000; m++) {
//     selectAllPixels[i].style.background = 'white';
//   };
// });

clearButton.addEventListener('click', function(){
  var selectAllPixels = document.querySelectorAll("div.inPixel");
  for (var m = 0; m < 2000; m++) {
    selectAllPixels[m].style.background = 'white';
  }
  defaultCanvas();
});


// create erase button

var eraseButton = document.createElement('button');
eraseButton.innerHTML = 'ERASER';
eraseButton.id = 'eraserButton';

targetSideMenu.appendChild(eraseButton);

// clearButton.addEventListener('click', function(){
//   console.log('hellooooo');
//   var selectAllPixels = document.querySelectorAll("div.inPixel");
//     for (var m = 0; m < 2000; m++) {
//     selectAllPixels[i].style.background = 'white';
//   };
// });

eraseButton.addEventListener('click', function(){
  selectedColor = 'white';
});




// })();

