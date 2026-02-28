// ===========================
//   WANDERLUST – TOURS & TRAVELS
//   script.js
// ===========================

/* ---- Packages Data ---- */
const packages = [
  /* ---- ADVENTURE (3) ---- */
  {
    id: 1, category: "adventure",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop",
    badge: "Adventure", title: "Swiss Alps Trek",
    desc: "Alpine trails, glacier hikes, paragliding over Interlaken & scenic Jungfrau rail journey.",
    days: "10 Days", people: "4 People",
    price: "₹1,24,999", perUnit: "per person"
  },
  {
    id: 2, category: "adventure",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop",
    badge: "Adventure", title: "Himalayan Odyssey",
    desc: "Kedarkantha summit, village homestays, river rafting in Rishikesh & sunrise yoga sessions.",
    days: "12 Days", people: "8 People",
    price: "₹45,999", perUnit: "per person"
  },
  {
    id: 3, category: "adventure",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop",
    badge: "Adventure", title: "Patagonia Wild",
    desc: "Torres del Paine trekking, glacier walks, kayaking through fjords & wild camping under stars.",
    days: "14 Days", people: "6 People",
    price: "₹1,89,999", perUnit: "per person"
  },

  /* ---- BEACH (3) ---- */
  {
    id: 4, category: "beach",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",
    badge: "Beach", title: "Maldives Paradise",
    desc: "7 nights in an overwater bungalow with sunset cruises, snorkelling & private beach dinners.",
    days: "8 Days", people: "2 People",
    price: "₹89,999", perUnit: "per person"
  },
  {
    id: 5, category: "beach",
    img:"https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&auto=format&fit=crop",
    badge: "Beach", title: "Phuket Sun & Sea",
    desc: "Phi Phi islands tour, snorkelling, Thai massage retreats & beachfront villa stay.",
    days: "6 Days", people: "4 People",
    price: "₹59,999", perUnit: "per person"
  },
  {
    id: 6, category: "beach",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop",
    badge: "Beach", title: "Goa Sun Retreat",
    desc: "North & South Goa beach hopping, water sports, shack dining, spice plantation tour & more.",
    days: "5 Days", people: "4 People",
    price: "₹29,999", perUnit: "per person"
  },

  /* ---- CULTURAL (3) ---- */
  {
    id: 7, category: "cultural",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop",
    badge: "Cultural", title: "Tokyo Immersion",
    desc: "Temples, cherry blossoms, Tsukiji market, anime districts & traditional tea ceremony.",
    days: "9 Days", people: "2 People",
    price: "₹1,09,999", perUnit: "per person"
  },
  {
    id: 8, category: "cultural",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop",
    badge: "Cultural", title: "Bali Serenity",
    desc: "Rice terraces, Uluwatu temple, yoga retreat in Ubud & traditional Kecak fire dance.",
    days: "7 Days", people: "2 People",
    price: "₹65,999", perUnit: "per person"
  },
  {
    id: 9, category: "cultural",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop",
    badge: "Cultural", title: "Rajasthan Royal",
    desc: "Jaipur palaces, Jodhpur forts, Jaisalmer desert safari & camel ride at sunset.",
    days: "8 Days", people: "4 People",
    price: "₹38,999", perUnit: "per person"
  },

  /* ---- LUXURY (3) ---- */
  {
    id: 10, category: "luxury",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop",
    badge: "Luxury", title: "Santorini Escape",
    desc: "Cliffside infinity pools, wine tasting in Oia, private catamaran tours & 5-star resort stay.",
    days: "6 Days", people: "2 People",
    price: "₹1,09,999", perUnit: "per person"
  },
  {
    id: 11, category: "luxury",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&auto=format&fit=crop",
    badge: "Luxury", title: "Venice Romance",
    desc: "Gondola serenades, Murano glass blowing, Doge's Palace & exclusive Venetian masquerade ball.",
    days: "5 Days", people: "2 People",
    price: "₹1,14,999", perUnit: "per person"
  },
  {
    id: 12, category: "luxury",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop",
    badge: "Luxury", title: "Dubai Grandeur",
    desc: "Burj Khalifa suite, desert dune dinner, yacht cruise, gold souk & world-class spa day.",
    days: "6 Days", people: "2 People",
    price: "₹1,34,999", perUnit: "per person"
  }
];

/* ---- Render Packages ---- */
function renderPackages(filter = "all") {
  const grid = document.getElementById("packageGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const filtered = filter === "all" ? packages : packages.filter(p => p.category === filter);
  filtered.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "pkg-card";
    card.innerHTML = `
      <div class="pkg-img" style="background-image:url('${pkg.img}')">
        <span class="pkg-badge">${pkg.badge}</span>
      </div>
      <div class="pkg-body">
        <h3>${pkg.title}</h3>
        <p>${pkg.desc}</p>
        <div class="pkg-meta">
          <span><i class="fas fa-clock"></i> ${pkg.days}</span>
          <span><i class="fas fa-users"></i> ${pkg.people}</span>
        </div>
        <div class="pkg-footer">
          <div class="pkg-price">
            ${pkg.price}
            <small>${pkg.perUnit}</small>
          </div>
          <button class="btn-sm" onclick="bookPackage('${pkg.title}')">Book Now</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Observe newly added cards for scroll reveal
  grid.querySelectorAll(".pkg-card").forEach(card => {
    card.classList.add("reveal-card");
    revealObserver.observe(card);
  });
}

/* ---- Filter Buttons ---- */
function initFilterBtns() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPackages(btn.dataset.filter);
    });
  });
}

/* ---- Book Package ---- */
function bookPackage(name) {
  const contact = document.getElementById("contact");
  const destInput = document.querySelector('.contact-form input[type="text"]');
  if (contact) contact.scrollIntoView({ behavior: "smooth" });
  if (destInput) {
    setTimeout(() => {
      const inputs = document.querySelectorAll('.contact-form input');
      inputs.forEach(inp => {
        if (inp.placeholder === "Destination Interested In") {
          inp.value = name;
          inp.focus();
        }
      });
    }, 600);
  }
}

/* ---- Navbar Scroll ---- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
    document.getElementById("backToTop").classList.toggle("show", window.scrollY > 400);
  });
}

/* ---- Hamburger Menu ---- */
function initHamburger() {
  const ham = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      ham.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

/* ---- Smooth Scroll for Anchor Links ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ---- Counter Animation ---- */
function animateCounters() {
  const counters = document.querySelectorAll(".stat-num");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current).toLocaleString();
        }, 16);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ---- Testimonial Slider ---- */
let currentSlide = 0;
const slidesPerView = () => window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

function initSlider() {
  const track = document.getElementById("testimonialTrack");
  const dotsContainer = document.getElementById("sliderDots");
  if (!track || !dotsContainer) return;

  const cards = track.querySelectorAll(".testimonial-card");
  const total = cards.length;

  function update() {
    const perView = slidesPerView();
    const maxSlide = total - perView;
    currentSlide = Math.min(currentSlide, maxSlide);
    currentSlide = Math.max(currentSlide, 0);
    const cardWidth = cards[0].offsetWidth + 28;
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

    // Dots
    dotsContainer.innerHTML = "";
    for (let i = 0; i <= maxSlide; i++) {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === currentSlide ? " active" : "");
      dot.addEventListener("click", () => { currentSlide = i; update(); });
      dotsContainer.appendChild(dot);
    }
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    const perView = slidesPerView();
    if (currentSlide < track.querySelectorAll(".testimonial-card").length - perView) {
      currentSlide++; update();
    }
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentSlide > 0) { currentSlide--; update(); }
  });

  update();
  window.addEventListener("resize", update);

  // Auto-slide
  setInterval(() => {
    const perView = slidesPerView();
    const maxSlide = total - perView;
    currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
    update();
  }, 4000);
}

/* ---- Scroll Reveal ---- */
const revealStyle = document.createElement("style");
revealStyle.textContent = `
  .reveal-card {
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .reveal-card.revealed {
    opacity: 1 !important; transform: translateY(0) !important;
  }
`;
document.head.appendChild(revealStyle);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll(".dest-card, .service-card, .pkg-card").forEach(card => {
    card.classList.add("reveal-card");
    revealObserver.observe(card);
  });
}

function initScrollReveal() {
  // Observe static cards (dest, service)
  document.querySelectorAll(".dest-card, .service-card").forEach(card => {
    card.classList.add("reveal-card");
    revealObserver.observe(card);
  });
}

/* ---- Contact Form ---- */
function handleContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById("formSuccess");

  btn.textContent = "Sending...";
  btn.disabled = true;

  setTimeout(() => {
    success.classList.add("show");
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = "#4caf50";
    e.target.reset();
    setTimeout(() => {
      success.classList.remove("show");
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = "";
      btn.disabled = false;
    }, 4000);
  }, 1500);
}

/* ---- Search Handler ---- */
function handleSearch() {
  const dest = document.getElementById("searchDest").value.trim();
  const date = document.getElementById("searchDate").value;
  const people = document.getElementById("searchPeople").value;

  if (!dest) {
    document.getElementById("searchDest").focus();
    document.getElementById("searchDest").style.borderBottom = "2px solid var(--gold)";
    return;
  }

  const section = document.getElementById("packages");
  section.scrollIntoView({ behavior: "smooth" });

  // Try to find matching category
  const lower = dest.toLowerCase();
  const map = {
    "beach": ["maldives", "beach", "phuket", "goa", "bali", "sea", "ocean"],
    "adventure": ["trek", "hike", "mountain", "alps", "himalaya", "adventure", "patagonia"],
    "cultural": ["tokyo", "japan", "bali", "culture", "heritage", "venice", "europe"],
    "luxury": ["luxury", "resort", "spa", "honeymoon", "santorini"]
  };

  let matched = "all";
  for (const [cat, keywords] of Object.entries(map)) {
    if (keywords.some(k => lower.includes(k))) { matched = cat; break; }
  }

  setTimeout(() => {
    document.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.filter === matched);
    });
    renderPackages(matched);
  }, 600);
}

/* ---- Newsletter ---- */
function subscribeNewsletter() {
  const input = document.querySelector(".newsletter-form input");
  if (!input.value || !input.value.includes("@")) {
    input.style.borderColor = "var(--gold)";
    input.focus();
    return;
  }
  const btn = document.querySelector(".newsletter-form button");
  btn.innerHTML = '<i class="fas fa-check"></i>';
  btn.style.background = "#4caf50";
  input.value = "Thanks for subscribing!";
  input.disabled = true;
}

/* ---- Back to Top ---- */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  renderPackages();
  initFilterBtns();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  animateCounters();
  initSlider();
  initScrollReveal();
});
