// image slider for empresa section

// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(
  document.querySelectorAll(
    ".empresa .content .instalaciones .images-slider img"
  )
);

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Previous and Next Buttons
var nextButton = document.querySelector(".right");
var prevButton = document.querySelector(".left");

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element
var paginationElement = document.createElement("ul");

// Set ID on Created UL element
paginationElement.className = "bullets";

// create list itmes based on slides count
for (var i = 1; i <= slidesCount; i++) {
  // create the li
  var paginationItem = document.createElement("li");
  // set custom attribute
  paginationItem.setAttribute("data-index", i);
  // append items to the main UL list
  paginationElement.appendChild(paginationItem);
}

// add the created UL element to the page
document
  .querySelector(".empresa .content .instalaciones .images-slider")
  .appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.querySelector(".bullets");

// Get pagination Items | Array.from [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll(".bullets li"));

// Loop Through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}

// trigger the checker function
theChecker();

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide++;

    theChecker();
  }
}

// Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide--;

    theChecker();
  }
}

// create the checker function
function theChecker() {
  // remove all active classes
  removeAllActive();

  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  // set active class on current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if Current Slide is The First
  if (currentSlide == 1) {
    // Add Disabled Class on Previous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove("disabled");
  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {
    // Add Disabled Class on Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from images and pagination bullets
function removeAllActive() {
  // loop through images
  sliderImages.forEach((img) => img.classList.remove("active"));

  // loop through pagination bullets
  paginationBullets.forEach((bullet) => bullet.classList.remove("active"));
}
