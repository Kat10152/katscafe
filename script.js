// Nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Dark mode toggle
const darkToggle = document.querySelector('.dark-toggle');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    darkToggle.textContent = theme === 'dark' ? '☀' : '☾';
}

// Apply saved preference, or fall back to OS preference if no preference saved
try {
    const saved = localStorage.getItem('theme');
    const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null);
    if (theme) applyTheme(theme);
} catch (e) {}

darkToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const theme = isDark ? 'light' : 'dark';
    applyTheme(theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {}
});
