function openInvitation() {
    const hero = document.getElementById('heroSection');
    const main = document.getElementById('mainContent');
    const music = document.getElementById('bgMusic');

    hero.classList.add('slide-up');
    setTimeout(() => {
        hero.style.display = 'none';
        main.classList.remove('hidden');
        music.play();
    }, 1000);
}

// Aktifkan tab navbar sesuai scroll
const navItems = document.querySelectorAll('.nav-item');
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 70;
    navItems.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navItems.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Smooth scroll saat klik menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
