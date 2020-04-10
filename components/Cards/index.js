// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardEntry = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(
  response => {
    const artTopics = Object.entries(response.data.articles)
    console.log(artTopics)
    for (let [key, value] of artTopics) {
      value.forEach(element => {
        cardMaker(element)
      }
        )
    }
  }
)
.catch(
error => {

}
)


/***cardMaker function****/

function cardMaker ({headline, authorPhoto, authorName}) {

  const cardDiv = document.createElement('div')
  const headLine = document.createElement('div')
  const author = document.createElement('div')
  const imageContainer = document.createElement('div')
  const image =document.createElement('img')
  const nameOfAuthor = document.createElement('span')
  
  cardDiv.classList.add('card')
  headLine.classList.add('headline')
  imageContainer.classList.add('img-container')
  author.classList.add('author')
  
  cardDiv.appendChild(headLine)
  cardDiv.appendChild(author)
  author.appendChild(imageContainer)
  imageContainer.appendChild(image)
  author.appendChild(nameOfAuthor)
  
  headLine.textContent = headline
  image.src = authorPhoto
  nameOfAuthor.textContent = authorName
  
  cardEntry.appendChild(cardDiv)
  return cardDiv
  
  }



// cardMaker('My Article', '#', 'Me')

// response => {
//   const articlesArrays = Object.entries(response.data.articles)
//   const artArg = (((articlesArrays[2])[1]))
// console.log(response.data.articles)


// for (let i = 0; i < subArray.length; i++){
//   const artArg = subArray[i]
// }

// artArg.forEach(element => {
//   cardMaker(element)
// })

// }
