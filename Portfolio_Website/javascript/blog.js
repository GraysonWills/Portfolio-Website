function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        // Check if the entry is intersecting
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Optional: Remove visible class if you want them to fade out when out of view
            entry.target.classList.remove('visible');
        }
    });
}

// Create a new Intersection Observer instance
let observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5  // Trigger when at least 50% of the target is visible
});

// Target all rows in the document
document.querySelectorAll('.blog-row').forEach(row => {
    observer.observe(row);
});