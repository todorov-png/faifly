'use strict';

//Получение данных с формы регистрации без перезагрузки JS
document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector(".contact-form__form");
  if (form !== null) {
    form.addEventListener('submit', (e)=> {
      e.preventDefault();
      form.reset();
      
      const request = new XMLHttpRequest(),
            formData = new FormData(form);

      callPopUp('Проверяю данные, подождите!');
      request.open('POST', '../php/contact.php');
      request.send(formData);
      request.addEventListener('load', () => {
        //Закоментировать следующую строку и раскоментировать ниже для работы на сервере
        callPopUp('Сообщение отправлено!');
        /* if (request.status === 200) {
          callPopUp('Сообщение доставлено!');
        } else {
          callPopUp('Произошла ошибка, попробуйте еще!');
        } */
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector(".footer-content__item-form");
  if (form !== null) {
    form.addEventListener('submit', (e)=> {
      e.preventDefault();
      form.reset();
      
      const request = new XMLHttpRequest(),
            formData = new FormData(form);

      callPopUp('Проверяю данные, подождите!');
      request.open('POST', '../php/footer.php');
      request.send(formData);
      request.addEventListener('load', () => {
        //Закоментировать следующую строку и раскоментировать ниже для работы на сервере
        callPopUp('Сообщение отправлено!');
        /* if (request.status === 200) {
          callPopUp('Сообщение доставлено!');
        } else {
          callPopUp('Произошла ошибка, попробуйте еще!');
        } */
      });
    });
  }
});