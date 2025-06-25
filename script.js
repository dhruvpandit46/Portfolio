// Typewriter effect
const words = ["Hi, I'm Dhruv Panditt", "Frontend Web Developerr", "Creative Coderr"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const speed = 100;

function type() {
  currentWord = words[i];
  let text = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);

  document.querySelector(".typewriter").textContent = text;

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, speed);
  }
}
type();

// Scroll fade-in animation
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => observer.observe(card));
