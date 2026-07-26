// --- 1. Typing Effect Logic ---
//const words = ["B.Tech CS Student", "Web Developer", "DSA Enthusiast"];
const words = ["Full Stack Developer", "B.Tech CS Student", "DSA Enthusiast"];
let i = 0;
let timer;
let isDeleting = false;
let currentWord = "";
let currentCharIndex = 0;

const typingElement = document.querySelector(".typing-text");

function type() {
    currentWord = words[i];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    // Adjust typing speed
    let typingSpeed = isDeleting ? 50 : 100;

    // Logic for pausing at end of word or moving to next word
    if (!isDeleting && currentCharIndex === currentWord.length) {
        typingSpeed = 2000; // Pause at the end of the word
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        i++;
        if (i === words.length) {
            i = 0; // Loop back to the first word
        }
        typingSpeed = 500; // Pause before typing the next word
    }

    setTimeout(type, typingSpeed);
}
// Start typing effect on load
document.addEventListener("DOMContentLoaded", () => {
    if(typingElement) {
        setTimeout(type, 1000); 
    }
});


// --- 2. Scroll Reveal Animations (Intersection Observer) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove the class if you want the animation to happen every time you scroll up/down
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));