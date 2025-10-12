// ================= Language Translations =================
const translations = { /* keep your existing translations here */ };

// Language change logic
function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}
const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', (e) => changeLanguage(e.target.value));
document.addEventListener('DOMContentLoaded', () => changeLanguage('en'));

// ================= Side Navigation =================
const menuButton = document.getElementById('menu-button');
const sideNav = document.getElementById('side-nav');
const closeButton = document.getElementById('close-button');
const backdrop = document.getElementById('backdrop');

menuButton.addEventListener('click', () => { 
  sideNav.classList.remove('-translate-x-full'); 
  backdrop.classList.remove('hidden'); 
});
closeButton.addEventListener('click', () => { 
  sideNav.classList.add('-translate-x-full'); 
  backdrop.classList.add('hidden'); 
});
backdrop.addEventListener('click', () => { 
  sideNav.classList.add('-translate-x-full'); 
  backdrop.classList.add('hidden'); 
});

// ================= Scroll Reveal =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

// ================= Yellow Balls Animation =================
document.addEventListener('DOMContentLoaded', function () {
  const BALL_COUNT = 12;
  const ballsDiv = document.createElement('div');
  ballsDiv.className = 'balls-bg';
  document.body.prepend(ballsDiv);

  const balls = [];
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  for (let i = 0; i < BALL_COUNT; i++) {
    const ball = document.createElement('div');
    ball.className = 'yellow-ball';
    ball.style.width = `${30 + Math.random() * 50}px`;
    ball.style.height = ball.style.width;
    ball.style.left = `${Math.random() * (vw - 80)}px`;
    ball.style.top = `${Math.random() * (vh - 80)}px`;
    ballsDiv.appendChild(ball);

    balls.push({
      el: ball,
      x: parseFloat(ball.style.left),
      y: parseFloat(ball.style.top),
      r: parseFloat(ball.style.width) / 2,
      vx: (Math.random() - 0.5) * 2.2,
      vy: (Math.random() - 0.5) * 2.2,
    });
  }

  function animate() {
    for (let i = 0; i < BALL_COUNT; i++) {
      let b = balls[i];
      b.x += b.vx;
      b.y += b.vy;

      if (b.x < 0 || b.x > vw - b.r * 2) b.vx *= -1;
      if (b.y < 0 || b.y > vh - b.r * 2) b.vy *= -1;

      b.el.style.left = b.x + 'px';
      b.el.style.top = b.y + 'px';
    }
    requestAnimationFrame(animate);
  }
  animate();
});

// ================= Play Audio =================
document.getElementById('play-audio')?.addEventListener('click', function() {
  const audio = document.getElementById('gayatri-audio');
  audio.play();
});

// Split the text into spans for each letter
document.addEventListener('DOMContentLoaded', function () {
  const title = document.getElementById('jump-title');
  const text = title.textContent.trim();
  title.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    // Preserve spaces
    if (ch === ' ') {
      title.appendChild(document.createTextNode(' '));
    } else {
      const span = document.createElement('span');
      span.textContent = ch;
      span.className = 'inline-block transition-transform duration-200 hover:-translate-y-2 hover:scale-125';
      title.appendChild(span);
    }
  }
});
