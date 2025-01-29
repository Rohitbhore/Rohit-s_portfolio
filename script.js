document.getElementById('scrollToAboutBtn').addEventListener('click', () => {
    document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme =
        document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});
