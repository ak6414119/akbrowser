//var inpt = document.getElementById('inpt').value;

// var search_form = document.getElementById('search_form');




function search() {
var srch = document.getElementById('srch');
var frame = document.getElementById('frame1');
var inpt = document.getElementById('inpt').value;
  //alert("hello");

  //  link = 'https://www.google.com/search?igu=1';
  // link = 'https://www.duckduckgo.com/' + inpt;
  // link = 'https://www.yahoo.com/' + inpt;


  inpt = inpt.toLowerCase();

  link = 'https://www.bing.com/search?q=' + inpt;


  if (inpt == "") {
    frame.src = "test.html";
  } else {
    frame.src = link;
  }









}


// search_form.addEventListener('submit', search());
// search_form.addEventListener('key', search());




var enter = document.getElementById("inpt");
enter.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("srch").click();
  }
});


// Test file



function facebook(){
  open("https://www.facebook.com" , "_blank");
}


function instagram(){
  open("https://www.instagram.com" , "_blank");
}


function twitter(){
  open("https://www.twitter.com" , "_blank");
}


function google(){
  open("https://www.google.com/search?igu=1" , "frame1");
}


function github(){
  open("https://www.github.com" , "_blank");
}


function youtube(){
  open("http://www.youtube.com/" , "_blank");
}


