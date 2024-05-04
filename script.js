const helloText = document.getElementById('helloText');
const textArray = [
    '"Bart Kam"',
];

let index = 0;
let subIndex = 0;
let isDeleting = false;

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if (revealtop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}

function animateText() {
    const currentText = textArray[index];
    
    if (!isDeleting && subIndex <= currentText.length) {
    helloText.textContent = currentText.substring(0, subIndex);
    subIndex++;
    setTimeout(animateText, 100); // Writing delay
    } else if (isDeleting && subIndex >= 0) {
    helloText.textContent = currentText.substring(0, subIndex);
    subIndex--;
    setTimeout(animateText, 100); // Deletion delay
    } else if (!isDeleting && subIndex > currentText.length) {
    isDeleting = true;
    setTimeout(animateText, 1200); // Starting next anim. delay
    } else {
    isDeleting = false;
    index = (index + 1) % textArray.length;
    subIndex = 0;
    setTimeout(animateText, 175); // Start next text delay
    }
}
 animateText();