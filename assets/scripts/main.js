class Fpck {
  constructor() {
    this.contactForm = $('#contact_form');
  }

  init() {
    /**
     * Contact form validation
     */
    this.contactForm.validate({
      submitHandler() {
        $.post('/includes/process.php', this.contactForm.serialize(), () => {
          this.contactForm.hide('fast');

          $('#contact_succes')
            .html('Gnarly. I\'ll reply as fast as I can.')
            .show('fast');
        });
      },
    });


    const coffee = document.getElementById('coffee');
    if (coffee) {
      coffee.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
          const target = e.currentTarget;
          target.outerHTML = `<br><span>${this.value}? Aight, gotcha</span>`;
        }
      });
    }
  }
}

$(document).ready(() => {
  new Fpck().init();
});
