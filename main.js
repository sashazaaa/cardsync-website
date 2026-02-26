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

function formatTime(minutes) {
  if (minutes < 60) return `~${Math.round(minutes)} min`;
  return `~${(minutes / 60).toFixed(1)} hours`;
}

function calculateSavings() {
  const orders = parseInt(ordersInput.value) || 0;

  // Manual: ~2 minutes per order (copy address, create shipment, paste tracking)
  const manualMinutes = orders * 2;

  // CardSync: ~4 seconds per order (sync click) + ~2 min fixed (export + carrier import)
  const cardsyncMinutes = (orders * (4 / 60)) + 2;

  const savedMinutes = manualMinutes - cardsyncMinutes;

  if (manualTime) manualTime.textContent = formatTime(manualMinutes);
  if (cardsyncTime) cardsyncTime.textContent = formatTime(cardsyncMinutes);
  if (hoursSavedMonth) {
    const savedHours = (savedMinutes / 60).toFixed(1);
    hoursSavedMonth.textContent = `~${savedHours} hrs/mo`;
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
  const locationState = document.getElementById('modal-location-state');
  const formState = document.getElementById('modal-form-state');
  const successState = document.getElementById('modal-success-state');
  const form = document.getElementById('waitlist-form');

  // Modal open / close / reset
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
    locationState.classList.remove('hidden');
    formState.classList.add('hidden');
    successState.classList.remove('active');
    clearAllErrors();
  }

  // "Somewhere else" card — transition to waitlist form
  document.getElementById('btn-other-country').addEventListener('click', () => {
    locationState.classList.add('hidden');
    formState.classList.remove('hidden');
    document.getElementById('waitlist-country').focus();
  });

  // Open modal on all CTA buttons
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
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
  });

  // Validation helpers
  function showError(field, message) {
    const errorEl = document.getElementById('error-' + field);
    if (errorEl) errorEl.textContent = message;
    const input = document.getElementById('waitlist-' + field);
    if (input) input.classList.add('error');
  }

  function clearError(field) {
    const errorEl = document.getElementById('error-' + field);
    if (errorEl) errorEl.textContent = '';
    const input = document.getElementById('waitlist-' + field);
    if (input) input.classList.remove('error');
  }

  function clearAllErrors() {
    ['country', 'username', 'email', 'orders', 'shipping'].forEach(clearError);
  }

  ['country', 'username', 'email', 'orders', 'shipping'].forEach(field => {
    const input = document.getElementById('waitlist-' + field);
    if (input) input.addEventListener('input', () => clearError(field));
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const country = document.getElementById('waitlist-country').value.trim();
    if (!country) { showError('country', 'Please enter your country'); valid = false; }

    const username = document.getElementById('waitlist-username').value.trim();
    if (!username) { showError('username', 'Please enter your Cardmarket username'); valid = false; }

    const email = document.getElementById('waitlist-email').value.trim();
    if (!email) {
      showError('email', 'Please enter your email address');
      valid = false;
    } else if (!emailRegex.test(email)) {
      showError('email', 'Please enter a valid email address');
      valid = false;
    }

    const orders = document.getElementById('waitlist-orders').value.trim();
    if (!orders) { showError('orders', 'Please enter your monthly order volume'); valid = false; }

    const shipping = document.getElementById('waitlist-shipping').value.trim();
    if (!shipping) { showError('shipping', 'Please enter your shipping provider'); valid = false; }

    if (!valid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    try {
      const response = await fetch('https://app.cardsync.eu/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country,
          cardmarket_username: username,
          email,
          orders_per_month: parseInt(orders),
          shipping_provider: shipping
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');

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
