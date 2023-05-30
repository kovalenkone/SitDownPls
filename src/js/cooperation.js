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

// burger
const burger = document.querySelectorAll('.header-burger');


burger.forEach(el => el.addEventListener('click', function() {
  el.classList.toggle('burger-active')
  document.querySelectorAll('.header__menu').forEach((elem) => elem.classList.toggle('nav-active'))
}))