window.onload = function () {

  window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let a = document.querySelector('.up-arrow');
    if (scrolled > 600) {
      a.style.bottom = '10px';
    }
    if (scrolled < 600) {
      a.style.bottom = '-70px';
    }
  }

  // плавная прокрутка документа
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    });
  };

  const popup = document.querySelector('.popup');
  const popupBackground = popup.querySelector('.popup__bg');
  const popupClose = popup.querySelector('.form__close');
  const body = document.querySelector('body');
  const mainImgLogoWrap = document.querySelectorAll('.main-title__img');
  const mainImgLogo = document.querySelector('#main-title-img-logo');
  const mainButton = document.querySelectorAll('.main-title__button');
  const mainNavigation = document.querySelector('.navigation');
  const mainNavigationChild = mainNavigation.querySelectorAll('.navigation__element');
  const mainTitleWrap = document.querySelector('.main-title__wrap');

  // меню гамбургер на маленьких разрешениях
  const menu = document.querySelector('.mobile-menu');
  const menuSmall = document.querySelector('.small-menu');
  const menuGamburger = document.querySelector('.gamburger');
  const smallMenuWrap = document.querySelector('.small-menu__wrap');
  const smallMenuWrapLink = smallMenuWrap.querySelectorAll('a');
  // активно ли меню
  let menuActive = false;

  function closeMenu() {
    menuSmall.classList.remove('active');
    menuGamburger.classList.remove('active');
    body.style.overflowY = 'auto';
    menuActive = false;
  };

  menu.addEventListener('click', function () {
    if (menuActive === false) {
      menuSmall.classList.add('active');
      menuGamburger.classList.add('active');
      body.style.overflowY = 'hidden';
      menuActive = true;
    } else if (menuActive === true) {
      closeMenu();
    }
  });

  smallMenuWrapLink.forEach(smallMenuWrapLink => {
    smallMenuWrapLink.addEventListener('click', function () {
      closeMenu();
    });
  });

  // открытие попапа
  mainTitleWrap.addEventListener('click', function (event) {
    target = event.target;
    if (target.classList == 'main-title__button') {
      popup.style.display = 'flex';
      body.style.overflowY = 'hidden';
    }
  });

  // закрытие попапа
  popupBackground.addEventListener('click', function () {
    popup.style.display = 'none';
    body.style.overflowY = 'auto';
  });
  popupClose.addEventListener('click', function () {
    popup.style.display = 'none';
    body.style.overflowY = 'auto';
  });


  for (let i = 0; i < mainImgLogoWrap.length; i++) {
    mainImgLogoWrap[i].style.width = mainImgLogo.offsetWidth + 20 + 'px';
    mainImgLogoWrap[i].style.height = mainImgLogo.offsetHeight + 20 + 'px';
    mainImgLogoWrap[i].style.marginTop = '-' + mainImgLogoWrap[i].offsetHeight / 2 + 'px';
    mainButton[i].style.marginBottom = '-' + mainButton[i].offsetHeight / 2 + 'px';
  }

  mainNavigationChild[0].classList.add('active');


  function mainSlider(event) {
    target = event.target;

    if (target.className != 'navigation__element') {
      return;
    }

    for (let i = 0; i < mainNavigationChild.length; i++) {
      if (target == mainNavigationChild[i]) {
        mainNavigationChild[i].classList.add('active');
        mainTitleWrap.style.transform = 'translateX(-' + i * 100 + '%)';
      } else {
        mainNavigationChild[i].classList.remove('active');
      }
    }
  };

  mainNavigation.addEventListener('click', mainSlider);


  const about = document.querySelector('.about');
  const aboutMenu = about.querySelector('.menu');
  const aboutMenuItem = aboutMenu.querySelectorAll('li');
  const aboutContent = about.querySelectorAll('.content');
  const aboutContentWrap = about.querySelector('.content__wrap');

  aboutMenuItem[0].classList.add('active');

  for (let i = 0; i < aboutContent.length; i++) {
    aboutContent[i].style.left = 50 + (i * 100) + '%';
  }

  function aboutSlider(event) {
    target = event.target;

    for (let i = 0; i < aboutMenuItem.length; i++) {
      if (target === aboutMenuItem[i]) {
        for (let i = 0; i < aboutMenuItem.length; i++) {
          aboutMenuItem[i].classList.remove('active');
        }
        aboutMenuItem[i].classList.add('active');
        aboutContentWrap.style.transform = 'translateX(-' + i * 100 + '%)';
      }
    }
  };

  aboutMenu.addEventListener('click', aboutSlider);


  const studioSlider = document.querySelector('.slider__all');
  const studioSliderItem = studioSlider.querySelectorAll('.slider__img');
  const studioSliderLeftButton = document.querySelector('.left-button__wrap');
  const studioSliderRightButton = document.querySelector('.right-button__wrap');
  let sliderWidthCounter = 0;
  let sliderCounter = 0;

  let sliderChildFirstClone = [];
  let sliderChildLastClone = [];

  // копирование слайдов и вставка в начало
  for (let i = 0; i < studioSliderItem.length; i++) {
    sliderChildFirstClone = studioSliderItem[i].cloneNode(true);
    studioSliderItem[0].insertAdjacentElement("beforeBegin", sliderChildFirstClone);
  }

  // копирование слайдов и вставка в конец
  let lastSlideCounter = studioSliderItem.length;
  for (let i = 0; i < studioSliderItem.length; i++) {
    lastSlideCounter--;
    sliderChildLastClone = studioSliderItem[lastSlideCounter].cloneNode(true);
    studioSliderItem[studioSliderItem.length - 1].insertAdjacentElement("afterEnd", sliderChildLastClone);
  }

  // количество слайдов на экране
  for (let i = 0; i < studioSliderItem.length; i++) {
    sliderWidthCounter += studioSliderItem[i].offsetWidth;
    if (sliderWidthCounter > window.innerWidth) {
      i = studioSliderItem.length;
    } else {
      sliderCounter++;
    }
  }

  const newStudioSliderItem = studioSlider.querySelectorAll('.slider__img');
  const studioSliderItemBlackout = studioSlider.querySelectorAll('.slider__img_blackout');

  // стать на первый оригинальный слайдер (не копию)
  let sliderWidthStyle;
  if (window.innerWidth > 800) {
    sliderWidthStyle = ((studioSliderItem.length * studioSliderItem[0].offsetWidth) - ((window.innerWidth - (sliderCounter * studioSliderItem[0].offsetWidth)) / 2) + 10);
  } else {
    sliderWidthStyle = ((studioSliderItem.length * studioSliderItem[0].offsetWidth) - ((window.innerWidth - (sliderCounter * studioSliderItem[0].offsetWidth)) / 2));
  }

  studioSlider.style.transform = 'translateX(-' + sliderWidthStyle + 'px)';


  function activeSlides() {
    // слайдер на котором мы сейчас находимся
    let activeSlider = Math.floor(sliderWidthStyle / studioSliderItem[0].offsetWidth) + 1;
    for (let i = 0; i < newStudioSliderItem.length; i++) {
      if (activeSlider == i) {
        for (let j = 0; j < sliderCounter; j++) {
          studioSliderItemBlackout[activeSlider].style.opacity = '0';
          activeSlider++;
        }
        activeSlider--;
        i = activeSlider;
      } else {
        studioSliderItemBlackout[i].style.opacity = '0.6';
      }
    }
  };
  activeSlides();


  function endSlideLeft() {
    studioSliderItemBlackout.forEach(studioSliderItemBlackout => {
      studioSliderItemBlackout.style.transition = '0ms';
    });
    if (window.innerWidth > 800) {
      sliderWidthStyle = (((studioSliderItem.length + 1) * studioSliderItem[0].offsetWidth) - ((window.innerWidth - (sliderCounter * studioSliderItem[0].offsetWidth)) / 2) + 10);
    } else {
      sliderWidthStyle = (((studioSliderItem.length + 1) * studioSliderItem[0].offsetWidth) - ((window.innerWidth - (sliderCounter * studioSliderItem[0].offsetWidth)) / 2));
    }

    activeSlides();
    studioSlider.style.transform = 'translateX(-' + sliderWidthStyle + 'px)';

    studioSlider.removeEventListener('transitionend', endSlideLeft);
  };


  function leftButton() {
    studioSliderItemBlackout.forEach(studioSliderItemBlackout => {
      studioSliderItemBlackout.style.transition = '500ms';
    });

    studioSliderLeftButton.removeEventListener('click', leftButton);
    studioSlider.style.transition = '500ms';
    sliderWidthStyle -= studioSliderItem[0].offsetWidth;
    studioSlider.style.transform = 'translateX(-' + (sliderWidthStyle) + 'px)';
    // проверка на последний слайд
    if (studioSliderItem[0].offsetWidth > sliderWidthStyle) {
      studioSlider.addEventListener('transitionend', endSlideLeft);
      studioSlider.style.transition = '0ms';
    }
    activeSlides();
    setTimeout(functionSliderLeftButton, 500);
  };


  function endSlideRight() {
    studioSliderItemBlackout.forEach(studioSliderItemBlackout => {
      studioSliderItemBlackout.style.transition = '0ms';
    });

    if (window.innerWidth > 800) {
      sliderWidthStyle = (((studioSliderItem.length * 2 - 2) * studioSliderItem[0].offsetWidth) - ((sliderCounter - 1) * studioSliderItem[0].offsetWidth) - ((window.innerWidth - (sliderCounter * studioSliderItem[0].offsetWidth)) / 2) + 10);
    } else {
      sliderWidthStyle = (((studioSliderItem.length * 2 - 2) * studioSliderItem[0].offsetWidth) - ((sliderCounter - 1) * studioSliderItem[0].offsetWidth) - ((window.innerWidth - (sliderCounter * studioSliderItem[0].offsetWidth)) / 2));
    }

    activeSlides();
    studioSlider.style.transform = 'translateX(-' + sliderWidthStyle + 'px)';

    studioSlider.removeEventListener('transitionend', endSlideRight);
  };


  function rightButton() {
    studioSliderItemBlackout.forEach(studioSliderItemBlackout => {
      studioSliderItemBlackout.style.transition = '500ms';
    });

    studioSliderRightButton.removeEventListener('click', rightButton);
    studioSlider.style.transition = '500ms';
    sliderWidthStyle += studioSliderItem[0].offsetWidth;
    studioSlider.style.transform = 'translateX(-' + (sliderWidthStyle) + 'px)';
    const x = document.querySelector('.slider__all');
    // проверка на последний слайд
    if (x.offsetWidth - sliderWidthStyle - studioSliderItem[0].offsetWidth - 1 < window.innerWidth) {
      studioSlider.addEventListener('transitionend', endSlideRight);
      studioSlider.style.transition = '0ms';
    }
    activeSlides();
    setTimeout(functionSliderRightButton, 500);
  };


  let functionSliderLeftButton = () => {
    studioSliderLeftButton.addEventListener('click', leftButton);
  };

  let functionSliderRightButton = () => {
    studioSliderRightButton.addEventListener('click', rightButton);
  };

  studioSliderLeftButton.addEventListener('click', leftButton);
  studioSliderRightButton.addEventListener('click', rightButton);


  const galleryButton = document.querySelector('.gallery__btn');

  galleryButton.addEventListener('click', function (event) {
    target = event.target;
    if (target.classList == 'gallery__btn') {
      popup.style.display = 'flex';
      body.style.overflowY = 'hidden';
    }
  });


  const ajaxPopup = document.querySelector('.ajax-popup');
  const ajaxMessageSuccess = ajaxPopup.querySelector('.success');
  const ajaxMessageError = ajaxPopup.querySelector('.error');
  const ajaxClose = ajaxPopup.querySelectorAll('.window__close');
  const ajaxBg = ajaxPopup.querySelector('.ajax-popup__bg');
  const submitButton = document.querySelector('#submit');
  let formName = document.querySelector('.form__name_input');
  let formPhone = document.querySelector('.form__phone_input');
  const formErrorEmpty = document.querySelector('.form__error.empty');
  const formErrorCorrect = document.querySelector('.form__error.correct');

  function closeAjaxPopup() {
    ajaxBg.style.display = 'none';
    ajaxMessageSuccess.style.display = 'none';
    ajaxMessageError.style.display = 'none';
    popup.style.display = 'none';
    body.style.overflowY = 'auto';
    formName.value = '';
    formPhone.value = '';
    ajaxBg.removeEventListener('click', closeAjaxPopup);
  };

  ajaxClose.forEach(item => item.addEventListener('click', closeAjaxPopup));

  // валидация формы и ее отправка
  submitButton.addEventListener('click', function () {
    if (formPhone.value === '') {
      formErrorEmpty.style.display = 'block';
      formErrorCorrect.style.display = 'none';
    } else {
      let counter = 0;
      for (let key in formPhone.value) {
        if (
          formPhone.value[key] === '-' ||
          formPhone.value[key] === '+' ||
          formPhone.value[key] === '1' ||
          formPhone.value[key] === '2' ||
          formPhone.value[key] === '3' ||
          formPhone.value[key] === '4' ||
          formPhone.value[key] === '5' ||
          formPhone.value[key] === '6' ||
          formPhone.value[key] === '7' ||
          formPhone.value[key] === '8' ||
          formPhone.value[key] === '9' ||
          formPhone.value[key] === '0'
        ) {
          formErrorEmpty.style.display = 'none';
          formErrorCorrect.style.display = 'none';
          counter++;

          if (counter === formPhone.value.length) {
            ajaxBg.style.display = 'block';
            let params = 'user_name=' + formName.value + '&' + 'user_phone=' + formPhone.value;
            sendForm(params);
          }
        } else {
          formErrorEmpty.style.display = 'none';
          formErrorCorrect.style.display = 'block';
        }
      }
    }
  });

  function sendForm(params) {
    let request = new XMLHttpRequest();

    request.onload = request.onerror = function () {
      if (this.status == 200) {
        ajaxMessageSuccess.style.display = 'block';
        ajaxBg.addEventListener('click', closeAjaxPopup);
        console.log("XMLHttpRequest: success " + this.status);
      } else {
        ajaxMessageError.style.display = 'block';
        ajaxBg.addEventListener('click', closeAjaxPopup);
        console.log("XMLHttpRequest: error " + this.status);
      }
    };

    request.open('POST', 'mail.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);
  };

};