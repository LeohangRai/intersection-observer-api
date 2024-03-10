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
      - indicates at what percentage of the target's visibility the observer's callback should be executed
      - default is 0, meaning as soon as even one pixel is visible, the callback will be run)
      - a value of 1 means that the threshold isn't considered passed until every pixel is visible.
    */
    threshold: 1
  }
);

cards.forEach((card) => {
  /* 
    - it watches whether the target has changed its intersection with the root or not
    - if there is an intersection, the callback specified during the initialization of the IntersectionObserver object will be called.
  */
  intersectionObserver.observe(card);
});
