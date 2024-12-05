// the .panels div which contains each panel
const panelContainer = document.querySelector('.panels');

// each panel inside of the .panels div. this is the original copy of each panel
const panels = [...document.querySelectorAll('.panel')];
    // add event listeners to each panel
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// Store the reference to the carousel container where images will be displayed
const carouselContainer = document.querySelector('.carousel-inner');


// Add event listeners to the panels (cards)
//const panels = [...document.querySelectorAll('.panel')];
//panels.forEach(panel => panel.addEventListener('click', toggleActive));


// buttons to filter projects
const searchButtons = document.querySelectorAll('.search');
  // add event listeners to each button
  searchButtons.forEach(button => {
    if(!button.classList.contains('input-box'))
      button.addEventListener('click', displayMatches)
  });

// the search box to filter projects
const searchInput = document.querySelector('.input-box');
    // add event listeners to the search box
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
    

 /*
  * If there is currently an open panel, toggle it.
  * Toggle the newly selected panel to open.
  */
function toggleOpen() {
  let currentOpen = document.querySelector('.open');
  if(currentOpen !== null && currentOpen !== this) currentOpen.classList.toggle('open');
  this.classList.toggle('open');
}

 /*
  * If there is currently an active panel, toggle it.
  * Toggle the newly selected panel to be active.
  */
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    let currentActive = document.querySelector('.open-active');
    if(currentActive !== null && currentActive !== this) currentActive.classList.toggle('open-active');
    this.classList.toggle('open-active');
    currentActive = document.querySelector('.open-active');
    updateCarousel(currentActive);
  }
}

// Function to update the carousel with the selected project's images
function updateCarousel(panel) {
  console.log(panel);
  // Get the image URLs from the data attribute of the selected project
  const imageUrls = JSON.parse(panel.getAttribute('data-carousel-images'));

  // Clear the current carousel content
  carouselContainer.innerHTML = '';

  // Add new images to the carousel
  imageUrls.forEach((url, index) => {
    const isActive = index === 0 ? 'active' : ''; // The first image should be active
    const carouselItem = `
      <div class="carousel-item ${isActive}">
        <img src="${url}" class="d-block w-100" alt="...">
      </div>
    `;
    carouselContainer.innerHTML += carouselItem; // Add the new image item to the carousel
  });
}

 /* 
  * Find matches based upon a letter or combination of letters.
  * Matches are found only within the class list of each project panel.
  */
function findMatches(wordToMatch, isInputBox) {
  // if the search string is empty, return the original panels
  if(wordToMatch === "") return panels;

  let results = [];

  // for each of the projects
  panels.forEach(project => {

    // iterate through the class list of that project
    project.classList.forEach(clazz => {

      // if the class has a match and the class is not the panel, add it to the array
      if ((clazz !== 'panel' && clazz == wordToMatch.toLowerCase()) && !isInputBox) results.push(project);
      if ((clazz !== 'panel' && clazz.includes(wordToMatch.toLowerCase())) && isInputBox) results.push(project);
    });

    // reset each project to it's default state (unopened)
    if(project.classList.contains('open')) project.classList.toggle('open');
    if(project.classList.contains('open-active')) project.classList.toggle('open-active');
  });
  return results;
}

 /*
  * Set the .panels inner HTML equal to the outer HTML of each project match. 
  */
function displayMatches(projects) {
  // THIS NEEDS TO BE MOVED TO A GENERAL INPUT MANAGER
  // TODO: Projects is a parameter, to allow for reset button (see below)
  // get the array of matches
  //if(matchArray.length === 0) matchArray = panels; -> if the array of matches has none, then reset
  if(!this.classList.contains('input-box')) 
    projects = findMatches(this.id, false);
  else projects = findMatches(this.value, true);

  //projects.forEach(project => console.log(project));

  // set the inner html of the panels div to the combined HTML of each matched project.
  panelContainer.innerHTML = projects.map(project => project.outerHTML).join('\n');
  
  let newPanels = [...document.querySelectorAll('.panel')];
  // add event listeners to each panel
  newPanels.forEach(panel => panel.addEventListener('click', toggleOpen));
  newPanels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}
