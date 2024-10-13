/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// Menu Show//

/*Validate if Constant esist*/  

if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu');
  })
}

//Menu Hidden///

/*Validate if Constant esist*/  

if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
  })
}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu');
  //when we click the each nav__link, we remove the show-menu 
  navMenu.classList.remove('show-menu');

}

navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = ()=>{
  const header = document.getElementById('header');
  //when the scroll is greater than 50% viewpoint height add the scroll

  this.scrollY>=50? header.classList.add('shadow-header')
                  : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-from'),
   contactMessage = document.getElementById('contact-message');

   const sendEmail =(e)=>{
      e.preventDefault();

      // serviceID - templateID - #form - publicKey
     emailjs.sendForm('service_19uzjr5', 'template_ae3aess', '#contact-from', 'NEdjAmnTayBDbqHWJ' )
     .then(()=>{
         // Show sent message
        contactMessage.textContent = ' Message sent successfully ✅'

           // Remove message after five seconds
        setTimeout(()=>{
          contactMessage.textContent =''
        }, 5000);

           // Clear input fields
        contactForm.reset();
     }, (()=>{ 

         // Show error message

      contactMessage.textContent = ' Message not sent (service error) ❌'
     }
    ));
   };

   contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll is greater than 350 viewpoint height then add the show-scroll-up
  this.scrollY >= 350? scrollUp.classList.add('show-scroll-up')
                  : scrollUp.classList.remove('show-scroll-up')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive =()=>{
     const scrollDown = window.scrollY

     sections.forEach(current =>{
  const sectionHeight =current.ofsetHeight,
        sectionTop = current.ofsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelectorAll('.nav__menu a[href*='+ sectionId +']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
          sectionClass.classList.add('active-link')
        }else{
          sectionClass.classList.remove('active-link')
        }
      })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic ( is user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme =()=> document.body.classList.contains(darkTheme)? 'dark' : 'light';
const getCurrenticon =()=> themeButton.classList.contains(iconTheme)? 'ri-moon-line' : 'ri-sun-line';

// we validate if user previously choose a topic
if(selectedTheme){
  // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
  document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
  document.body.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activate/ deactivated theme manually by ising button
themeButton.addEventListener('click', ()=>{
  // add or remove the dark/ icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  // we save the theme and the current icon that user choose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrenticon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const  sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay : 400
  //reset : true  //antimations repeat
})

sr.reveal(`.home__perfil, .about__image, .about__perfil, .contact__mail`, {origin: 'right'});
sr.reveal(`.section__title-2, .home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal('.services__card, .projects__card', {interval: 100})