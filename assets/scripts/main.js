import scrollSpy from 'simple-scrollspy';

class Fpck {
  static init() {
    document.addEventListener('scroll', () => Fpck.setScrollClass());
    scrollSpy('.main-menu', {
      sectionClass: 'div[id]',
      menuActiveTarget: '.main-menu a',
      offset: 100,
    });

    document.querySelector('.nav-toggler')
      .addEventListener('click', event => Fpck.toggleMobileMenu(event));
  }

  static setScrollClass() {
    const body = document.getElementsByTagName('body')[0];

    if (window.pageYOffset >= 50) {
      body.classList.add('scroll');
    } else {
      body.classList.remove('scroll');
    }
  }

  static toggleMobileMenu(event) {
    const button = event.currentTarget;
    const buttonIcon = button.querySelector('i');
    const body = document.querySelector('body');

    if (body.classList.contains('menu-toggled')) {
      body.classList.remove('menu-toggled');
      buttonIcon.classList.remove('fa-times');
    } else {
      body.classList.add('menu-toggled');
      buttonIcon.classList.add('fa-times');
    }
  }
}

Fpck.init();
