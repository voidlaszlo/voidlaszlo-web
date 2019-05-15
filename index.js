// nav buttons

homeLi = document.getElementById('home-li')
aboutLi = document.getElementById('about-li')
projectsLi = document.getElementById('projects-li')
scrollDown = document.getElementById('scroll-down')

// section divs

homePage = document.querySelector('.home-page')
aboutPage = document.querySelector('.about-page')
projectsPage = document.querySelector('.projects-page')

// click event listeners

homeLi.addEventListener('click', function(e) {
    homePage.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

aboutLi.addEventListener('click', function(e) {
    aboutPage.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

projectsLi.addEventListener('click', function(e) {
    projectsPage.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

scrollDown.addEventListener('click', function(e) {
    aboutPage.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

