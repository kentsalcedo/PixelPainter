var selectedColor = '';

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


var targetSideMenu = document.getElementById('sideMenu');

//creates actual color pallett

var palBox = document.createElement('div');
  palBox.className = 'palBox';

var palBoxie = function() {
  targetSideMenu.appendChild(palBox);
};

console.log(targetSideMenu);

var j = 0;

while ( j < 56 ){
  colorPal();
  console.log('heeloo');
  j++;
}


colorPal();

  // color array

  //create side menu title bar

  //creates function to create each box in pal

  //creates color palette grid
            // var colorPal = function(){
            //   var palBox = document.createElement('div');
            //   palBox.className = 'palBox';

            //   side.appendChild(palBox);

            //   console.log(palBox);
            // };

            // var i = 0;

            // while (i < 56) {
            //   colorPal();
            //   i++;
            // }

//   var colorPal = function(){
//     var palBox = document.createElement('div');
//     palBox.className = 'palBox';
//     var i = 0;
//     while (i < 56) {
//       // targetSideMenu.appendChild(palBox);
//       i++;
//       console.log(targetSideMenu);
//     }
//   };

//   colorPal();




//   //creates erase button inside of side menu, erases one button you click on
//   var eraseButton = function(){

//   };

//   //creates clear button inside of side menu, clears all
//   var clearButton = function(){

//   };
// // end of side menu
// };


var addPixel = function() {
  var mainDisplay = document.getElementById('main');

  var pixel = document.createElement('div');
    pixel.className = 'inPixel';

    mainDisplay.appendChild(pixel);

};

var i = 0;

while (i < 500) {
  addPixel();
  i++;
}

// var selectedPixel = document.getElementsByClassName('inPixel')[i];

// selectedPixel.addEventListener('click', function (event){
//   var thisPixel = this.querySelector(".inPixel");
//   console.log('hello');
// });
