
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

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

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
window.getSelection().toString();

function selectText(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
  }
}

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
