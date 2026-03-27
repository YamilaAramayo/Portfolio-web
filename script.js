particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#38bdf8" },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 3 },
line_linked: {
enable: true,
distance: 150,
color: "#38bdf8",
opacity: 0.4
},
move: {
enable: true,
speed: 2
}
},
interactivity: {
events: {
onhover: {
enable: true,
mode: "repulse"
}
}
}
});

// animación scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add("visible");
}
});
});