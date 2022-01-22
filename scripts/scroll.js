const scrollFunc = () => {
  const links = document.querySelectorAll('.header-menu__item a');
  const linkFullChar = document.querySelector('.card-details__link-characteristics');
  const arr = [...links, linkFullChar];

  seamless.polyfill(); // полифил

  arr.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const id = element.getAttribute('href').substring(1);

      const section = document.getElementById(id);

      if (section) {
        // полифилы дают использовать кросбраузерные методы
        // вот этот вариант работанет в сафари
        seamless.elementScrollIntoView(section, {
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        seamless.elementScrollIntoView(document.querySelector('#characteristics'), {
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    });
  });
};

scrollFunc();
