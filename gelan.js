const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


const changeBgBtn = document.getElementById("changebg");

changeBgBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  const lightness = isDark ? 20 : 75; // darker for dark mode
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, ${lightness}%)`;

  document.body.style.backgroundColor = randomColor;
  document.body.style.transition = "background-color 0.6s ease";
});

