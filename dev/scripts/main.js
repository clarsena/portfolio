const name = {
    strings: ["Christopher Arsenault"],
    typeSpeed: 40,
    showCursor: false
}

const title = {
    strings: ["Front-End Web Developer"],
    typeSpeed: 40,
    startDelay: 2000,
    cursorChar: '_',
    showCursor: false
}
  
const typedName = new Typed('#typed-name', name);
const typedTitle = new Typed('#typed-title', title)

//  namespace for the project
const app = {};

app.init = () => {
    new WOW().init();
};

//  document.ready to call the init method once the page is finished loading
$(function () {
    app.init();
    $(".siteLogo").click(function() {
        $(".hamburgerMenu").addClass("show");
    });
    $(".exitResponsive").click(function() {
        $(".hamburgerMenu").removeClass("show");
    });
    $(".navLinkHidden").click(function() {
        $(".hamburgerMenu").removeClass("show");
    });
    
});