document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.fodder-card__btn');
  const cartBtn = document.querySelector('.cart-btn');

  let cartCount = parseInt(localStorage.getItem('dogClubCart')) || 0;

  const updateCartBadge = () => {
    let badge = document.querySelector('.cart-btn__badge');

    if (!badge && cartCount > 0) {
      badge = document.createElement('span');
      badge.classList.add('cart-btn__badge');

      badge.style.position = 'absolute';
      badge.style.top = '-5px';
      badge.style.right = '-8px';
      badge.style.backgroundColor = 'var(--color-brand-normal)';
      badge.style.color = 'white';
      badge.style.fontSize = '12px';
      badge.style.fontWeight = 'bold';
      badge.style.width = '20px';
      badge.style.height = '20px';
      badge.style.borderRadius = '50%';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';

      cartBtn.style.position = 'relative';
      cartBtn.appendChild(badge);
    }

    if (badge) {
      badge.textContent = cartCount;
    }
  };

  updateCartBadge();

  buyButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      cartCount++;
      localStorage.setItem('dogClubCart', cartCount);
      updateCartBadge();

      const originalText = btn.textContent;
      btn.textContent = 'Added!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 1000);
    });
  });
});
