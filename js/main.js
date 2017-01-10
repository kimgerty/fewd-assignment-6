//Handler to delay code from executing until DOM is loaded
$(document).ready(start);

// add value to drop down menu using array
var city = ["SF", "LA", "ATX", "SYD"];

$(city).each(function(index) {
  $("select").append("<option value= '"+ this +"'>" + this + "</option>");
});
// capture value of user input
function start() {
  $("#city-type").change(changeImage);
};
//get the value of the user input
function changeImage(event){
  event.preventDefault();
  var city = $("#city-type").val();
    displayCity(city);
};
//conditions to control flow of application
function displayCity(city) {
  if (city === "NYC") {
    $("body").attr("class", "nyc");
  }
  else if (city === "SF") {
    $("body").attr("class", "sf");
  }
  else if (city === "LA") {
    $("body").attr("class", "la");
  }
  else if (city === "ATX") {
    $("body").attr("class", "austin");
  }
  else if (city === "SYD") {
    $("body").attr("class", "sydney");
  }
}
