const scrollFunc = () => {
  const links = document.querySelectorAll('.header-menu__item a');
  const linkFullChar = document.querySelector('.card-details__link-characteristics');
  const arr = [...links, linkFullChar];

  seamless.polyfill(); // полифил

  arr.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      const id = el.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) {
        // полифилы дают использовать кросбраузерные методы
        // вот этот вариант работанет в сафари
        seamless.elementScrollIntoView(section, {
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
};

scrollFunc();
