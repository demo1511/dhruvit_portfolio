// Predefined Messages of on tap Interested in Hiring and Chit-Chat buttons
function fillHiringMessage() {
    const message = `Hello Dhruvit, I am reaching out to discuss an exciting opportunity at our place.

Position Details:

Company Details:`;

    document.getElementById("messageBox").value = message;
    document.getElementById("messageBox").focus();
}

// Predefined Messages of on tap Chit-Chat button
function fillChitChatMessage() {
    const message = `Hello Dhruvit! I am reaching out to have a casual chat scheduled sometime.

I am available on <AVAILABLE_TIME>.

Specific Topics I would like to discuss: <IF_ANY_SPECIFIC_TOPICS>`;

    document.getElementById("messageBox").value = message;
    document.getElementById("messageBox").focus();
}

// Custom Cursor Script
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");
const hoverTargets = document.querySelectorAll("a, button, h1, textarea, input");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

// Mouse move
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

// Hover scale
hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        outline.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
        outline.classList.remove("active");
    });
});

// Smooth trailing animation
function animate() {
    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;

    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

    requestAnimationFrame(animate);
}
animate();

// Splash screen fade
window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    setTimeout(() => {
        splash.classList.add("hide-splash");
    }, 3000);
});

// Typing effect
window.addEventListener("load", () => {
    const roles = ["Flutter Developer", "Full Stack Developer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const textElement = document.getElementById("typing-text");
        const currentRole = roles[roleIndex];

        if (!textElement) return;

        if (isDeleting) {
            textElement.textContent = currentRole.substring(0, charIndex--);
        } else {
            textElement.textContent = currentRole.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => (isDeleting = true), 1000);
        }

        if (isDeleting && charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        const speed = isDeleting ? 70 : 120;

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
