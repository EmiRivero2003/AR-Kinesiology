const buttons = document.querySelectorAll(".injury-btn");
const card = document.getElementById("injuryCard");

let injuriesData = [];

// Load JSON data
fetch("data/injuries.json")
  .then((response) => response.json())
  .then((data) => {
    injuriesData = data;
  })
  .catch((error) => {
    card.innerHTML = "<p>Unable to load injury information right now.</p>";
    console.error("Error loading injuries data:", error);
  });

// Button click events
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedInjury = button.dataset.injury;

    const injury = injuriesData.find(
      (item) => item.name === selectedInjury
    );

    if (injury) {
      // Active button style
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Animation out
      card.style.opacity = 0;
      card.style.transform = "translateY(10px)";

      setTimeout(() => {
        card.innerHTML = `
          <h2>${injury.name}</h2>
          <p><strong>Common Symptoms:</strong> ${injury.commonSymptoms}</p>
          <p><strong>Possible Causes:</strong> ${injury.possibleCauses}</p>
          <p><strong>Basic Care:</strong> ${injury.basicCare}</p>
          <p><strong>When to See a Professional:</strong> ${injury.whenToSeeProfessional}</p>
        `;

        // Animation in
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, 150);
    }
  });
});