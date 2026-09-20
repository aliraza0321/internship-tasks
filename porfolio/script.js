 

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        // Close mobile menu after click
        navMenu.classList.remove("show");
    });
});

 

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
 
const elements = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {

    elements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementTop < screenHeight - 100) {
            el.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

revealOnScroll();

 

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

        header.style.background =
            "rgba(255,255,255,0.95)";

    } else {

        header.style.boxShadow = "none";

        header.style.background =
            "rgba(255,255,255,0.8)";
    }

});

 

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "⬆";

scrollBtn.classList.add("scroll-top");

scrollBtn.style.display = "none";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

 

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        circle.classList.add("ripple");

        const rect = btn.getBoundingClientRect();

        circle.style.left =
            e.clientX - rect.left + "px";

        circle.style.top =
            e.clientY - rect.top + "px";

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 500);

    });

});

 

const toggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

 

const typingElement =
    document.getElementById("typing-text");

if (typingElement) {

    const text =
        "AI & ML Engineer | Full Stack Developer";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            typingElement.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(typeWriter, 70);
        }
    }

    window.addEventListener("load", typeWriter);
}