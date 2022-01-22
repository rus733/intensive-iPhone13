'use strict';

const tabsFunc = () => {
  const tabs = document.querySelectorAll('.card-detail__change');
  const tabsTitle = document.querySelector('.card-details__title');
  const tabsPrice = document.querySelector('.card-details__price');
  const tabsImage = document.querySelector('.card__image_item'); //title>

  const tabsOptions = [
    {
      // 01
      name: 'Graphite',
      memory: '128',
      price: '60000',
      image: 'img/iPhone-graphite.webp',
    },

    {
      // 02
      name: 'Silver',
      memory: '256',
      price: '65000',
      image: 'img/iPhone-silver.webp',
    },

    {
      //03
      name: 'Sierra Blue',
      memory: '512',
      price: '70000',
      image: 'img/iPhone-sierra_blue.webp', //iPhone-sierra_blue.webp
    },
  ];
  //ф. изменения содержание заголовка и цены таба
  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;

    tabsPrice.textContent = `${tabsOptions[index].price}₽`;

    tabsImage.setAttribute('src', tabsOptions[index].image);
    //tabsImage.src = `${tabsOptions[index].image}`;
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
  //ф. перебора всех ссылок табов и прослушивателя события клик
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0); // первый вызов для
};

tabsFunc();
