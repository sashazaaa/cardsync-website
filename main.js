// ─── i18n ────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    page_title: 'CardSync - Cardmarket shipping, simplified',
    nav_login: 'Log in',
    nav_signup: 'Sign up',
    hero_title: 'Ship Cardmarket orders in minutes, not hours',
    hero_subtitle: 'Generate shipping labels in bulk and sync tracking codes back automatically — no more copy-pasting between Cardmarket and your shipping provider.',
    hero_cta: 'Start shipping faster',
    hero_note: 'Trusted by professional Cardmarket sellers',
    test1_headline: '30–60 orders processed in under 5 minutes',
    test2_headline: 'A lifesaver during pre-sales and new releases',
    how_title: 'Your Cardmarket workflow, without the work',
    how_subtitle: 'CardSync removes all the manual steps between Cardmarket and your shipping provider.',
    step1_label: 'Step 1', step1_title: 'Sync orders',
    step1_desc: 'Our Chrome extension adds a button to Cardmarket order pages. One click syncs the address and shipping details to CardSync.',
    step2_label: 'Step 2', step2_title: 'Create labels in bulk',
    step2_desc: 'Manage orders in the CardSync dashboard. Export to MyParcel or PostNL and buy all your labels at once.',
    step3_label: 'Step 3', step3_title: 'Sync tracking',
    step3_desc: 'CardSync automatically syncs tracking codes from your shipping provider. Add them to Cardmarket with one click.',
    sup_title: 'Live in the Netherlands.<br>Germany coming next.',
    sup_footer: '🇩🇪 German Cardmarket seller? Help us launch in Germany. Early testers get free access for life.',
    sup_cta: 'Get early access',
    comp_title: 'How much time are you wasting on shipping?',
    comp_subtitle: 'See how much manual time CardSync removes from your monthly shipping workflow, without changing how you already ship.',
    comp_manual_label: 'Manually today', comp_cs_label: 'With CardSync',
    comp_r1m: "Manually copy each buyer's address", comp_r1c: 'Sync address details with one click',
    comp_r2m: 'Create shipping labels one by one', comp_r2c: 'Generate shipping labels in bulk',
    comp_r3m: 'Paste tracking codes back into Cardmarket', comp_r3c: 'Sync tracking codes automatically',
    comp_manual_per_month: 'manual work per month', comp_with_cs: 'with CardSync',
    comp_monthly_label: 'Monthly orders:', comp_you_save: 'You save', comp_cta: 'Start saving hours',
    comp_time_unit: 'hrs', comp_time_unit_mo: 'hrs/mo',
    faq_title: 'Frequently asked questions',
    faq1q: 'How does CardSync fit with my existing workflow?',
    faq1a: "CardSync integrates seamlessly with Cardmarket and your shipping provider. You continue using the same platforms you already know - CardSync just automates the copying and pasting between them. Install our Chrome extension, and you'll see sync buttons directly on Cardmarket order pages.",
    faq2q: 'Which shipping providers do you support?',
    faq2a: "We currently support MyParcel and PostNL for Netherlands-based sellers. We're actively adding support for DHL, with more carriers coming based on user demand. If you use a specific carrier, let us know when you sign up!",
    faq3q: 'Is my customer data secure?',
    faq3a: "Absolutely. Buyer addresses are stored only long enough to generate your shipping labels and are automatically deleted once you mark an order as shipped. We don't use tracking cookies, don't share data with third parties, and all data is hosted in the EU. CardSync is GDPR compliant by design. Read our <a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a> for full details.",
    faq4q: 'How much does CardSync cost?',
    faq4a: "CardSync is completely free right now. If we introduce paid plans in the future, all existing users will be notified well in advance and any upgrade will be entirely opt-in — you'll never be charged without actively choosing to do so.",
    faq5q: 'Do I need technical knowledge to use CardSync?',
    faq5a: 'No technical knowledge required! If you can use Cardmarket and your shipping provider\'s website, you can use CardSync. The Chrome extension adds simple "Sync" buttons to your workflow - just click and go. Setup takes less than 5 minutes.',
    faq6q: 'Is CardSync finished, or is it still being developed?',
    faq6a: "CardSync is live and working, but still in active development. We're continuously improving the product and expanding to more countries. As an early user, you'll have direct access to us — your feedback genuinely shapes what we build next.",
    faq7q: 'Can I cancel anytime?',
    faq7a: "Yes, absolutely. During early access, you can stop using CardSync anytime with no obligations. When we launch paid plans in the future, you'll have the option to continue or cancel - no long-term contracts or commitments.",
    foot_tagline: 'Cardmarket shipping, simplified',
    foot_privacy: 'Privacy Policy', foot_terms: 'Terms of Service',
    foot_gdpr: 'GDPR Compliant',
    foot_copy: '© 2026 CardSync. All rights reserved.',
    mod_loc_title: 'Where are you based?',
    mod_loc_intro: "CardSync is currently live in the Netherlands. We're bringing it to more countries soon.",
    mod_nl_note: 'Get started free', mod_other: 'Somewhere else', mod_other_note: 'Get early access',
    mod_form_title: 'Get early access',
    mod_form_intro: "We'll be in touch as soon as we launch in your country.",
    mod_label_country: 'Your country', mod_ph_country: 'e.g. Germany, Belgium…',
    mod_label_username: 'Cardmarket username',
    mod_label_email: 'Email address',
    mod_label_orders: 'Orders per month',
    mod_label_shipping: 'Shipping provider',
    mod_submit: 'Request early access',
    mod_legal: 'By joining, you agree to our <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a> and <a href="terms.html" target="_blank" rel="noopener">Terms of Service</a>.',
    mod_success_title: "You're on the list!",
    mod_success_intro: "We'll reach out as soon as CardSync launches in your country.",
  },
  de: {
    page_title: 'CardSync - Cardmarket-Versand, vereinfacht',
    nav_login: 'Einloggen',
    nav_signup: 'Registrieren',
    hero_title: 'Cardmarket-Bestellungen in Minuten versenden, nicht in Stunden',
    hero_subtitle: 'Versandlabels per Sammelexport erstellen und Sendungsnummern automatisch zurücksynchronisieren — kein manuelles Kopieren mehr zwischen Cardmarket und deinem Versanddienstleister.',
    hero_cta: 'Schneller versenden',
    hero_note: 'Vertraut von professionellen Cardmarket-Verkäufern',
    test1_headline: '30–60 Bestellungen in unter 5 Minuten abgewickelt',
    test2_headline: 'Ein Lebensretter bei Pre-Sales und neuen Releases',
    how_title: 'Dein Cardmarket-Workflow, ohne den Aufwand',
    how_subtitle: 'CardSync entfernt alle manuellen Schritte zwischen Cardmarket und deinem Versanddienstleister.',
    step1_label: 'Schritt 1', step1_title: 'Bestellungen synchronisieren',
    step1_desc: 'Unsere Chrome-Erweiterung fügt auf Cardmarket-Bestellseiten einen Button hinzu. Ein Klick synchronisiert Adresse und Versanddetails mit CardSync.',
    step2_label: 'Schritt 2', step2_title: 'Labels in großen Mengen erstellen',
    step2_desc: 'Bestellungen im CardSync-Dashboard verwalten. Für DHL exportieren und alle Labels auf einmal kaufen.',
    step3_label: 'Schritt 3', step3_title: 'Sendungsverfolgung synchronisieren',
    step3_desc: 'CardSync synchronisiert Sendungsnummern automatisch von deinem Versanddienstleister. Mit einem Klick zu Cardmarket hinzufügen.',
    sup_title: 'Verfügbar in den Niederlanden.<br>Deutschland kommt als Nächstes.',
    sup_footer: '🇩🇪 Du verkaufst auf Cardmarket in Deutschland? Hilf uns beim Start in Deutschland. Frühe Tester erhalten lebenslang kostenlosen Zugang.',
    sup_cta: 'Frühzeitigen Zugang sichern',
    comp_title: 'Wie viel Zeit verschwendest du beim Versand?',
    comp_subtitle: 'Sieh, wie viel manuelle Zeit CardSync aus deinem monatlichen Versand-Workflow entfernt — ohne deinen bisherigen Ablauf zu ändern.',
    comp_manual_label: 'Manuell heute', comp_cs_label: 'Mit CardSync',
    comp_r1m: 'Jede Käuferadresse manuell kopieren', comp_r1c: 'Adressdaten mit einem Klick synchronisieren',
    comp_r2m: 'Versandlabels einzeln erstellen', comp_r2c: 'Versandlabels per Sammelexport erstellen',
    comp_r3m: 'Sendungsnummern zurück in Cardmarket einfügen', comp_r3c: 'Sendungsnummern automatisch synchronisieren',
    comp_manual_per_month: 'manuelle Arbeit pro Monat', comp_with_cs: 'mit CardSync',
    comp_monthly_label: 'Bestellungen pro Monat:', comp_you_save: 'Du sparst', comp_cta: 'Stunden sparen',
    comp_time_unit: 'Std.', comp_time_unit_mo: 'Std./Mo',
    faq_title: 'Häufig gestellte Fragen',
    faq1q: 'Wie fügt sich CardSync in meinen bestehenden Workflow ein?',
    faq1a: 'CardSync integriert sich nahtlos in Cardmarket und deinen Versanddienstleister. Du nutzt weiterhin dieselben Plattformen, die du bereits kennst — CardSync automatisiert nur das Kopieren und Einfügen dazwischen. Installiere unsere Chrome-Erweiterung und sieh Sync-Buttons direkt auf Cardmarket-Bestellseiten.',
    faq2q: 'Welche Versanddienstleister werden unterstützt?',
    faq2a: 'Wir unterstützen derzeit MyParcel und PostNL für Verkäufer in den Niederlanden. Für Deutschland arbeiten wir aktiv an DHL. Weitere Versanddienstleister folgen basierend auf der Nutzernachfrage.',
    faq3q: 'Sind meine Kundendaten sicher?',
    faq3a: 'Absolut. Käuferadressen werden nur so lange gespeichert, bis deine Versandlabels erstellt sind, und automatisch gelöscht, sobald du eine Bestellung als versendet markierst. Wir verwenden keine Tracking-Cookies, teilen keine Daten mit Dritten und alle Daten werden in der EU gehostet. CardSync ist DSGVO-konform by Design. Lies unsere <a href="privacy.html" target="_blank" rel="noopener">Datenschutzrichtlinie</a> für alle Details.',
    faq4q: 'Was kostet CardSync?',
    faq4a: 'CardSync ist derzeit völlig kostenlos. Wenn wir in Zukunft kostenpflichtige Pläne einführen, werden alle bestehenden Nutzer rechtzeitig informiert, und jedes Upgrade ist vollständig optional — du wirst niemals ohne aktive Zustimmung belastet.',
    faq5q: 'Brauche ich technisches Wissen, um CardSync zu nutzen?',
    faq5a: 'Kein technisches Wissen erforderlich! Wenn du Cardmarket und die Website deines Versanddienstleisters bedienen kannst, kannst du CardSync nutzen. Die Chrome-Erweiterung fügt einfache „Sync"-Buttons in deinen Workflow ein — einfach klicken und loslegen. Die Einrichtung dauert weniger als 5 Minuten.',
    faq6q: 'Ist CardSync fertig oder noch in Entwicklung?',
    faq6a: 'CardSync ist live und funktioniert, befindet sich aber noch in aktiver Entwicklung. Wir verbessern das Produkt kontinuierlich und erweitern es auf weitere Länder. Als früher Nutzer hast du direkten Zugang zu uns — dein Feedback beeinflusst wirklich, was wir als Nächstes bauen.',
    faq7q: 'Kann ich jederzeit aufhören?',
    faq7a: 'Ja, absolut. Während des Early Access kannst du CardSync jederzeit ohne Verpflichtungen aufhören zu nutzen. Wenn wir in Zukunft kostenpflichtige Pläne einführen, hast du die Möglichkeit fortzufahren oder aufzuhören — keine Langzeitverträge oder Verpflichtungen.',
    foot_tagline: 'Cardmarket-Versand, vereinfacht',
    foot_privacy: 'Datenschutzrichtlinie', foot_terms: 'Nutzungsbedingungen',
    foot_gdpr: 'DSGVO-konform',
    foot_copy: '© 2026 CardSync. Alle Rechte vorbehalten.',
    mod_loc_title: 'Wo bist du ansässig?',
    mod_loc_intro: 'CardSync ist derzeit live in den Niederlanden. Wir bringen es bald in weitere Länder.',
    mod_nl_note: 'Kostenlos starten', mod_other: 'Anderswo', mod_other_note: 'Frühzeitigen Zugang sichern',
    mod_form_title: 'Frühzeitigen Zugang sichern',
    mod_form_intro: 'Wir melden uns, sobald wir in deinem Land starten.',
    mod_label_country: 'Dein Land', mod_ph_country: 'z.B. Deutschland, Belgien…',
    mod_label_username: 'Cardmarket-Nutzername',
    mod_label_email: 'E-Mail-Adresse',
    mod_label_orders: 'Bestellungen pro Monat',
    mod_label_shipping: 'Versanddienstleister',
    mod_submit: 'Frühzeitigen Zugang anfordern',
    mod_legal: 'Mit der Anmeldung stimmst du unserer <a href="privacy.html" target="_blank" rel="noopener">Datenschutzrichtlinie</a> und den <a href="terms.html" target="_blank" rel="noopener">Nutzungsbedingungen</a> zu.',
    mod_success_title: 'Du stehst auf der Liste!',
    mod_success_intro: 'Wir melden uns, sobald CardSync in deinem Land startet.',
  }
};

let currentLang = 'en';

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.title = t.page_title || document.title;
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('cardsync_lang', lang);
  calculateSavings();
}

function detectLanguage() {
  const stored = localStorage.getItem('cardsync_lang');
  if (stored && TRANSLATIONS[stored]) return stored;
  if (navigator.language && navigator.language.toLowerCase().startsWith('de')) return 'de';
  return 'en';
}

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// ─────────────────────────────────────────────────────────────────────────────

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
  const unit = TRANSLATIONS[currentLang]?.comp_time_unit || 'hrs';
  return `~${(minutes / 60).toFixed(1)} ${unit}`;
}

function calculateSavings() {
  const orders = parseInt(ordersInput.value) || 0;

  // Manual: ~1.5 minutes per order (copy address, create shipment, paste tracking)
  const manualMinutes = orders * 1.5;

  // CardSync: ~4 seconds per order (sync click) + ~2 min fixed (export + carrier import)
  const cardsyncMinutes = (orders * (4 / 60)) + 2;

  const savedMinutes = manualMinutes - cardsyncMinutes;

  if (manualTime) manualTime.textContent = formatTime(manualMinutes);
  if (cardsyncTime) cardsyncTime.textContent = formatTime(cardsyncMinutes);
  if (hoursSavedMonth) {
    const savedHours = (savedMinutes / 60).toFixed(1);
    const unit = TRANSLATIONS[currentLang]?.comp_time_unit_mo || 'hrs/mo';
    hoursSavedMonth.textContent = `~${savedHours} ${unit}`;
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

// Apply language on load
applyLanguage(detectLanguage());
