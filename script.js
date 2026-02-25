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

// Sync button icon with whatever theme the <head> script already applied
try {
    const saved = localStorage.getItem('theme');
    if (saved) applyTheme(saved);
} catch (e) {}

darkToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const theme = isDark ? 'light' : 'dark';
    applyTheme(theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {}
});
