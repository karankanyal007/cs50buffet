// Navbar interactivity (no fetch needed since nav bar is now embedded)
document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarLinks = document.querySelector('.navbar-links');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    toggler.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        toggler.innerHTML = navbarLinks.classList.contains('active') ? '<span class="hamburger-icon">✕</span>' : '<span class="hamburger-icon">☰</span>';
    });

    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 600) {
            dropdown.classList.toggle('active');
            e.preventDefault();
        }
    });

    // Page-specific JavaScript
    const path = window.location.pathname.split('/').pop() || 'index.html';

    // Welcome Alerts
    switch (path) {
        case 'index.html':
            alert("Welcome to CS50 Buffet! Explore our coding-inspired menu.");
            break;
        case 'veg.html':
            alert("Explore our Vegetarian Menu!");
            break;
        case 'nonveg.html':
            alert("Explore our Non-Vegetarian Menu!");
            break;
        case 'dessert.html':
            alert("Explore our Dessert Menu!");
            break;
        case 'contact.html':
            alert("We’d love to hear from you!");
            break;
    }

    // Rotating Tips (30-second interval)
    const tips = {
        'index.html': [
            "Check out our Vegetarian delights!",
            "Savor the Non-Vegetarian flavors!",
            "Indulge in our Dessert specialties!"
        ],
        'veg.html': [
            "Python Pesto Pasta: A fresh twist!",
            "Java Jalfrezi: Spicy and vibrant!",
            "Ruby Risotto: Creamy and bold!",
            "C# Curry: Smooth and balanced!"
        ],
        'nonveg.html': [
            "C++ Chicken Curry: Spicy and bold!",
            "Go Grilled Salmon: Fresh and tangy!",
            "Swift Sizzling Steak: Hot and fast!",
            "Rust Roast Lamb: Rich and earthy!"
        ],
        'dessert.html': [
            "Perl Panna Cotta: Silky and sweet!",
            "Kotlin Key Lime Pie: Zesty and fresh!",
            "Elixir Eton Mess: Chaotically delicious!",
            "Scala Sorbet: Cool and refreshing!"
        ],
        'contact.html': [
            "Send us your feedback!",
            "Questions? We’re here to help!",
            "Contact us for reservations!"
        ]
    };

    let tipIndex = 0;
    const pageTips = tips[path] || [];
    if (pageTips.length > 0) {
        setInterval(() => {
            alert(pageTips[tipIndex]);
            tipIndex = (tipIndex + 1) % pageTips.length;
        }, 30000); // 30 seconds
    }

    // Interactive Elements
    if (path === 'index.html') {
        const buttons = document.querySelectorAll('.menu-buttons-Vegetarian a, .menu-buttons-Non-Vegetarian a, .menu-buttons-Dessert a');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = 'scale(1)';
                }, 100);
            });
        });
    } else if (path === 'veg.html' || path === 'nonveg.html' || path === 'dessert.html') {
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 100);
            });
        });
    } else if (path === 'contact.html') {
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            form.reset();
        });

        const button = document.querySelector('button');
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    }
});
