const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});

// Reveal elements while scrolling.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Navbar shadow after scrolling.
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.18)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Contact form -> Flask API.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = contactForm.querySelector("button");
    const originalText = button.innerHTML;

    button.disabled = true;
    button.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    formStatus.textContent = "";

    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Something went wrong.");
        }

        formStatus.textContent = result.message;
        contactForm.reset();
    } catch (error) {
        formStatus.textContent = error.message;
        formStatus.style.color = "#ff7b8a";
    } finally {
        button.disabled = false;
        button.innerHTML = originalText;
    }
});

document.getElementById("year").textContent = new Date().getFullYear();

