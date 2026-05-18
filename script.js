document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme Toggling Logic
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    const logoImg = document.getElementById('logo-img');
    const footerLogoImg = document.getElementById('footer-logo-img');

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    // Apply initial theme
    applyTheme(isDark);

    function applyTheme(dark) {
        if (dark) {
            htmlElement.classList.add('dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            mobileThemeIcon.classList.replace('fa-moon', 'fa-sun');
            if (logoImg) logoImg.src = './public/logos/darklogo.png?v=2';
            if (footerLogoImg) footerLogoImg.src = './public/logos/darklogo.png?v=2';
        } else {
            htmlElement.classList.remove('dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            mobileThemeIcon.classList.replace('fa-sun', 'fa-moon');
            if (logoImg) logoImg.src = './public/logos/lightlogo.png?v=2';
            if (footerLogoImg) footerLogoImg.src = './public/logos/lightlogo.png?v=2';
        }
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        isDark = dark;
    }

    themeToggleBtn.addEventListener('click', () => applyTheme(!isDark));
    mobileThemeToggleBtn.addEventListener('click', () => applyTheme(!isDark));

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-light-bg', 'dark:bg-dark-bg', 'shadow-md');
            header.classList.remove('bg-transparent', 'py-4');
            header.classList.add('py-2');
        } else {
            header.classList.remove('bg-light-bg', 'dark:bg-dark-bg', 'shadow-md');
            header.classList.add('bg-transparent', 'py-4');
            header.classList.remove('py-2');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('i');

        btn.addEventListener('click', () => {
            const isOpen = !content.classList.contains('hidden');

            // Close all others
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-content').classList.add('hidden');
                otherItem.querySelector('i').style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Form Submissions
    const contactForm = document.getElementById('contactForm');
    const contactMsg = document.getElementById('contact-msg');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        try {
            const response = await fetch('./backend/submit_contact.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            contactMsg.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
            if (response.ok && result.status === 'success') {
                contactMsg.classList.add('bg-green-100', 'text-green-700');
                contactMsg.textContent = result.message || "Message sent successfully!";
                contactForm.reset();
            } else {
                contactMsg.classList.add('bg-red-100', 'text-red-700');
                contactMsg.textContent = result.message || "Could not send message. Please try again.";
            }
        } catch (error) {
            contactMsg.classList.remove('hidden', 'bg-green-100', 'text-green-700');
            contactMsg.classList.add('bg-red-100', 'text-red-700');
            contactMsg.textContent = "Error sending message. Please try again.";
            console.error('Error:', error);
        }

        setTimeout(() => contactMsg.classList.add('hidden'), 5000);
    });

    const appForm = document.getElementById('appForm');
    const appMsg = document.getElementById('app-msg');

    appForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(appForm);

        try {
            const response = await fetch('./backend/submit_application.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            appMsg.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
            if (response.ok && result.status === 'success') {
                appMsg.classList.add('bg-green-100', 'text-green-700');
                appMsg.textContent = result.message || "Application submitted successfully!";
                appForm.reset();
            } else {
                appMsg.classList.add('bg-red-100', 'text-red-700');
                appMsg.textContent = result.message || "Could not submit application. Please try again.";
            }
        } catch (error) {
            appMsg.classList.remove('hidden', 'bg-green-100', 'text-green-700');
            appMsg.classList.add('bg-red-100', 'text-red-700');
            appMsg.textContent = "Error submitting application. Please try again.";
            console.error('Error:', error);
        }

        setTimeout(() => appMsg.classList.add('hidden'), 5000);
    });
});
