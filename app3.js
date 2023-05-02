const memeForm = document.getElementById('meme-form');
const memeContainer = document.getElementById('meme-container');

memeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const imageLink = document.getElementById('image-link').value;
  const topText = document.getElementById('top-text').value;
  const bottomText = document.getElementById('bottom-text').value;


  
  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');
  memeDiv.innerHTML = `
    <img src="${imageLink}">
    <p class="top-text">${topText}</p>
    <p class="bottom-text">${bottomText}</p>
    <button class="remove-button">Remove</button>
  `;
  memeContainer.appendChild(memeDiv);

  memeForm.reset();
});

memeContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-button')) {
    event.target.parentNode.remove();
  }
});