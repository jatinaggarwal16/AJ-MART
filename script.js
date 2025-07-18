let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
        searchForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }



    var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 20,

        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
       
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
          
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
      });


      var swiper = new Swiper(".review-slider", {
        loop:true,
        spaceBetween: 20,

        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
       
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
          
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
      });

      window.addEventListener('DOMContentLoaded', () => {
        fetch('php/get-products.php')
          .then(res => res.json())
          .then(products => {
            const container = document.querySelector('.product-list');
            container.innerHTML = products.map(product => `
              <div class="product-box">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button class="btn">Add to Cart</button>
              </div>
            `).join('');
          });
      });

      
      document.querySelector('.login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
      
        const res = await fetch('php/login.php', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ email, password })
        });
      
        const data = await res.json();
        alert(data.success ? 'Login Successful!' : 'Invalid credentials');
      });