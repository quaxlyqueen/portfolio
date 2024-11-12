// the .panels div which contains each panel
const panelContainer = document.querySelector('.panels');

// each panel inside of the .panels div. this is the original copy of each panel
const panels = [...document.querySelectorAll('.panel')];
    // add event listeners to each panel
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

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
    updateCarousel(e);
  }
}

/*
 * Update the carousel to use the selected project's screenshot folder.
 */
function updateCarousel(e) {
  console.log(e.target.id); // TODO: Need to implement.
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
