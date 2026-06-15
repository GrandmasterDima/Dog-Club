document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form');

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      console.log('Дані форми відправлено:', data);

      const submitBtn = form.querySelector('.form__submit');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Success!';
      submitBtn.style.backgroundColor = '#4caf50';
      submitBtn.style.color = '#fff';

      form.reset();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';

        if (form.name === 'modal-consultation-form') {
          document.querySelector('.backdrop').classList.add('is-hidden');
          document.body.classList.remove('is-scroll-disabled');
        }
      }, 3000);
    });
  });
});
