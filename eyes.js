// array of elements that match class name ball and are stored in ball variable
const balls = document.getElementsByClassName('ball');

// any time mouse is moved, run this function
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%'; 
  const y = (event.clientY * 100) / window.innerHeight + '%';
  // this converts the position of the mouse into a percentage relative to the screen size

  // for each ball of the balls array, set the properties to this as you loop through the array
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};


//   for (const ball of balls) {
//     ball.style.left = x;
//     ball.style.top = y;
//     ball.transform = 'translate(-' + x + ',-' + y + ')';
//   }
// };


  // ANOTHER WAY OF DOING IT (Reference by index)
//   balls[0].style.left = x;
//   balls[0].style.top = y;
//   balls[0].transform = 'translate(-' + x + ',-' + y + ')';
//   // first element in balls array so it has these properties

//   balls[1].style.left = x;
//   balls[1].style.top = y;
//   balls[1].transform = 'translate(-' + x + ',-' + y + ')';
// };
