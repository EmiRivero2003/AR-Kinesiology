const form = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("input", () => {
  formMessage.textContent = "";
  formMessage.className = "";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  if (fullName === "" || email === "") {
    formMessage.textContent = "Please fill all required fields.";
    formMessage.className = "error";
  } else {
    const appointment = {
      fullName: fullName,
      email: email
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    formMessage.textContent = "Appointment saved successfully!";
    formMessage.className = "success";

    form.reset();
  }
});