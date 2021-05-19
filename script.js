// ===== JAVASCRIPT =====

// 1. Adds Active-Class to the navigations and even switches between the active class  

let allnavs = document.querySelectorAll(".nav-div"); // gets all the navigation items
for (let i = 0; i < allnavs.length; i++) {
    allnavs[i].addEventListener("click", function (e) { // add event listner on all nav items
        if (e.target.classList.contains("active-class")) {     // if link is already active 
            if (e.target.classList)
                e.target.classList.remove("active-class")       // make it unactive
            return;
        }
        if (document.querySelector(".active-class")) {          //else remove the active class from the prev active class
            document.querySelector(".active-class").classList.remove("active-class");
        }
        e.target.classList.add("active-class");      // add active class to the currentlyt clicked element.
    })
}
// 2. Adds Dropdown Menu when clicked on More-Nav 

let btn = document.querySelector(".drpdown");   // Gets the class of dropdown
btn.addEventListener("click", function (e) {  // adds an event listener of click on more
    if (document.querySelector(".dropdown-list")) {  // if the dropdown list is already present  
        document.querySelector(".dropdown-list").remove(); //this means the icon is clicked on twice,therefore remove it!
        document.querySelector(".active-class").classList.remove("active-class"); // also remove the active class from it
        return;
    }
    let div = document.createElement("div"); // else create the HTML for the dropdown menu
    div.classList.add("dropdown-list");
    div.innerHTML = `<a href="">Josh 1</a>
         <a href="">Josh 2</a>
         <a href="">Josh 3</a>
         <a href="">Josh 4</a>`;
    let hero = document.querySelector(".hero");
    hero.append(div); // add it to the Website
})

//3. Remove the Dropdown list when clicked on upper-section of the screen => Hero section

document.querySelector(".hero").addEventListener("click", function (e) {
    if (document.querySelector(".dropdown-list")) { // if dropdown menu exists on screen
        document.querySelector(".active-class").classList.remove("active-class"); // remove active class from nav
        document.querySelector(".dropdown-list").remove(); // remove dropdown list
    }
})

// 4. Adds the Carousel Functionality on the Arrow Bars

function initCarousel() { 
    let carousels = document.getElementsByClassName("carousel"); //gets the class from dom
    carousels.length && Array.from(carousels).forEach(function (carousel) {
        let slides = carousel.querySelectorAll(".slide"); //slide is the class given to all the carousel divs
        let slideCount = Math.min(slides.length, 6); // gets all the divs
        let currentPosition = 0;
        let prevButton = carousel.querySelector("#next-button"); // ID of "->"
        let nextButton = carousel.querySelector("#prev-button");// ID of "<-"
        function removeSlides() {       // Function that removes slides
            Array.from(slides).forEach(slide => {
                if (slide.parentElement) {
                    slide.parentElement.removeChild(slide);
                }
            });
        }

        function renderSlides() {
            removeSlides();     // Function that renders slides in different order(+1 pos to prev positions)
            for (let index = 0; index < slideCount; index++) {
                let slide = slides[(index + currentPosition) % slides.length];
                carousel.insertBefore(slide, nextButton);
            }
        }

        prevButton.onclick = function () {  //when "<-" is clicked 
            currentPosition = (currentPosition - 1 + slides.length) % slides.length;
            renderSlides();     //function call
        }
        nextButton.onclick = function () {  //when "->" is clicked 
            currentPosition = (currentPosition + 1) % slides.length;
            renderSlides();     //function call
        }
        removeSlides();
        renderSlides();
    })
}

initCarousel(); //function call of carousel
