
// mouseover
const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', (event) => {
    logo.style.fontSize= '8rem';
    event.stopPropagation();
});

// keydown
document.addEventListener('keydown', () => {
    alert('Would you like to your 847284th email newsletter?');
});

// wheel
const introH2 = document.querySelector('.intro h2');
introH2.addEventListener("wheel", function(event) {
  document.body.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1473889803946-6a3923603697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)";
});


// drag / drop

// form.addEventListener("drop", event => event.preventDefault());

// console.log(form);

// load
window.addEventListener('load', () => {
    console.log("All resources loaded bro");
  });

// focus
const form = document.getElementById("form");

form.addEventListener(
  "focus",
  event => { event.target.style.background = "pink"; 
},
  true
);

form.addEventListener(
  "blur", event => {
    event.target.style.background = "";
  },
  true
);


// resize
window.addEventListener('resize', () => {
    alert(`Don't mess with Texas.`);
});

// scroll
// window.addEventListener('scroll', () => {
//   alert(`woah slow down.`);
// });


// select 
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `Look what you did: ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);

// dblclick
introH2.addEventListener('dblclick', () => {
    introH2.innerHTML = 'JUST KIDDING. THIS IS A NIGHTMARE BUS.';
});

// Prevent navigation from refreshing page
const navTags = document.querySelectorAll('.nav-link');
for (i=0; i<navTags.length; i++) {
    navTags[i].addEventListener('click', (event) => {
        event.preventDefault();
    });
};
