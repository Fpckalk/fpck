import scrollSpy from 'simple-scrollspy';

class Fpck {
  static init() {
    document.addEventListener('scroll', () => Fpck.setScrollClass());
    scrollSpy('.main-menu', {
      sectionClass: 'div[id]',
      menuActiveTarget: '.main-menu a',
      offset: 100,
    });
  }

  static setScrollClass() {
    const body = document.getElementsByTagName('body')[0];

    if (window.pageYOffset >= 50) {
      body.classList.add('scroll');
    } else {
      body.classList.remove('scroll');
    }
  }
}

Fpck.init();
