// Hämtar checkboxar
const checkboxes = document.querySelectorAll(
    '.checkbox-item input[type="checkbox"]'
);

// Hämtar progressbar och procenttext
const progressbar = document.getElementById('progressbar');
const progressText = document.getElementById('progressText');

// Uppdaterar progressbaren
function updateProgress() {

    // Räknar hur många rutor som är ikryssade
    const checkedBoxes = document.querySelectorAll(
        '.checkbox-item input[type="checkbox"]:checked'
    ).length;

    // Räknar totalt antal rutor
    const totalBoxes = checkboxes.length;

    // Räkna ut procenten
    const progress = (checkedBoxes / totalBoxes) * 100;

    // Uppdaterar progressbar
    progressbar.style.width = progress + '%';

    // Uppdaterar procenttext
    progressText.textContent = Math.round(progress) + '%';
}

// Lyssnar efter ikryssning
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', updateProgress);
});

// Starta med rätt värde
updateProgress();
