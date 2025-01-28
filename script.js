document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';

    // Function to update the theme
    function updateTheme(isDarkMode) {
        body.classList.toggle('dark-mode', isDarkMode);
        moonIcon.style.display = isDarkMode ? 'none' : 'inline-block';
        sunIcon.style.display = isDarkMode ? 'inline-block' : 'none';
    }

    // Set the initial theme
    updateTheme(isDarkMode);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const newIsDarkMode = !body.classList.contains('dark-mode');
        updateTheme(newIsDarkMode);
        localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light'); // Save theme preference
    });

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }

    // Toggle dropdown menu on menu icon click
    menuIcon.addEventListener('click', toggleDropdown);

    // Close dropdown menu if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
