// Language Switching Functionality
let currentLang = 'ro';

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update page title and meta
    document.title = translations[lang].meta.pageTitle;
    document.querySelector('.logo img').alt = translations[lang].meta.logoAlt;

    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update logo text
    document.querySelector('.logo span').textContent = translations[lang].logo.title;

    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach((link) => {
        const key = link.getAttribute('href').replace('#', '');
        link.textContent = translations[lang].nav[key] || link.textContent;
    });

    // Update hero section
    document.querySelector('.hero h1').textContent = translations[lang].hero.title;
    document.querySelector('.hero p').textContent = translations[lang].hero.subtitle;
    document.querySelector('.hero .cta-button').textContent = translations[lang].hero.cta;

    // Update categories section
    document.querySelector('#categories h2').textContent = translations[lang].categories.title;
    
    // Update category cards
    document.querySelectorAll('.category-card').forEach((card, index) => {
        const categoryKeys = ['a1', 'a2', 'a', 'b'];
        const categoryKey = categoryKeys[index];
        if (translations[lang].categories.cards[categoryKey]) {
            const cardData = translations[lang].categories.cards[categoryKey];
            card.querySelector('h3').textContent = cardData.title;
            card.querySelector('p').textContent = cardData.description;
            const ul = card.querySelector('ul');
            ul.innerHTML = '';
            cardData.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                ul.appendChild(li);
            });
        }
    });

    // Update categories notes
    document.querySelector('.categories-notes .note:first-child').textContent = translations[lang].categories.notes.age;
    document.querySelector('.categories-notes .note:last-child').textContent = translations[lang].categories.notes.weight;

    // Update prices section
    document.querySelector('#prices h2').textContent = translations[lang].prices.title;
    const priceHeaders = document.querySelectorAll('#prices th');
    Object.values(translations[lang].prices.columns).forEach((text, index) => {
        if (priceHeaders[index]) priceHeaders[index].textContent = text;
    });
    document.querySelector('.prices-notes .note').textContent = translations[lang].prices.note;

    // Update prices table rows
    const priceRows = document.querySelectorAll('#prices tbody tr');
    Object.values(translations[lang].prices.rows).forEach((rowData, index) => {
        if (priceRows[index]) {
            const cells = priceRows[index].querySelectorAll('td');
            cells[0].textContent = rowData.category;
            cells[1].textContent = rowData.minAge;
            cells[2].textContent = rowData.duration;
            cells[3].textContent = rowData.theory;
            cells[4].textContent = rowData.practice;
        }
    });

    // Update schedule section
    document.querySelector('#schedule h2').textContent = translations[lang].schedule.title;
    const scheduleHeaders = document.querySelectorAll('#schedule th');
    Object.values(translations[lang].schedule.columns).forEach((text, index) => {
        if (scheduleHeaders[index]) scheduleHeaders[index].textContent = text;
    });
    
    // Update schedule rows
    const scheduleRows = document.querySelectorAll('#schedule tbody tr');
    Object.values(translations[lang].schedule.rows).forEach((rowData, index) => {
        if (scheduleRows[index]) {
            const cells = scheduleRows[index].querySelectorAll('td');
            cells[0].textContent = rowData.category;
            cells[1].textContent = rowData.program;
            cells[2].textContent = rowData.startDate;
            cells[3].textContent = rowData.registration;
        }
    });
    
    document.querySelector('.schedule-notes p:first-child').textContent = translations[lang].schedule.note;
    document.querySelector('.schedule-notes p:last-child').textContent = translations[lang].schedule.location;

    // Update contact section
    document.querySelector('#contact h2').textContent = translations[lang].contact.title;
    const phoneInfo = document.querySelector('.info-item:first-child').querySelectorAll('p');
    phoneInfo[0].textContent = translations[lang].contact.phone.fixed;
    phoneInfo[1].textContent = translations[lang].contact.phone.mobile;
    
    document.querySelector('.info-item:nth-child(2) p').textContent = translations[lang].contact.email;
    
    const addressInfo = document.querySelector('.info-item:nth-child(3)');
    addressInfo.querySelector('h4:first-of-type').textContent = translations[lang].contact.headquarters;
    addressInfo.querySelector('p:first-of-type').textContent = translations[lang].contact.mainAddress;
    addressInfo.querySelector('h4:last-of-type').textContent = translations[lang].contact.trainingGrounds;
    const locationPs = addressInfo.querySelectorAll('p:not(:first-of-type)');
    locationPs[0].textContent = translations[lang].contact.locations.riscani;
    locationPs[1].textContent = translations[lang].contact.locations.botanica;

    // Update gallery section
    document.querySelector('#gallery h2').textContent = translations[lang].gallery.title;
    document.querySelectorAll('.gallery-item img').forEach((img, index) => {
        const imageKeys = ['auto1', 'auto2', 'auto3', 'auto4', 'auto5', 'auto6'];
        img.alt = translations[lang].gallery.images[imageKeys[index]];
    });

    // Update footer
    document.querySelector('.footer-info h3').textContent = translations[lang].footer.workHours;
    const footerInfo = document.querySelectorAll('.footer-info p');
    footerInfo[0].textContent = translations[lang].footer.weekdays;
    footerInfo[1].textContent = translations[lang].footer.saturday;
    footerInfo[2].textContent = translations[lang].footer.lessons;
    document.querySelector('.footer-bottom p').textContent = translations[lang].footer.copyright;
}

// Mobile Price Slider Functionality
const priceData = {
    'A1': {
        minAge: '15 ani',
        duration: '3 luni',
        theory: '1 300 lei',
        practice: '18 ore*75 lei = 1 350 lei'
    },
    'A2': {
        minAge: '17 ani',
        duration: '3 luni',
        theory: '1 300 lei',
        practice: '4 ore*75 lei + 14ore*80 lei = 1 420 lei'
    },
    'A': {
        minAge: '23 ani',
        duration: '3 luni',
        theory: '1 300 lei',
        practice: '4 ore*75 lei + 4*80+10*85 = 1 470 lei'
    },
    'B': {
        minAge: '17 ani',
        duration: '3 luni',
        theory: '1 800 lei',
        practice: 'mecanică - 48 ore*140 lei = 6 720 lei\nautomată - 48 ore*130 lei = 6 240 lei'
    },
    'B+A2': {
        minAge: '17 ani',
        duration: '3 luni',
        theory: '2 300 lei',
        practice: '6720 + 1420 = 8 140 lei'
    },
    'B+A': {
        minAge: '23 ani',
        duration: '3 luni',
        theory: '2 300 lei',
        practice: '6720 + 1470 = 8 190 lei'
    },
    'B-A2': {
        minAge: '17 ani',
        duration: '1 lună',
        theory: '1 000 lei',
        practice: '4 ore*75 lei + 8 ore*80 lei = 940 lei'
    },
    'B-A': {
        minAge: '23 ani',
        duration: '1 lună',
        theory: '1 000 lei',
        practice: '4 ore*75 lei + 4*80+4*85 = 960 lei'
    },
    'B-C': {
        minAge: '20 ani',
        duration: '2 luni',
        theory: '1 600 lei',
        practice: '32 ore*200 lei = 6 400 lei'
    },
    'B-C+A2': {
        minAge: '20 ani',
        duration: '2 luni',
        theory: '2 200 lei',
        practice: '6 400 + 940 = 7 340 lei'
    },
    'B-C+D1': {
        minAge: '20 ani',
        duration: '2 luni',
        theory: '2 200 lei',
        practice: '6 400 + 4 800 = 11 200 lei'
    },
    'B-C+D1+A2': {
        minAge: '20 ani',
        duration: '2 luni',
        theory: '2 500 lei',
        practice: '6 400 + 4 800 + 940 = 12 140 lei'
    },
    'B-C+A': {
        minAge: '23 ani',
        duration: '2 luni',
        theory: '2 200 lei',
        practice: '6 400 + 960 = 7 360 lei'
    },
    'B-C+A+D1': {
        minAge: '23 ani',
        duration: '2 luni',
        theory: '2 500 lei',
        practice: '6 400 + 960 + 4 800 = 12 160 lei'
    },
    'BC-CE': {
        minAge: '20 ani',
        duration: '1.5 luni',
        theory: '1 500 lei',
        practice: '14 ore*200 lei = 2 800 lei'
    },
    'BC-CE+A2': {
        minAge: '20 ani',
        duration: '1.5 luni',
        theory: '2 000 lei',
        practice: '2 800 + 940 = 3 740 lei'
    },
    'BC-CE+D1': {
        minAge: '20 ani',
        duration: '2 luni',
        theory: '2 100 lei',
        practice: '2 800 + 4 800 = 7 600 lei'
    },
    'BC-CE+D1+A2': {
        minAge: '20 ani',
        duration: '2 luni',
        theory: '2 500 lei',
        practice: '2 800 + 4 800 + 940 = 8 540 lei'
    },
    'BC-CE+A': {
        minAge: '23 ani',
        duration: '1.5 luni',
        theory: '2 000 lei',
        practice: '2 800 + 960 = 3 760 lei'
    },
    'BC-CE+A+D1': {
        minAge: '23 ani',
        duration: '2 luni',
        theory: '2 500 lei',
        practice: '2 800 + 960 + 4 800 = 8 560 lei'
    },
    'BC-D': {
        minAge: '23 ani',
        duration: '2 luni',
        theory: '1 500 lei',
        practice: '24 ore*220 lei = 5 280 lei'
    },
    'BC-D+CE': {
        minAge: '23 ani',
        duration: '2 luni',
        theory: '2 100 lei',
        practice: '5 280 + 2 800 = 8 080 lei'
    },
    'BC-D+CE+A': {
        minAge: '23 ani',
        duration: '2 luni',
        theory: '2 200 lei',
        practice: '5 280 + 2 800 + 960 = 9 040 lei'
    },
    'A1-A2': {
        minAge: '17 ani',
        duration: '3 săpt.',
        theory: '1 000 lei',
        practice: '12 ore *80 lei = 960 lei'
    },
    'A2-A': {
        minAge: '19 ani',
        duration: '3 săpt.',
        theory: '1 000 lei',
        practice: '12 ore *85 lei = 1 020 lei'
    },
    'B1-B': {
        minAge: '17 ani',
        duration: '1 lună',
        theory: '1 000 lei',
        practice: '30 ore *140 lei = 4 200 lei'
    },
    'C1D1D-C': {
        minAge: '20 ani',
        duration: '3 săpt.',
        theory: '800 lei',
        practice: '16 ore *200 lei = 3 200 lei'
    },
    'D1-D': {
        minAge: '23 ani',
        duration: '3 săpt.',
        theory: '800 lei',
        practice: '16 ore *220 lei = 3 520 lei'
    }
};

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.categories-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        effect: "slide",
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        on: {
            init: function () {
                console.log('Swiper initialized');
                document.querySelectorAll('.swiper-slide').forEach(slide => {
                    slide.style.height = 'auto';
                });
            },
            slideChange: function () {
                console.log('Slide changed');
                this.el.style.transition = 'height 300ms ease';
            }
        }
    });

    // Initialize Gallery Slider
    const gallerySwiper = new Swiper('.gallery-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 800,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.gallery .swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        }
    });

    // Mobile Price Slider
    const categoryTabs = document.querySelectorAll('.category-tab');
    const priceDetails = document.querySelector('.mobile-price-details');

    function updatePriceDetails(category) {
        console.log('Updating category:', category);
        const data = priceData[category];
        console.log('Found data:', data);
        if (!data) {
            console.warn('No data found for category:', category);
            return;
        }

        const detailsTable = priceDetails.querySelector('table');
        detailsTable.innerHTML = `
            <tr>
                <th>Vârsta minimă</th>
                <td>${data.minAge}</td>
            </tr>
            <tr>
                <th>Durata cursurilor</th>
                <td>${data.duration}</td>
            </tr>
            <tr>
                <th>Preț curs teoretic</th>
                <td>${data.theory}</td>
            </tr>
            <tr>
                <th>Preț ore practice</th>
                <td>${data.practice}</td>
            </tr>
        `;
        console.log('Table updated successfully');
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            console.log('Category clicked:', category);
            
            // Update active state
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update price details
            updatePriceDetails(category);

            // Scroll the tab into view
            tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
    });

    // Initialize with first category
    const firstCategory = categoryTabs[0]?.dataset.category;
    if (firstCategory) {
        updatePriceDetails(firstCategory);
    }

    // Set initial active state for language buttons
    document.querySelector('.lang-btn[data-lang="ro"]').classList.add('active');

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Scroll-based Navigation Highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active class style to navigation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .nav-links a.active {
            color: var(--secondary-color);
            font-weight: bold;
        }
    </style>
`);

// Responsive Navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}); 
