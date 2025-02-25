document.addEventListener("DOMContentLoaded", function() {
    const mottos = [
        "Your Vision | Our Innovation.",
        "Innovation at its Best",
        "Creating a Better Future",
        "Driven by Excellence",
        "Shaping Tomorrow, Today"
    ];
    const mottoElement = document.getElementById("motto");
    let index = 0;
    
    function changeMotto() {
        mottoElement.textContent = mottos[index];
        index = (index + 1) % mottos.length;
    }
    setInterval(changeMotto, 3000);
    changeMotto();
    
    // Generate stars dynamically
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);
    
    for (let i = 0; i < 50; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.opacity = Math.random();
        let size = Math.random() * 4 + 2; // Vary star sizes between 2px and 6px
        star.style.width = size + "px";
        star.style.height = size + "px";
        starsContainer.appendChild(star);
    }
});