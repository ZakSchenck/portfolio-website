// variables
const aboutSectionOne = document.querySelector('.about-flex');
const aboutSectionTwo = document.querySelector('.zakimg-flex');
const headerContainer = document.querySelector('.header-container');
const skillsSection = document.querySelector('.skills-section');
const skillsImageOne = document.getElementById('skills-img');
const skillsImageTwo = document.getElementById('skills-img-2');
const skillsImageThree = document.getElementById('skills-img-3');
const skillsImageFour = document.getElementById('skills-img-4');
const skillsImageFive = document.getElementById('skills-img-5');
const gridItem = document.querySelector('.projects-grid');
const grid = document.querySelectorAll('.grid-item-container');
const gridImage = document.querySelectorAll('.grid-img');
const gridItemOne = document.querySelector('.grid-item-1');
const gridItemTwo = document.querySelector('.grid-item-2');
const gridItemThree = document.querySelector('.grid-item-3');
const gridItemFour = document.querySelector('.grid-item-4');
const gridItemFive = document.querySelector('.grid-item-5');
const gridItemSix = document.querySelector('.grid-item-6');
let screenPosition = window.innerHeight;

window.addEventListener('scroll', (grid) => {
    let aboutPosition = aboutSectionOne.getBoundingClientRect().top;
    let aboutPositionTwo = aboutSectionTwo.getBoundingClientRect().top;
    let skillsPosition = skillsSection.getBoundingClientRect().top;
    let imageOne = skillsImageOne.getBoundingClientRect().top;
    let imageTwo = skillsImageTwo.getBoundingClientRect().top;
    let imageThree = skillsImageThree.getBoundingClientRect().top;
    let imageFour = skillsImageFour.getBoundingClientRect().top;
    let imageFive = skillsImageFive.getBoundingClientRect().top;
    let gridItemPosition = gridItem.getBoundingClientRect().top;
    let projectPosition = gridItemOne.getBoundingClientRect().top;
    let projectPositionTwo = gridItemTwo.getBoundingClientRect().top;
    let projectPositionThree = gridItemThree.getBoundingClientRect().top;
    let projectPositionFour = gridItemFour.getBoundingClientRect().top;
    let projectPositionFive = gridItemFive.getBoundingClientRect().top;
    let projectPositionSix = gridItemSix.getBoundingClientRect().top;

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
    if (imageOne < screenPosition) {
        skillsImageOne.classList.add('img1-animate');
        skillsImageOne.style.opacity = '1';
    }
    if (imageTwo < screenPosition) {
        skillsImageTwo.classList.add('img2-animate');
        skillsImageTwo.style.opacity = '1';
    }
    if (imageThree < screenPosition) {
        skillsImageThree.classList.add('img3-animate');
        skillsImageThree.style.opacity = '1';
    }
    if (imageFour < screenPosition) {
        skillsImageFour.classList.add('img4-animate');
        skillsImageFour.style.opacity = '1';
    }
    if (imageFive < screenPosition) {
        skillsImageFive.classList.add('img5-animate');
        skillsImageFive.style.opacity = '1';
    }
    if (gridItemPosition < screenPosition) {
        gridItem.classList.add('grid-animate');
        gridItem.style.opacity = '1';
    }
    if (projectPosition < screenPosition) {
        const ippImgOverlay = document.querySelector('.ipp-img-overlay');
        const projectInfo = document.querySelector('.project-info-1');
        ippImgOverlay.style.height = '100%';
        ippImgOverlay.style.transition = '1.4s';
        projectInfo.classList.add('project-1-animate');
    }
    if (projectPositionTwo < screenPosition) {
        const pokedexImgOverlay = document.querySelector('.pokedex-img-overlay');
        const projectInfo2 = document.querySelector('.project-info-2');
        pokedexImgOverlay.style.height = '100%';
        pokedexImgOverlay.style.transition = '1.4s';
        projectInfo2.classList.add('project-2-animate');
    }
    if (projectPositionThree < screenPosition) {
        const crowdfundImgOverlay = document.querySelector('.crowdfund-img-overlay');
        const projectInfo3 = document.querySelector('.project-info-3');
        crowdfundImgOverlay.style.height = '100%';
        crowdfundImgOverlay.style.transition = '1.4s';
        projectInfo3.classList.add('project-3-animate');
    }
    if (projectPositionFour < screenPosition) {
        const quizImgOverlay = document.querySelector('.quiz-img-overlay');
        const projectInfo4 = document.querySelector('.project-info-4');
        quizImgOverlay.style.height = '100%';
        quizImgOverlay.style.transition = '1.4s';
        projectInfo4.classList.add('project-4-animate');
    }
    if (projectPositionFive < screenPosition) {
        const pwImgOverlay = document.querySelector('.pw-img-overlay');
        const projectInfo5 = document.querySelector('.project-info-5');
        pwImgOverlay.style.height = '100%';
        pwImgOverlay.style.transition = '1.4s';
        projectInfo5.classList.add('project-5-animate');
    }
    if (projectPositionSix < screenPosition) {
        const pricerImgOverlay = document.querySelector('.pricer-img-overlay');
        const projectInfo6 = document.querySelector('.project-info-6');
        pricerImgOverlay.style.height = '100%';
        pricerImgOverlay.style.transition = '1.4s';
        projectInfo6.classList.add('project-6-animate');
    }
});



