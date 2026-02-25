// Nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Dark mode toggle
const darkToggle = document.querySelector('.dark-toggle');

darkToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const theme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    darkToggle.textContent = theme === 'dark' ? '☀' : '☾';
    localStorage.setItem('theme', theme);
});
