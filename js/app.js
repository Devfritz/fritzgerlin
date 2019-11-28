 const hamburger = document.querySelector('.hamburger');
 const navbar = document.querySelector('nav');
const navClose = document.querySelector('.nav-close');

 hamburger.addEventListener('click',()=>{
navbar.classList.add('shownav');
 });

navClose.addEventListener('click', () => {
  navbar.classList.remove('shownav');
});
//   const links = document.querySelectorAll("header ul li");
// const selectElement = (s) => document.querySelector(s);

// selectElement('.hamburger').addEventListener('click', () => {

//     selectElement('header ul').classList.toggle("open");
//     links.forEach(link => {

//         link.classList.toggle('fade');

    
 //    });
    (function(){
  document.getElementById('date').innerHTML = new Date().getFullYear();


  window.sr = ScrollReveal();
  sr.reveal('.progress-bar', {
    origin: 'left',
    duration: 2000,
    distance: '100%'
  })

  

    // selectElement('')

});

 
   


  // select element
