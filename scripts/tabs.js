'use strict';

const tabsFunc = () => {
  const tabs = document.querySelectorAll('.card-detail__change');
  const tabsTitle = document.querySelector('.card-details__title');
  const tabsPrice = document.querySelector('.card-details__price');
  const tabsImage = document.querySelector('.card__image_item');

  const tabsOptions = [
    {
      name: 'Graphite',
      memory: '128',
      price: '60000',
      image: 'img/iPhone-graphite.webp',
    },

    {
      name: 'Silver',
      memory: '256',
      price: '65000',
      image: 'img/iPhone-silver.webp',
    },

    {
      name: 'Sierra Blue',
      memory: '512',
      price: '70000',
      image: 'img/iPhone-sierra_blue.webp',
    },
  ];
  //ф. изменения содержание заголовка и цены таба
  const changeContent = (index) => {
    //изменение текста емкость памяти  и название смартфона
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    tabsPrice.textContent = `${tabsOptions[index].price}₽`; //изменение цены
    tabsImage.setAttribute('src', tabsOptions[index].image); // изменение картинки
    //tabsImage.src = `${tabsOptions[index].image}`;// чем этот вариант хуже ?

    // изменение title в зависимости от выбранного телефона
    document.title = `iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
  };

  //ф. выбора активного таба
  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove('active');
      if (index === indexClickedTab) {
        tab.classList.add('active');
      }
    });
    changeContent(indexClickedTab);
  };
  /*
//вар Кир 1 
const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach(tab => tab.classList.remove('active'));  
    tabs[indexClickedTab].classList.add('active');
    });
    */

  /*
    вар кир 2 
const changeActiveTabs = (indexClickedTab) =>
    tabs.forEach((tab, index) =>
      (index === indexClickedTab ? tab.classList.remove('active') : tabs[indexClickedTab].classList.add('active')));

    */

  //ф. перебора всех ссылок табов и прослушивателя события клик
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0); // первый вызов для
};

tabsFunc();
