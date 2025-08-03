document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileToggle.addEventListener("click", function () {
        mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
        mobileToggle.classList.toggle("active");
    });

    // Close the menu when a link is clicked
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.style.display = "none";
            mobileToggle.classList.remove("active");
        });
    });

    // Project tabs functionality
    const tabs = document.querySelectorAll('.project-tab');
    const allProjects = document.querySelectorAll('.project-card');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            const filter = tab.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            allProjects.forEach(project => {
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});