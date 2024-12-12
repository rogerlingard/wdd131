export function createContactForm(){
    const formContainer = document.createElement("div");
    formContainer.id = "contact-form-container";

    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.id = "close-button";

    closeButton.addEventListener("click", () => {formContainer.style.display = "none"});

    const form = document.createElement("form");
    form.innerHTML =`
    <h2>Contact Me</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <br>
    <button type="submit">Send</button>`;


    form.addEventListener("submit", (e) => { e.preventDefault();
        alert("Form submitted");
        formContainer.style.display = "none";


        // Get input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Build the mailto link
        const subject = `Contact Form Submission from ${name}`;
        const body = `You have received a new message from your website's contact form.\n\n` +
                     `Name: ${name}\n` +
                     `Email: ${email}\n` +
                     `Message: ${message}`;
        const mailtoLink = `mailto:rogerlingard1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the mailto link
        window.location.href = mailtoLink;

        // Optionally hide the form
        formContainer.style.display = "none";
    });

    formContainer.appendChild(closeButton);
    formContainer.appendChild(form);

    document.body.appendChild(formContainer);

}

export function showContactForm() {
    const formContainer = document.getElementById("contact-form-container");
    if (formContainer) {
        formContainer.style.display = "block";
    }
}