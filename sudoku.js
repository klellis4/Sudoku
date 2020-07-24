var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    var timer = setInterval( function(){
        $("#seconds").html(pad(++sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
    }, 1000);

$("#stopTime").on("click", function() {
	clearInterval(timer);
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}