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

// swiper similar

const similarSpecial = new Swiper('.similar__swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 600,
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 16,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); 

// modal
const modal = new GraphModal();

// form validate
const modalValidation = new window.JustValidate('.one-click__form', {
  errorFieldCssClass: 'field-error',
  errorLabelCssClass: 'label-error',
  successFieldCssClass: 'success-field',
  errorLabelStyle: {
    color: '#FF6972',
  },
  focusInvalidField: false,
});

modalValidation
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
 
// burger
const burger = document.querySelectorAll('.header-burger');


burger.forEach(el => el.addEventListener('click', function() {
  el.classList.toggle('burger-active')
  document.querySelectorAll('.header__menu').forEach((elem) => elem.classList.toggle('nav-active'))
})) 

// product swiper
var prodSwiper = new Swiper(".product__swiper", {
  spaceBetween: 10,
  thumbs: {
    swiper: {
      el: ".product-preview__swiper",
      slidesPerView: "auto",
      direction: 'horizontal',
      freeMode: true,
      spaceBetween: 38,
      
      breakpoints: {
        601: {
          direction: 'vertical',
          freeMode: false,
          spaceBetween: 0,
        },

        971: {
          direction: 'horizontal',  
          spaceBetween: 38,
          freeMode: true,
        },
      },
    }
  },
});

// view swiper
var viewSwiper = new Swiper(".view__swiper", {
  spaceBetween: 100,
  thumbs: {
    swiper: {
      el: ".view-preview__swiper",
      slidesPerView: "auto",
      spaceBetween: 78,

      navigation: {
        nextEl: '.view__button-next',
        prevEl: '.view__button-prev',
      },
    }
  },
});


