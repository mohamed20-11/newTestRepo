var cells = document.getElementsByTagName("td");


for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    var currentColor = this.style.backgroundColor;
    var colors = ["red", "green", "blue", "yellow", "pink", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (currentColor != randomColor) {
      this.style.backgroundColor = randomColor;
    }

    else {
      this.style.backgroundColor = "white";
    }
    
  });
}