// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Formular Absenden – Danke-Nachricht (FormSubmit-kompatibel)
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', () => {
    const button = form.querySelector('button');
    if (button) {
      button.textContent = 'Wird gesendet…';
      button.disabled = true;
    }

    // UX-Nachricht (FormSubmit sendet parallel die Mail)
    setTimeout(() => {
      form.innerHTML = `
        <div style="
          background:#f7f7f7;
          padding:25px;
          border-radius:8px;
          text-align:center;
          font-size:1.1rem;
        ">
          <strong>Danke für Ihre E-Mail!</strong><br><br>
          Wir antworten / rufen so früh wie möglich an.
        </div>
      `;
    }, 800);
  });
}
