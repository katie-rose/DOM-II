
// mouseover
const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', (event) => {
    logo.style.fontSize= '5rem';
    TweenMax.to(".nav", 3, {x:-200, opacity: 1}) 
    event.stopPropagation();
});

// keydown
document.addEventListener('keydown', () => {
    alert('Would you like to your 847284th email newsletter?');
});

// wheel
introImg.addEventListener('wheel', () => {
    introImg.style.height = 'auto';
});

// drag / drop

// load
window.addEventListener('load', () => {
    console.log("All resources loaded bro");
  });

// focus

// resize
window.addEventListener('resize', () => {
    alert(`Don't mess with Texas.`);
});

// scroll

// select 

// dblclick
const introH2 = document.querySelector('.intro h2');
introH2.addEventListener('dblclick', () => {
    introH2.innerHTML = 'Golden Egg - here is your %20 coupon code #1goldenEggBounty';
});

// Prevent navigation from refreshing page
const navTags = document.querySelectorAll('.nav-link');
for (i=0; i<navTags.length; i++) {
    navTags[i].addEventListener('click', (event) => {
        event.preventDefault();
    });
};
