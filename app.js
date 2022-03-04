// variables
const skillsImages = Array.from(document.querySelectorAll('.skills-img'));
const imgOverlay = Array.from(document.querySelectorAll('.ipp-img-overlay'));
const projectInfo = Array.from(document.querySelectorAll('.project-info'));
let greetingsText = document.getElementById('greetings-text');
let developerText = document.querySelector('.fe-developer-text');
let screenPosition = window.innerHeight;

const elements = [
    [document.querySelector('.about-flex'), 'about-animate'],
    [document.querySelector('.zakimg-flex'), 'about-animate-two'],
    [document.querySelector('.skills-section'), 'skills-animate'],
    [document.querySelector('.projects-grid'), 'grid-animate']
]

window.addEventListener('scroll', (e) => {
    elements.forEach(animateScroll);

    imgOverlay.forEach(img => {
        let gridPosition = img.getBoundingClientRect().top;
        if (gridPosition < screenPosition) {
            img.style.height = '100%';
            img.style.transition = '1.5s';
            if (gridPosition < screenPosition) {
                projectInfo.forEach(info => {
                    info.classList.add('project-1-animate');
                })
            }
        }
    })

    skillsImages.forEach(skill => {
        let skillsPosition = skill.getBoundingClientRect().top;
        if (skillsPosition < screenPosition) {
            skill.classList.add('img1-animate');
        }
    })
});

const animateScroll = ([element, className]) => {
    if (element.getBoundingClientRect().top < screenPosition) {
        element.classList.add(className);
        element.style.opacity = '1';
    }
}

greetingsText.style.display = 'none'
let textArray = greetingsText.innerText.split('');
    let index = 0
    setInterval(function () {
        greetingsText.style.display = 'block'
        if (index < 18) {
            index++
            greetingsText.innerText = textArray[0] += textArray[index]

        }
    }, 160);

    setInterval(function () {
        developerText.classList.add('dev-animate')
    }, 3000)