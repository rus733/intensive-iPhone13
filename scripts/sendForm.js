const sendForm = () => {
  const cardDetailsTitle = document.querySelector('.card-details__title');
  const btnOpenModal = document.querySelector('.card-details__button_delivery');
  const modal = document.querySelector('.modal');
  const modalTitle = modal.querySelector('.modal__title'); //modal__close
  const modalClose = modal.querySelector('.modal__close');
  const modalForm = modal.querySelector('form');

  //console.log(modalForm);

  btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = cardDetailsTitle.textContent;
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // повесим слушатель на кнопку submit  формы
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault(); // чтобы не перегружалась страница при submit
    const labels = modal.querySelectorAll('.modal__label'); // коллекция lable ,содержит все инпуты и span-ы
    const newMessage = {}; //пустой обьект
    // внесем в него данные из input-ов  form-ы
    labels.forEach((label) => {
      const span = label.querySelector('span'); //текст из спана - будет ключом обьекта
      const input = label.querySelector('input'); //значение введенного  инпута - значение обьекта
      newMessage[span.textContent] = input.value;
    });

    // теперь отправим наш обьект с данными на сервер
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newMessage), //превращает обьект в строку
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      //console.log('отправлено');
      labels.forEach((label) => {
        const input = label.querySelector('input');
        input.value = '';
      });
      modal.style.display = 'none';
    });
  });
};
sendForm();

// статус 200 - успешное получение  данных
//статус 201 - успешное сохранение данных
//submit - событие отправки формы, перезагружает страницу , так как отпраляет GET запрос
