/* =========================================
   MARSHA OLIVIA — PORTFOLIO JAVASCRIPT
   ========================================= */

// ===== FADE UP ON SCROLL =====
const observerFade = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-up').forEach((el) => {
  observerFade.observe(el);
});


// ===== SKILL BAR ANIMATION ON SCROLL =====
const observerSkills = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.skill-card').forEach((card) => {
  observerSkills.observe(card);
});


// ===== MODALS =====
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on backdrop click
document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.active').forEach((modal) => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});


// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerNav = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observerNav.observe(section));


// ===== SMOOTH PROJECT NUMBER PARALLAX =====
document.querySelectorAll('.project-showcase-item').forEach((item) => {
  const num = item.querySelector('.project-showcase-number');
  if (!num) return;

  window.addEventListener('scroll', () => {
    const rect = item.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const viewCenter = window.innerHeight / 2;
    const offset = (center - viewCenter) * 0.06;
    num.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
});


// ===== CURSOR GLOW ON SKILL CARDS =====
document.querySelectorAll('.skill-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', x + 'px');
    card.style.setProperty('--mouse-y', y + 'px');
  });
});


// ===== TYPED TEXT EFFECT ON HERO (optional subtle) =====
const heroName = document.querySelector('.hero-name');
if (heroName) {
  heroName.style.opacity = '0';
  heroName.style.transform = 'translateY(20px)';
  setTimeout(() => {
    heroName.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    heroName.style.opacity = '1';
    heroName.style.transform = 'translateY(0)';
  }, 200);
}


// ===== STAGGERED SKILL CARD ENTRANCE =====
document.querySelectorAll('.skill-category-block').forEach((block) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.skill-card, .soft-skill-item');
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, i * 60);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Set initial hidden state
  const cards = block.querySelectorAll('.skill-card, .soft-skill-item');
  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.45s ease, transform 0.45s ease, border-color 0.25s, box-shadow 0.25s';
  });

  observer.observe(block);
});


// ===== PROJECT ROW ENTRANCE =====
document.querySelectorAll('.project-showcase-item').forEach((item, i) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  item.style.opacity = '0';
  item.style.transform = 'translateY(32px)';
  item.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`;

  observer.observe(item);
});


// ===== EXPERIENCE CARD ENTRANCE =====
document.querySelectorAll('.exp-timeline-item').forEach((item, i) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  item.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;

  observer.observe(item);
});
