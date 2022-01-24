const getData = () => {
  const list = document.querySelector('.cross-sell__list');

  let stack = 4;
  let count = 1;

  // логика рендера эта ф-я будет отрисовывать массив в виде карточек товарар
  const render = (data) => {
    //
    list.innerHTML = '';
    data.forEach((item) => {
      //console.log(item);// button cross-sell__add
      list.insertAdjacentHTML(
        'beforeend',
        `
          <li>
              <article class="cross-sell__item">
                <img class="cross-sell__image" src="${item.photo}" alt="${item.id} " />
                <h3 class="cross-sell__title">${item.name}</h3>
                <p class="cross-sell__price">${item.price}₽</p>
                <button type="button" class="button button_buy cross-sell__button">Купить</button>
              </article>
            </li>
    
      `
      );
    });
  };
  //логика отрезания от  data определенных участков
  const sliceArray = (data, index) => {
    return data.slice(0, index);
  };
  // логика изменения дата
  const changeData = (data) => {
    const newStack = stack * count;

    render(sliceArray(data, newStack)); // вызывает  рендер и передает ему первые 4 = stack элемента даты

    if (data.length > newStack) {
      count++;
    } else {
      //убрать кннопку
    }
  };

  const getGoods = {


    fetch("")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Данные были получены с ошибкой!!!');
        }
      }).then(data => changeData(data)).catch((error) => {
        console.error(error.message); //'данные были получены с ошибкой'
      })
      
  }

  getGoods()

};
getData();
