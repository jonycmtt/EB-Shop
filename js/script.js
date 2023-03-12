let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let logInForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar')

document.querySelector('#search-btn').addEventListener('click', () => {
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    logInForm.classList.remove('active')
    navbar.classList.remove('active')
})
document.querySelector('#cart-btn').addEventListener('click', () => {
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    logInForm.classList.remove('active')
    navbar.classList.remove('active')

})
document.querySelector('#login-btn').addEventListener('click', () => {
    logInForm.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')
})

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    logInForm.classList.remove('active')
    
}
window.onscroll = ()=> {
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    logInForm.classList.remove('active')
    navbar.classList.remove('active')
}

var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay : {
        delay : 3000,
        disableOnInteration : false,
    },
    // centeredSlides : true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
    //   576: {
    //     slidesPerView: 2
    //   },
      650: {
        slidesPerView: 2
      },
      1020: {
        slidesPerView: 3
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay : {
        delay : 3000,
        disableOnInteration : false,
    },
    // centeredSlides : true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      650: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3
      },
    },
  });
