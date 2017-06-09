var slideIndex = 1;
var SecuslideIndex = 1;
var FoodslideIndex = 1;
var TravslideIndex = 1;

showDivs(slideIndex);
showSecurity(slideIndex);
showFood(slideIndex);
showTravel(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
};

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide_img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}


function plusSecurity(n) {
showSecurity(SecuslideIndex += n);
};

  function showSecurity(n) {
  var i;
  var x = document.getElementsByClassName("security_img");
  if (n > x.length) {SecuslideIndex = 1}
  if (n < 1) {SecuslideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
}
x[SecuslideIndex-1].style.display = "block";
};

function plusFood(n) {
  showFood(FoodslideIndex += n);
};

function showFood(n) {
  var i;
  var x = document.getElementsByClassName("food_img");
  if (n > x.length) {FoodslideIndex = 1}
  if (n < 1) {FoodslideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[FoodslideIndex-1].style.display = "block";
};

function plusTravel(n) {
  showTravel(TravslideIndex += n);
};

function showTravel(n) {
  var i;
  var x = document.getElementsByClassName("travel_img");
  if (n > x.length) {TravslideIndex = 1}
  if (n < 1) {TravslideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[TravslideIndex-1].style.display = "block";
};
