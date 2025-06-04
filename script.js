// Toggle nav menu on small screens
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Set a rotating motto
  const mottos = [
    "Innovate. Transform. Succeed.",
    "Empowering Digital Evolution.",
    "Where Technology Meets Vision.",
    "Fueling Your Business with IT."
  ];

  let index = 0;
  const mottoEl = document.getElementById("motto");

  if (mottoEl) {
    mottoEl.textContent = mottos[index];
    setInterval(() => {
      index = (index + 1) % mottos.length;
      mottoEl.textContent = mottos[index];
    }, 4000);
  }
});


// 

document.addEventListener("DOMContentLoaded", () => {
  const mottos = [
    "Build | Secure | Innovate",
    "Your Vision | Our Innovation.",
    "Innovation at its Best",
    "Creating a Better Future",
    "Driven by Excellence",
    "Shaping Tomorrow, Today",
    "Innovative IT Solutions for a Smarter Tomorrow.",
    "Where Technology Meets Excellence."
  ];

  const mottoElement = document.getElementById("motto");
  let index = 0;

  function changeMotto() {
    mottoElement.textContent = mottos[index];
    index = (index + 1) % mottos.length;
  }

  changeMotto();
  setInterval(changeMotto, 3000);

  // Generate stars dynamically
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  document.body.appendChild(starsContainer);

  const starCount = 500;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.opacity = Math.random().toFixed(2);
    const size = (Math.random() * 4 + 2).toFixed(2); // 2px to 6px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    fragment.appendChild(star);
  }

  starsContainer.appendChild(fragment);
});

