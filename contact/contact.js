const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const contactMessage = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    localStorage.setItem(
        "contactMessage",
        JSON.stringify(contactMessage)
    );

    alert("Your message has been sent successfully!");

    contactForm.reset();
});