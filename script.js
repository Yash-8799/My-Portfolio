// Toggle Navbar
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Contact Form Submission
    const form = document.getElementById('contactForm');
    const popupOverlay = document.createElement('div');

    // Create popup markup
    popupOverlay.classList.add('popup-overlay');
    popupOverlay.innerHTML = `
        <div class="popup">
            <div class="popup-icon"><i class="fas fa-check-circle"></i></div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button class="popup-close">Close</button>
        </div>
    `;
    document.body.appendChild(popupOverlay);

    // Close popup
    popupOverlay.querySelector('.popup-close').addEventListener('click', () => {
        popupOverlay.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                popupOverlay.classList.add('show');
            } else {
                alert("Something went wrong. Please try again later.");
            }
        }).catch(error => {
            alert("Error: " + error.message);
        });
    });
});
