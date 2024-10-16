var elm = document.getElementById("imgTag")
var links = ["01.webp","02.webp","03.png","04.png","05.png"]
var count = 0

// function fun(value){
//     if(count>5){
//         count = 0
//     }
//     elm.setAttribute("src", links[count]);
//     if(value === '+'){
//         count++;
//         return;
//     }
//     count--;
// }


function fun(value) {
  // Ensure count is within the correct bounds of the array
  if (count >= links.length) {
      count = 0; // Reset count if it exceeds the array length
  }

  if (count < 0) {
      count = links.length - 1; // Go to the last image if count is less than 0
  }

  // Set the new image source
  elm.setAttribute("src", links[count]);

  // Handle next or previous button clicks
  if (value === '+') {
      count++; // Increment count for next
  } else {
      count--; // Decrement count for previous
  }
}


setInterval(fun, 2000)