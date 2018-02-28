let currentColor;
const colors = ['red', 'blue', 'green', 'yellow', 'black', 'purple', 'dark-teal', 'dark-purple', 'green-yellow', 'orange', 'white', 'grey']

var paints = document.querySelectorAll('.paint');
for (var color of paints) {
  color.addEventListener("click", function(e) {
    currentColor = e.target.id
    colors.forEach(ele => {
    currentColorIcon.classList.remove(ele)
  })
  currentColorIcon.classList.add(currentColor)
  });
}

var container = document.querySelector('.pixel-container');
var currentColorIcon = document.querySelector('#current');

for (var i = 0; i < 15038; i++){
  var pixel = document.createElement('div')
    container.appendChild(pixel)
    pixel.classList.add('pixel')
}

var check = false
var container = document.querySelector('.pixel-container');
  container.addEventListener("mousedown", function(){
    check = true;
    paint(event)
  });
  container.addEventListener("mouseup", function(){
    check = false
  });
  container.addEventListener("mouseover", function(){
    if (check === true) {
      paint(event)
  }
});

function paint(d) {
  if (d.target.classList.contains('pixel'))  {
    colors.forEach(ele => {
      d.target.classList.remove(ele)
    })
    d.target.classList.add(currentColor)
  }
}
function empty(element){
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
var clearAll = document.querySelector('.delete');
clearAll.addEventListener("click", function() {
  empty(container)
  for (var i = 0; i < 15038; i++){
    var pixel = document.createElement('div')
      container.appendChild(pixel)
      pixel.classList.add('pixel')
    }
  });



//   var paintedPixels = document.querySelectorAll('pixel')
//   for (var g of paintedPixels) {
//   // g.className = 'pixel'
// })
