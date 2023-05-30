// region choices
const region = document.querySelectorAll('.header__region-select');

region.forEach((reg) => {
  new Choices(reg, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
  
    classNames: {
      containerOuter: 'choices region-choices',
      containerInner: 'choices__inner region-choices__inner',
    }
  });
})

// category choices
const category = document.querySelectorAll('.header__category-select');

category.forEach((sel) => {
  new Choices(sel, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
    
  
    classNames: {
      containerOuter: 'choices category-choices',
      containerInner: 'choices__inner category-choices__inner',
    }
  });
})

// hero swiper
const swiperHero = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// swiper special 
const swiperSpecial = new Swiper('.special__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 600,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,

  breakpoints: {
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    970: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1330: {
      slidesPerView: "auto",
      slidesPerGroup: 3,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper useful
const swiperUseful = new Swiper('.useful__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 600,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    930: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper catalog
const swiperCatalog = new Swiper('.catalog__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 600,
  slidesPerView: 1,
  slidesPerGroup: 2,

  pagination: {
    el: ".catalog__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// additional cards
if (screen.width < 1025) {
  document.querySelectorAll(".card-dop").forEach(el => el.classList.add("high-rating__card-additional"))
}

const additionalBtn =  document.querySelector('.high-rating__btn-more')
const hideBtn = document.querySelector('.high-rating__btn-hide')

var addCards = gsap.timeline({paused: !0});

addCards.to (".high-rating__card-additional", {display: "flex", duraiton: .3})

additionalBtn.addEventListener('click', function() {
  additionalBtn.classList.add('hidden'),
  hideBtn.classList.remove('hidden'),
  addCards.timeScale(1).play()
}),

hideBtn.addEventListener('click', function() {
  additionalBtn.classList.remove('hidden'),
  hideBtn.classList.add('hidden'),
  addCards.timeScale(2).reverse()
})

// tooltip
tippy('#tooltip', {
  content: "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
  trigger: 'click',
  theme: 'tooltip-theme',
});

// form validate
const contactsValidation = new window.JustValidate('.contacts__form', {
  errorFieldCssClass: 'field-error',
  errorLabelCssClass: 'label-error',
  successFieldCssClass: 'success-field',
  errorLabelStyle: {
    color: '#FF6972',
  },
  focusInvalidField: false,
});

contactsValidation
.addField('#name', [
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Имя слишком короткое',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя слишком длинное',
  },
  {
    rule: 'required',
    errorMessage: 'Введите имя',
  },
])

.addField('#tel', [
  {
    rule: 'minLength',
    value: 11,
    errorMessage: 'Короткий номер',
  },
  {
    rule: 'maxLength',
    value: 11,
    errorMessage: 'Длинный номер',
  },
  {
    rule: 'required',
    errorMessage: 'Введите номер телефона',
  },
  {
    rule: 'customRegexp',
    value: /^\d+$/,
    errorMessage: 'Неверный формат'
  }
])

.addField('#mail', [
  {
    rule: 'required',
    errorMessage: 'Введите почту',
  },
  {
    rule: 'email',
    errorMessage: 'Неверный формат',
  },
]);  

// burger
const burger = document.querySelectorAll('.header-burger');


burger.forEach(el => el.addEventListener('click', function() {
  el.classList.toggle('burger-active')
  document.querySelectorAll('.header__menu').forEach((elem) => elem.classList.toggle('nav-active'))
}))

  



