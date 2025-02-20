// Taglines array
const taglines = [
    "Empowering Your Digital Transformation.",
    "Your Vision, Our Innovation.",
    "Innovative IT Solutions for a Smarter Tomorrow.",
    "Where Technology Meets Excellence. Build. Secure. Innovate."
];

// Select the tagline container
const taglineElement = document.querySelector('.dynamic-tagline');

let taglineIndex = 0;

// Function to update the tagline
function updateTagline() {
    // Fade out
    taglineElement.style.opacity = 0;

    setTimeout(() => {
        // Update text
        taglineElement.textContent = taglines[taglineIndex];
        // Fade in
        taglineElement.style.opacity = 1;
        // Move to the next tagline
        taglineIndex = (taglineIndex + 1) % taglines.length;
    }, 500); // Wait for fade-out transition before changing text
}

// Initial tagline load
updateTagline();

// Change tagline every 3 seconds
setInterval(updateTagline, 3000);
