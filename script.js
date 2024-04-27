const articleText = document.querySelector('article').textContent;
const words = articleText.split(' ');
const readTime = Math.ceil(words.length / 200); // assume 200 words per minute
document.getElementById('read-time').textContent = `${readTime} minute${readTime === 1 ? '' : 's'}`;


const links = document.querySelectorAll('.footer-container a');

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    links.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.classList.add('fade-out');
      }
    });
  });

  link.addEventListener('mouseout', () => {
    links.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.classList.remove('fade-out');
      }
    });
  });
});




//         <div class="read-time"><span id="read-time"> min read</span></div>      calculates the read time of the blog
// Get the main content element
const mainContent = document.querySelector('main');

// Get the scroll container element
const scrollContainer = document.querySelector('.scroll-container');

// Get the scroll content element
const scrollContent = document.querySelector('.scroll-content');

// Add an event listener for the scroll event
scrollContainer.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollTop = scrollContainer.scrollTop;

  // Animate the scroll effect
  scrollContent.style.top = `-${scrollTop}px`;
});

// Add a smooth scrolling effect when clicking on a link
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();

    // Get the target element
    const target = document.querySelector(anchor.getAttribute('href'));

    // Animate the scroll effect
    scrollContainer.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});