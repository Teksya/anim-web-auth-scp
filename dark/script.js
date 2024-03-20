const textLines = [
  'Authentification en cours...',
  'Authentification par "Dept Scientifique"',
  'Accréditation requise : 0',
  'Bienvenue sur le Site 27'
];

let lineIndex = 0;
let letterIndex = 0;
const textDelay = 50; 

function animateText() {
  if (lineIndex < textLines.length) {
    if (letterIndex < textLines[lineIndex].length) {
      const currentLine = document.getElementById(`line${lineIndex + 1}`);
      currentLine.textContent += textLines[lineIndex][letterIndex];
      letterIndex++;
      setTimeout(animateText, textDelay);
    } else {
      lineIndex++;
      letterIndex = 0;
      setTimeout(animateText, textDelay * 5); // Délai entre les lignes
    }
  } else {
    const logo = document.querySelector('.logo');
    logo.style.display = 'block';

    const scpLogo = document.getElementById('scp-logo');
    scpLogo.style.animation = 'rotation 3s'; 
  }
}

window.onload = animateText;