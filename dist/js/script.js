"use strict";

// var splide = new Splide( '.splide' );
const splide = new Splide(".splide", {
    type: "loop",
    autoplay: "play",
    wheel: true,
    pauseOnHover: true,
    perPage: 1,
    speed: 500
});

var bar = splide.root.querySelector(".my-slider-progress-bar");

window.onscroll = function () {
    scrollFunction()
};

// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
});

// splide.on( 'autoplay:playing', function ( rate ) {
//   console.log( rate );
// } );

splide.mount();

let floatingItemTop = document.querySelector(".floating-nav__top");


function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        floatingItemTop.style.display = "grid";
    } else {
        floatingItemTop.style.display = "none";
    }
}

function changeFloatingNavOnScroll() {
    let sessions = document.querySelectorAll('.session');
    let floatingNavItems = document.querySelectorAll('.floating-nav-items__item');
    // let current = "";

    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
    sessions.forEach((session) => {
        const sessionTop = session.offsetTop;

        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    })
}
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}