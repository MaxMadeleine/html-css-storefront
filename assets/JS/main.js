//#region SW WORKER
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
//#endregion
//#region ADD TO CART
document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            addToCart();
        });
    });

    function addToCart() {
      cartCount++;
      updateCartCount();
    }

    function updateCartCount() {
      document.querySelector('.cartSpan').textContent = cartCount;
    }
  });
  //#endregion
  