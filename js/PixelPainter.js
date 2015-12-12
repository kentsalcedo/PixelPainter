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
    return selectedColor = colorArray[this.id];
  });
}

// var palBoxie = function() {
//   var palBox = document.createElement('div');
//     palBox.className = 'palBox';
//     palBox.id = 'swatch'+counter;
//     targetSideMenu.appendChild(palBox);
//     counter++;
// };

// var j = 0;

// while ( j < 56 ){
//   palBoxie();
//   j++;
// }


var targetMainMenu = document.getElementById('main');

for (var i = 0; i < 2000; i++) {
  var pix = document.createElement('div');
    pix.id = 'pix'+1;
  targetMainMenu.appendChild(pix);
    pix.className = 'inPixel';
    pix.addEventListener('click', function(){
      this.style.background = selectedColor;
    });
}


// })();

