const cards = document.querySelectorAll('.card');

const intersectionObserver = new IntersectionObserver(
  /* 'entries' is an array of all the elements that we are observing for intersection with the root */
  (entries) => {
    entries.forEach((entry) => {
      /* 'isIntersecting' is a boolean value which is true if the target element intersects with the intersection observer's root */
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  },
  {
    /* 
      - acts as the offset for the sides of the root element's bounding box
      - a positive value expands the root and hence may cause intersection to occur before the target element is actually visible
      - a negative value shrinks the root and hence may cause intersection to not occur even after certain portion of the target element is actually visible 
      - defaults to '0px 0px 0px 0px'
    */
    rootMargin: '-200px 0px'
  }
);

cards.forEach((card) => {
  /* 
    - it watches whether the target has changed its intersection with the root or not
    - if there is an intersection, the callback specified during the initialization of the IntersectionObserver object will be called.
  */
  intersectionObserver.observe(card);
});
