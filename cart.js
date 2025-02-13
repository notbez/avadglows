function renderCart() {
      const cartContainer = document.getElementById('cart-container');
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartContainer.innerHTML = '';
      cart.forEach(item => {
          cartContainer.innerHTML += `
              <div class="product">
                  <img src="${item.img}" alt="${item.name}" style="width: 40%; height="auto"">
                  <h3>${item.name}</h3>
                  <p>${item.price} ₽</p>
              </div>
          `;
      });
  }
  function clearCart() {
      localStorage.removeItem('cart');
      renderCart();
  }
  renderCart();