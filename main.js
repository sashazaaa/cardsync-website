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

  // 2 minutes manual vs 20 seconds with CardSync
  const manualMinutes = orders * 2;
  const cardsyncMinutes = orders * (20 / 60); // 20 seconds = 0.333 minutes
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
