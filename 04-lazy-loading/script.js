const cardContainer = document.querySelector('.card-container');
const lastCard = document.querySelector('.card:last-child');

const intersectionObserver = new IntersectionObserver(
  /* 'entries' is an array of all the elements that we are observing for intersection with the root */
  (entries, observer) => {
    /* entries[0] because, we will be observing only a single element, i.e. the last card in the container */
    if (!entries[0].isIntersecting) return;
    observer.unobserve(entries[0].target);
    fetchNewCards();
    const newLastCard = document.querySelector('.card:last-child');
    observer.observe(newLastCard);
  },
  {
    /* 
      - acts as the offset for the sides of the root element's bounding box
      - a positive value expands the root and hence may cause intersection to occur before the target element is actually visible
      - a negative value shrinks the root and hence may cause intersection to not occur even after certain portion of the target element is actually visible 
      - defaults to '0px 0px 0px 0px'
    */
    rootMargin: '100px 0px'
  }
);

/* 
  - it watches whether the target has changed its intersection with the root or not
  - if there is an intersection, the callback specified during the initialization of the IntersectionObserver object will be called.
*/
intersectionObserver.observe(lastCard);

/* 
  a simple function implemention to implement lazy loading
  simply addds new card divs to the card-container
*/
let newCardNumber = 1;
function fetchNewCards() {
  for (let i = 0; i < 5; i++) {
    const newCard = document.createElement('div');
    newCard.textContent = `New Card ${newCardNumber}`;
    newCardNumber++;
    newCard.classList.add('card');
    cardContainer.append(newCard);
  }
}

/* 
  # TIP:
  If you are doing infinite scroll by fetching real data from a server, you can check the totalCount provided by the server to see if there are any more data remaining.
  Based on whether there are more data or not, you may conditionally call the 'fetchNewCards()' method
  Or to be more specific, your own implementation of a 'fetchDataWithLimitAndOffset()' function
*/
