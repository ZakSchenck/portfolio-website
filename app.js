// variables
const aboutSectionOne = document.querySelector('.about-flex');
const aboutSectionTwo = document.querySelector('.zakimg-flex');
const headerContainer = document.querySelector('.header-container');
const skillsSection = document.querySelector('.skills-section');
const skillsImages = Array.from(document.querySelectorAll('.skills-img'))
const gridItem = document.querySelector('.projects-grid');
const grid = Array.from(document.querySelectorAll('.grid-item-container'));
const imgOverlay = Array.from(document.querySelectorAll('.ipp-img-overlay'));
const projectInfo = Array.from(document.querySelectorAll('.project-info'));
let screenPosition = window.innerHeight;

window.addEventListener('scroll', (e) => {
    let aboutPosition = aboutSectionOne.getBoundingClientRect().top;
    let aboutPositionTwo = aboutSectionTwo.getBoundingClientRect().top;
    let skillsPosition = skillsSection.getBoundingClientRect().top;
    let gridItemPosition = gridItem.getBoundingClientRect().top;

    if (aboutPosition < screenPosition) {
        aboutSectionOne.classList.add('about-animate');
        aboutSectionOne.style.opacity = '1';
    }
    if (aboutPositionTwo < screenPosition) {
        aboutSectionTwo.classList.add('about-animate-two');
        aboutSectionTwo.style.opacity = '1';
    }
    if (skillsPosition < screenPosition) {
        skillsSection.classList.add('skills-animate');
        skillsSection.style.opacity = '1'
    }
    if (gridItemPosition < screenPosition) {
        gridItem.classList.add('grid-animate');
        gridItem.style.opacity = '1';
    }
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



