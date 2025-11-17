document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav-button');
    const projectGroups = document.querySelectorAll('.project-group');
    const sectionTitles = document.querySelectorAll('.section-title');

    // Functie om de portfolio te filteren
    function filterPortfolio(filter) {
        // Toon/verberg sectietitels
        sectionTitles.forEach(title => {
            const titleId = title.id;
            if (filter === 'all' && titleId === 'eigen-werk') {
                title.classList.remove('hidden');
            } else if (filter === 'events' && titleId === 'events') {
                title.classList.remove('hidden');
            } else {
                title.classList.add('hidden');
            }
        });

        // Toon/verberg projectgroepen
        projectGroups.forEach(group => {
            const groupCategory = group.getAttribute('data-category');
            if (filter === 'all' && groupCategory !== 'events') {
                group.style.display = 'block';
            } else if (groupCategory === filter) {
                group.style.display = 'block';
            } else if (filter === 'all' && groupCategory === 'events') {
                // Verberg events als de filter 'all' is
                group.style.display = 'none';
            } else {
                group.style.display = 'none';
            }
        });
    }

    // Event Listeners voor navigatieknoppen
    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Verwijder 'active' van alle knoppen
            navButtons.forEach(btn => btn.classList.remove('active'));

            // Voeg 'active' toe aan de geklikte knop
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            filterPortfolio(filter);
        });
    });

    // Initial load: Toon alleen 'Creatief Werk'
    filterPortfolio('all');
});