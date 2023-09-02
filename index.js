// Your code here

//TODO[x] - grab the dodger element
const dodger = document.getElementById("dodger");
 
//TODO[x] - Add right movement functionality
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//FIXME[x] - Add right movement functionality. 
// The fix was using style.left as the base for movement rather than style.right.
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

//TODO[x] - Adds event lister for left and right movement to the DOM 
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    else if (e.key === "ArrowRight") {
        moveDodgerRight();
      }

  });