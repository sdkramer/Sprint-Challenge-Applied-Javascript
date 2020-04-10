// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

console.log('Working yeah!')

const headerContainer = document.querySelector('.header-container')
debugger

function Header() {

/*create DOM elements*/
const header = document.createElement('div')
const date = document.createElement('span')
const title = document.createElement('h1')
const temp = document.createElement('span')


/*create structure of elements*/
header.appendChild(date)
header.appendChild(title)
header.appendChild(temp)


/*add classes*/
header.classList = 'header'
date.classList = 'date'
temp.classList = 'temp'

/*add text content*/
date.textContent = 'March 28, 2019'
title.textContent = 'Lambda Times'
temp.textContent = '98°'

/*append component to DOM*/
headerContainer.appendChild(header)

return header


}
Header()
// console.log(Header())
