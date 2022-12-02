let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
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
    centeredSlides: true,
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
    centeredSlides: true,
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

document.getElementById('email').addEventListener('input' , (event) =>{
  event.target.style.borderColor = '#787878'
});
document.getElementById('password').addEventListener('input' , (event) =>{
  [event.target.style.borderColor,document.getElementById('password_repeat').style.borderColor] = ['#787878','#787878'];
});
document.getElementById('password_repeat').addEventListener('input' , (event) =>{
  [event.target.style.borderColor,document.getElementById('password').style.borderColor] = ['#787878','#787878'];
});
document.getElementById('registration_button').addEventListener('click' , (event) => {
  event.preventDefault();
  const mask = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = document.getElementById('email');
  let pass = document.getElementById('password');
  let repeat = document.getElementById('password_repeat');
  let email_att = document.getElementById('email-attention');
  let pass_att = document.getElementById('password-attention');
  let repeat_att = document.getElementById('repeat-attention');
  [email_att.style.visibility, pass_att.style.visibility, repeat_att.style.visibility] = ['visible', 'visible', 'visible'];
  [email.style.borderColor, pass.style.borderColor, repeat.style.borderColor] = ['#EE2424', '#EE2424', '#EE2424'];
  if (String(email.value) === ''){
      email_att.innerText = 'Поле обязательно для заполнения';
  } else if (!(mask.test(String(email.value).toLowerCase()))){
      email_att.innerText = 'Email введён некорректно';
  } else [email_att.style.visibility,email_att.innerText,email.style.borderColor]=['hidden', '', '#787878'];
  if (String(pass.value) === ''){
      pass_att.innerText = 'Поле обязательно для заполнения';
  } else if (String(pass.value).length<8){
      pass_att.innerText = 'Пароль должен содержать не менее 8 символов';
  } else [pass_att.style.visibility,pass_att.innerText,pass.style.borderColor]=['hidden', '', '#787878'];
  if (!(String(pass.value) === String(repeat.value))){
      repeat_att.innerText='Пароли не совпадают';
  } else [repeat_att.style.visibility,repeat_att.innerText,repeat.style.borderColor] = ['hidden', '', '#787878'];
  if ((email_att.innerText + pass_att.innerText + repeat_att.innerText)===''){
      console.log('Email:', email.value, '\nPassword:', password.value, '\nGender:', gendervalue, `\nSelfabout:<\n${document.getElementById('selfabout').value}\n>`, '\nSubscribe:', subcribevalue)
  } 
});