"use strict";

const form = document.querySelector("contact__form");

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

splide.mount();

function scrollFunction() {
    let floatingItemTop = document.querySelector(".floating-nav__top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        floatingItemTop.style.display = "grid";
    } else {
        floatingItemTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//1.
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    //2.
    let mail = new FormData(form);

    //3.
    sendMail(mail);
})

const sendMail = (mail) => {
  //1.
    fetch("/send", {
        method: "post", //2.
        body: mail, //3.

    }).then((response) => {
        return response.json();
    });
};