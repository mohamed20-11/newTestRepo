var bands;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://github.com/Danilovesovic/bands/blob/master/bands.json");
xhr.onload = function() {
  if (xhr.status == 200) {
    bands = JSON.parse(xhr.responseText);
    var bandSelect = document.getElementById("band-select");
    for (var i = 0; i < bands.length; i++) {
      var option = document.createElement("option");
      option.value = bands[i].name;
      option.textContent = bands[i].name;
      bandSelect.appendChild(option);
    }
  }
};
xhr.send();

document.getElementById("band-select").addEventListener("change", function() {
  var selectedBand = this.value;

  var band = bands.find(function(b) {
    return b.name == selectedBand;
  });
  // Clear previous options from artist-select
  var artistSelect = document.getElementById("artist-select");
  artistSelect.innerHTML = "";
  for (var i = 0; i < band.thumbnails.length; i++) {
    var option = document.createElement("option");
    option.value = band.thumbnails[i];
    option.textContent = "Artist " + (i + 1);
    artistSelect.appendChild(option);
  }
});

document.getElementById("artist-select").addEventListener("change", function() {
  var selectedArtist = this.value;
  window.open(selectedArtist);
});