import { createContactForm, showContactForm } from "./form.mjs";

document.addEventListener("DOMContentLoaded", () => {
    createContactForm();

    const contactButton = document.getElementById("contact-button");
    contactButton.addEventListener("click", () => {
        showContactForm();
    });
});
