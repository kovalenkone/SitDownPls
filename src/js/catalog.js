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

// slider
const rangeSlider = document.querySelector(".catalog__slider");
const fieldNumberFirst = document.querySelector(".catalog-select__field--from");
const fieldNumberSecond = document.querySelector(".catalog-select__field--to");
const allFields = [fieldNumberFirst, fieldNumberSecond];


if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [30000, 120000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 150000
    }
  });

  rangeSlider.noUiSlider.on("update", (values, handle) => {
    allFields[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let array = [null, null];
    array[i] = value;
    rangeSlider.noUiSlider.set(array);
  };

  allFields.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

// swiper catalog
const swiperCatalog = new Swiper('.catalog__swiper', {
  speed: 500,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 16,
  grid: {
    rows: 3,
    fill: "row"
  },

  breakpoints: {
    750: {
      spaceBetween: 32,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
      grid: {
        rows: 3,
        fill: "row"
      },
    },
  },

  pagination: {
    el: ".catalog__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// filters
// dropdown header
const dropdownButton = document.querySelectorAll('.catalog-select__header');
const dropdownSubmenu = document.querySelectorAll('.catalog-select__body');

dropdownButton.forEach((el, index) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();

    const dropdownSubmenuClassList = dropdownSubmenu[index].classList;
    if (dropdownSubmenuClassList.contains('catalog-select__body--visible')) {
      dropdownSubmenuClassList.remove('catalog-select__body--visible')
      dropdownButton[index].classList.remove('catalog-select__header--active')

    } else {
      dropdownSubmenu.forEach((el) => el.classList.remove('catalog-select__body--visible'))
      dropdownSubmenuClassList.add('catalog-select__body--visible')
      dropdownButton.forEach((el) => el.classList.remove('catalog-select__header--active'))
      dropdownButton[index].classList.add('catalog-select__header--active')
    }
  });
});

// burger
const burger = document.querySelectorAll('.header-burger');

burger.forEach(el => el.addEventListener('click', function() {
  el.classList.toggle('burger-active')
  document.querySelectorAll('.header__menu').forEach((elem) => elem.classList.toggle('nav-active'))
}))
