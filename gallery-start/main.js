var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i=1; i <= 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', './images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', setMainImg);
}

function setMainImg(event) {
    let imageUrl = event.target.getAttribute('src');
    displayedImage.setAttribute('src', imageUrl);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeTheme);
function changeTheme(event) {
  let currentTheme = event.target.getAttribute('class');
  if (currentTheme.length !== 0) {
    if (currentTheme === 'dark') {
      event.target.setAttribute('class', 'light');
      event.target.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
      event.target.setAttribute('class', 'dark');
      event.target.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }
}
