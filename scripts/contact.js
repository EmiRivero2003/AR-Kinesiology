const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("input", () => {
  formMessage.textContent = "";
  formMessage.className = "";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (fullName === "" || email === "" || phone === "" || message === "") {
    formMessage.textContent = "Please fill all required fields.";
    formMessage.className = "error";
    return;
  }

  emailjs.sendForm(
      "service_2giil1i",
      "template_zpnuz5r",
      "#contactForm"
    )
    .then(() => {
      formMessage.textContent = "Your message was sent successfully!";
      formMessage.className = "success";
      form.reset();
    })
    .catch((error) => {
      formMessage.textContent = "Something went wrong. Please try again.";
      formMessage.className = "error";
      console.error("EmailJS error:", error);
    });
});