const buttons = document.querySelectorAll('.boxes');
const body = document.querySelector('body');

buttons.forEach((box) => {
  
  box.addEventListener('click', (e) => {
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
