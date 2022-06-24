// tabs
const tabsBtn = document.querySelectorAll(".catalog__btn");
const tabsItems = document.querySelectorAll(".catalog__slider-tab");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function (){

    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);


    if (! currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function(item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }

  });
}

document.querySelector('.catalog__btn').click();

// nav btn


(function(){
  const navBtnMain = document.querySelector('.nav__btn-main');
  const navBtnMenu = document.querySelector('.nav__btn-menu');
  const menu = document.querySelector('.menu');

  navBtnMain.addEventListener("click", () => {

    if (! navBtnMain.classList.contains('open')) {
      navBtnMain.classList.add('open');
      navBtnMenu.classList.add('open');
      menu.classList.add('open');
    } else {
      navBtnMain.classList.remove('open');
      navBtnMenu.classList.remove('open');
      menu.classList.remove('open');
    }
  });

  navBtnMenu.addEventListener("click", () => {

    if (! navBtnMain.classList.contains('open')) {
      navBtnMain.classList.add('open');
      navBtnMenu.classList.add('open');
      menu.classList.add('open');
    } else {
      navBtnMain.classList.remove('open');
      navBtnMenu.classList.remove('open');
      menu.classList.remove('open');
    }
  });

}());

// swiper slider

const swiper = new Swiper('.catalog__slider-tab', {
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});









