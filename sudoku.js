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

// Get grid in an array
$("#array").on('click', function() {
  event.preventDefault();
  var array = [];
  $("#grid").find("tr").each(function() {
    var arr = [];
    $(this).find("input").each(function() {
      arr.push($(this).val());
    });
    array.push(arr);
  });
  console.log(array);

  // Check if board has empty slot
  if (array.some(row => row.includes(''))) {
    console.log("Board not full");
  } else {
    console.log("Board is full.");
  }

  // Check if there are errors in current board
  var errorsExist = isValidSudoku(array);
  console.log(errorsExist);

  // Check if the puzzle was solved successfully
  if (errorsExist == true && !(array.some(row => row.includes('')))) {
    console.log("Game was solved!");
  }


});


// Checks if board is solved
var isValidSudoku = function(board) {
    
    let valid = true;
    
    const validate = digits => {
      // Sort each array
        digits = digits.filter(v => v !== '').map(n => Number(n)).sort((a, b) => a - b);
        
        // If duplicates, answer is wrong
        for(let k = 0; k < digits.length -1; k++) {
            if(digits[k] === digits[k+1]) {
                valid = false;
            }
        }
    }
    
    // validate rows
    for(let r = 0; r < board.length; r++) {
        let digits = board[r]
        
        validate(digits);
    }
    
    // validate cols
    for(let c = 0; c < board[0].length; c++) {
        let digits = [];
        
        for(let k = 0; k < board.length; k++) {
            digits.push(board[k][c]);
        }
        
        validate(digits);
    }
    
    // validate 3x3
    for(let r = 0; r < board.length; r+=3) {
        for(let c = 0; c < board[0].length; c+=3) {
            let digits = [];
            for(let k = 0; k < 3; k++) {
                for(let n = 0; n < 3; n++) {
                    digits.push(board[r+k][c+n]);
                }
            }
            
            validate(digits);
        }
    }
    
    return valid;
};