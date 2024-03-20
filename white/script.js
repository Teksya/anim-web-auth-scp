const textLines = [
  'Authentification en cours...',
  'Authentification par Vérification',
  'Bienvenue sur le Site 27'
];

let lineIndex = 0;
let letterIndex = 0;
const textDelay = 100; // Délai entre chaque lettre en millisecondes

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
      setTimeout(animateText, textDelay * 10); // Délai entre les lignes
    }
  } else {
    const logo = document.querySelector('.logo');
    logo.style.display = 'block';
    // Ajoutez ici votre code pour l'animation du logo SCP
    // Par exemple, une rotation pendant quelques secondes
    const scpLogo = document.getElementById('scp-logo');
    scpLogo.style.animation = 'rotation 3s'; // Exemple d'animation rotation pendant 3 secondes
  }
}

// Lancement de l'animation au chargement de la page
window.onload = animateText;
