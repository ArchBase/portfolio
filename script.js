document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all anchor tags
        document.querySelectorAll('a').forEach(a => a.classList.remove('active'));

        // Add 'active' class to the clicked anchor tag
        this.classList.add('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('ul li a');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`a[href="#${id}"]`);

    if (entry.isIntersecting) {
      // Add active class to the current section's link
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { threshold: 0.5 }); // Adjust the threshold as needed

sections.forEach(section => {
  observer.observe(section);
});
