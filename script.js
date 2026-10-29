
let userName = sessionStorage.getItem("userName");

if (!userName) {
    userName = prompt("What's Your Name ? ");

    if (userName !== null && userName.trim() !== "") {
        userName = userName.trim();
        sessionStorage.setItem("userName", userName);
    } else {
        userName = null;
    }
}

// Show alert and greeting
if (userName) {
    document.getElementById("alertMessage").textContent =
        "Welcome Back, " + userName + "!";

    document.getElementById("myAlert").style.display = "block";

    // Show name in a different color
    document.getElementById("greeting").innerHTML =
        'Welcome, <span class="userName">' + userName + '!</span>';
}

// Close alert
document.getElementById("closeAlert").addEventListener("click", function () {
    document.getElementById("myAlert").style.display = "none";
});


// Typing animation
const myName = document.querySelector(".myName");

const names = [
    "A n a s Mohammad T a z i d",
    "A n a s",
    "T a z i d",
    "R u m a i s a",
    "R u m a i s a Nahar Y a l a"
];

let nameIndex = 0;
let charIndex = names[0].length;
let deleting = true;

function typeEffect() {
    if (!myName) return;

    const currentName = names[nameIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    myName.textContent = currentName.substring(0, charIndex);

    let speed = deleting ? 180 : 120;

    if (deleting && charIndex === 0) {
        nameIndex = (nameIndex + 1) % names.length;
        deleting = false;
        speed = 400;
    } else if (!deleting && charIndex === currentName.length) {
        deleting = true;
        speed = 1200;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
