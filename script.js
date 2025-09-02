/* Add this to the top of your script.js file to initialize Vanta.js */
VANTA.NET({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x6a0dad,       /* A vibrant purple for the dots and lines */
    backgroundColor: 0x1a1a1a  /* A dark background color */
});
/* ----- NAVIGATION BAR ----- */
function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}


/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT CARDS -- */
sr.reveal('.project-card', { interval: 200 })

/* -- EXPERIENCE CARDS -- */
sr.reveal('.experience-card', { interval: 200 })

/* -- EDUCATION CARDS -- */
sr.reveal('.education-card', { interval: 200 })

/* -- CERTIFICATION CARDS -- */
// sr.reveal('.certification-card',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ----- PROGRESS BAR ----- */
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    document.getElementById('progressBar').style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateProgressBar);


/* ----- Certificate Section ----- */
document.addEventListener('DOMContentLoaded', function () {
    // Certificate Data
    const certificateData = [
        { img: "./certificate/CISCO_Cybersecurity_Essentials.jpg", title: "Cybersecurity Essentials", issuer: "Cisco" },
        { img: "./certificate/CDAC_Cyber_Security_&_Ethical_Hacking.jpg", title: "Cyber Security & Ethical Hacking", issuer: "CDAC" },
        { img: "./certificate/CODSOFT_Web_Development.jpg", title: "Web Development Internship", issuer: "Codsoft" },
        { img: "./certificate/HackerRank_Java(Basic).jpg", title: "JAVA Basic", issuer: "HackerRank" },
        { img: "./certificate/Linkedin_Learning_GenerativeAI.jpg", title: "Generative AI", issuer: "Linkedin Learning" },
        { img: "./certificate/Linkedin_Learning_Introduction_To_Artificial_Intelligence.jpg", title: "Artificial Intelligence", issuer: "Linkedin Learning" },
        { img: "./certificate/Linkedin_Learning_Learning_Microsoft_365_Copilot.jpg", title: "Cybersuraksha DS Certificate", issuer: "Linkedin Learning" },
        { img: "./certificate/Spoken_Tutorial_C_Training.jpg", title: "C", issuer: "Spoken Tutorial IIT Bombay" },
        { img: "./certificate/Spoken_Tutorial_HTML_Training.jpg", title: "HTML", issuer: "Spoken Tutorial IIT Bombay" },
        { img: "./certificate/Technex_Web_Development.jpg", title: "Website Development", issuer: "Technex'25 (IIT BHU Varanasi) in association with EISystems Services & Robokwik" },
        { img: "./certificate/Github_Workshop_Code_Club.jpg", title: "Git & Github Workshop", issuer: "Code Club GEC JAMUI" },
        { img: "./certificate/Front-End_Development_Internship_Heal_Bharat.jpg", title: "Front-End Develoment Internship", issuer: "Heal Bharat" },
        { img: "./certificate/Bharat_Intern_Web_Development(Basic).jpg", title: "Web Development Internship", issuer: "Bharat Intern" },
    ];

    const track = document.getElementById('certificatesTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Track with original certificate cards from the data array
    certificateData.forEach(cert => {
        track.innerHTML += `
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${cert.img}" alt="${cert.title}">
                </div>
                <div class="certification-content">
                    <div class="certification-header">
                        <h3>${cert.title}</h3>
                        <span class="issuer">${cert.issuer}</span>
                    </div>
                </div>
            </div>
        `;
    });

    // --- INFINITE CAROUSEL ---

    const cards = Array.from(track.children);
    // width of a single card including its margin
    // margin is 1rem on each side, so 2rem total -> 32px
    let cardWidth = cards[0].offsetWidth + 32;

    // Clone the original cards to create the infinite effect
    const clonesStart = cards.map(card => card.cloneNode(true));
    const clonesEnd = cards.map(card => card.cloneNode(true));

    // Add clones to the end of the track
    clonesStart.forEach(clone => track.appendChild(clone));
    // Add clones to the beginning of the track
    clonesEnd.reverse().forEach(clone => track.insertBefore(clone, cards[0]));

    // The starting position should be at the beginning of the *original* cards
    let currentIndex = cards.length;
    const initialTranslateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${initialTranslateX}px)`;

    let isTransitioning = false;

    // Carousel moving
    const move = (direction) => {
        if (isTransitioning) return;
        isTransitioning = true;

        // Smooth transition effect
        track.style.transition = 'transform 0.5s ease-in-out';
        currentIndex += direction;
        track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    };

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', () => move(1));
    prevBtn.addEventListener('click', () => move(-1));

    // Infinite loop.
    track.addEventListener('transitionend', () => {
        isTransitioning = false;

        // End to start jump
        if (currentIndex >= cards.length * 2) {
            track.style.transition = 'none'; // Disable transition for the jump
            currentIndex = cards.length;
            track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        }

        // Beginning to end jump
        if (currentIndex <= cards.length - 1) {
            track.style.transition = 'none'; // Disable transition for the jump
            currentIndex = cards.length * 2 - 1;
            track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        }
    });

    // Window resizing
    const updateWidth = () => {
        cardWidth = cards[0].offsetWidth + 32; // Re-calculate on resize
        track.style.transition = 'none';
        track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    };
    window.addEventListener('resize', updateWidth);

    // --- AUTO-PLAY ---
    let autoPlayInterval;

    const startAutoPlay = () => {
        stopAutoPlay(); // Multiple intervals are running
        autoPlayInterval = setInterval(() => move(1), 3000); // Slide change in 3 seconds
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    // Pause auto-play when the user hovers
    const carouselContainer = document.querySelector('.certifications-carousel');
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // Initial start of the auto-play
    startAutoPlay();
});

// Contact Form
(function () {
    // ------------Public Key
    emailjs.init("Nxe0z1PrcbCbwsQSA");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // ------------Service id & Template id
    emailjs.sendForm("service_wp5ffcg", "template_5cuz4n8", this)
        .then(function () {
            alert("Message Sent Successfully!");
        }, function (error) {
            alert("Failed to Send Message. Error: " + JSON.stringify(error));
        });
});