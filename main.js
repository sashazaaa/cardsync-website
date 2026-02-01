// Mobile menu
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('active');
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      hamburger.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    });

    // Close menu when clicking a link or CTA
    mobileMenu.querySelectorAll('a, .btn-waitlist').forEach(el => {
      el.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        hamburger.setAttribute('aria-label', 'Open menu');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        hamburger.setAttribute('aria-label', 'Open menu');
      }
    });
  }
})();

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Time savings calculator
const ordersInput = document.getElementById('orders-input');
const manualTime = document.getElementById('manual-time');
const cardsyncTime = document.getElementById('cardsync-time');
const hoursSavedMonth = document.getElementById('hours-saved-month');

function calculateSavings() {
  const orders = parseInt(ordersInput.value) || 0;

  // 2 minutes manual vs 10 seconds with CardSync
  const manualMinutes = orders * 2;
  const cardsyncMinutes = orders * (10 / 60); // 10 seconds per order
  const savedMinutes = manualMinutes - cardsyncMinutes;

  const manualHours = (manualMinutes / 60).toFixed(1);
  const cardsyncHours = (cardsyncMinutes / 60).toFixed(1);
  const savedHours = (savedMinutes / 60).toFixed(1);

  // Update displays
  if (manualTime) {
    manualTime.textContent = `~${manualHours} hours`;
  }
  if (cardsyncTime) {
    cardsyncTime.textContent = `~${cardsyncHours} hours`;
  }
  if (hoursSavedMonth) {
    hoursSavedMonth.textContent = `~${savedHours} hours/month`;
  }
}

if (ordersInput) {
  ordersInput.addEventListener('input', calculateSavings);
  calculateSavings(); // Initial calculation
}

// Waitlist Modal
(function () {
  const overlay = document.getElementById('waitlist-modal');
  const closeBtn = document.getElementById('modal-close');
  const formState = document.getElementById('modal-form-state');
  const successState = document.getElementById('modal-success-state');
  const form = document.getElementById('waitlist-form');

  // Country dropdown elements
  const countrySelect = document.getElementById('country-select');
  const countryTrigger = document.getElementById('country-trigger');
  const countryValue = document.getElementById('country-value');
  const countryDropdown = document.getElementById('country-dropdown');
  const countrySearch = document.getElementById('country-search');
  const countryList = document.getElementById('country-list');

  const countries = [
    'Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium',
    'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
    'Denmark', 'Estonia', 'Finland', 'France', 'Germany',
    'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy',
    'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands',
    'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania',
    'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia',
    'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine',
    'United Kingdom', 'Vatican City'
  ];

  let selectedCountry = 'Netherlands';

  // Build country list
  function renderCountryList(filter) {
    const query = (filter || '').toLowerCase();
    const filtered = countries.filter(c => c.toLowerCase().includes(query));
    countryList.innerHTML = '';
    filtered.forEach(country => {
      const li = document.createElement('li');
      li.textContent = country;
      li.setAttribute('role', 'option');
      if (country === selectedCountry) li.classList.add('selected');
      li.addEventListener('click', () => {
        selectedCountry = country;
        countryValue.textContent = country;
        closeCountryDropdown();
        clearError('country');
      });
      countryList.appendChild(li);
    });
  }

  function openCountryDropdown() {
    countrySelect.classList.add('open');
    countrySearch.value = '';
    renderCountryList('');
    setTimeout(() => countrySearch.focus(), 0);
  }

  function closeCountryDropdown() {
    countrySelect.classList.remove('open');
  }

  countryTrigger.addEventListener('click', () => {
    if (countrySelect.classList.contains('open')) {
      closeCountryDropdown();
    } else {
      openCountryDropdown();
    }
  });

  countrySearch.addEventListener('input', () => {
    renderCountryList(countrySearch.value);
  });

  // Close country dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!countrySelect.contains(e.target)) {
      closeCountryDropdown();
    }
  });

  // Modal open / close
  function openModal() {
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function resetModal() {
    form.reset();
    selectedCountry = 'Netherlands';
    countryValue.textContent = 'Netherlands';
    formState.classList.remove('hidden');
    successState.classList.remove('active');
    clearAllErrors();
  }

  document.querySelectorAll('.btn-waitlist').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      resetModal();
      openModal();
    });
  });

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Validation helpers
  function showError(field, message) {
    const errorEl = document.getElementById('error-' + field);
    if (errorEl) errorEl.textContent = message;
    // Add error class to input
    if (field === 'country') {
      countryTrigger.classList.add('error');
    } else {
      const input = document.getElementById('waitlist-' + field);
      if (input) input.classList.add('error');
    }
  }

  function clearError(field) {
    const errorEl = document.getElementById('error-' + field);
    if (errorEl) errorEl.textContent = '';
    if (field === 'country') {
      countryTrigger.classList.remove('error');
    } else {
      const input = document.getElementById('waitlist-' + field);
      if (input) input.classList.remove('error');
    }
  }

  function clearAllErrors() {
    ['country', 'username', 'email', 'orders', 'shipping'].forEach(clearError);
  }

  // Clear error on input
  ['username', 'email', 'orders', 'shipping'].forEach(field => {
    const input = document.getElementById('waitlist-' + field);
    if (input) {
      input.addEventListener('input', () => clearError(field));
    }
  });

  // Strip non-digits from orders field
  const ordersField = document.getElementById('waitlist-orders');
  if (ordersField) {
    ordersField.addEventListener('input', () => {
      ordersField.value = ordersField.value.replace(/\D/g, '');
    });
  }

  // Form submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearAllErrors();

    let valid = true;

    if (!selectedCountry) {
      showError('country', 'Please select a country');
      valid = false;
    }

    const username = document.getElementById('waitlist-username').value.trim();
    if (!username) {
      showError('username', 'Please enter your Cardmarket username');
      valid = false;
    }

    const email = document.getElementById('waitlist-email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError('email', 'Please enter your email address');
      valid = false;
    } else if (!emailRegex.test(email)) {
      showError('email', 'Please enter a valid email address');
      valid = false;
    }

    const orders = document.getElementById('waitlist-orders').value.trim();
    if (!orders) {
      showError('orders', 'Please enter your monthly order volume');
      valid = false;
    }

    const shipping = document.getElementById('waitlist-shipping').value.trim();
    if (!shipping) {
      showError('shipping', 'Please enter your shipping provider');
      valid = false;
    }

    if (!valid) return;

    // Submit to backend API
    const API_URL = 'https://app.cardsync.eu/api/waitlist';

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country: selectedCountry,
          cardmarket_username: username,
          email,
          orders_per_month: parseInt(orders),
          shipping_provider: shipping
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Show success state
      formState.classList.add('hidden');
      successState.classList.add('active');
    } catch (err) {
      showError('email', err.message || 'Failed to submit. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
})();
