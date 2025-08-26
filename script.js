// ==========================
// Animate header when hovered
// ==========================

const header = document.querySelector("header");
header.addEventListener("mouseover", () => header.classList.add("pulse"));
header.addEventListener("mouseout", () => header.classList.remove("pulse"));

// ==========================

let globalCounter = 0;

function calculateTotal(people, costPerPerson) {
  const total = people * costPerPerson;
  return total;
}

function incrementGlobalCounter() {
  let localCounter = 1;
  globalCounter += localCounter;
  return globalCounter;
}

function showEstimate(people) {
  const costPerPerson = 120;
  return calculateTotal(people, costPerPerson);
}

const peopleInput = document.getElementById("people");
peopleInput.addEventListener("input", () => {
  const estimateBox = document.getElementById("estimate-box") || document.createElement("p");
  estimateBox.id = "estimate-box";
  estimateBox.textContent = "Estimated Cost: R" + showEstimate(peopleInput.value || 0);
  peopleInput.parentNode.appendChild(estimateBox);
});

// ==========================
// JS + CSS Animations
// ==========================

function triggerAnimation(element, animationClass) {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 1000);
}

// Create a button to trigger header animation
const animateBtn = document.createElement("button");
animateBtn.textContent = "Animate Header 🎬";
document.querySelector("header").appendChild(animateBtn);

animateBtn.addEventListener("click", () => {
  triggerAnimation(header, "pulse");
});

// Dark mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Dark Mode";
document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
