document.addEventListener("DOMContentLoaded", function() {
    function animateCounter(id, start, end, duration, suffix = "") {
        let obj = document.getElementById(id);
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));

        function updateCounter() {
            current += increment;
            obj.innerHTML = current.toLocaleString() + suffix;
            if (current != end) {
                setTimeout(updateCounter, stepTime);
            }
        }

        setTimeout(updateCounter, stepTime);
    }

    function startCounters() {
        let totalDuration = 2000; // Duration in milliseconds
        animateCounter("playCount1", 0, 500, totalDuration, "M+");
        animateCounter("playCount2", 0, 50, totalDuration);
        animateCounter("playCount3", 0, 15, totalDuration);
    }

    let observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Adjust this value to trigger when 50% of the section is visible
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.disconnect(); // Stop observing after counters start
            }
        });
    }, observerOptions);

    observer.observe(document.getElementById('about'));
});
