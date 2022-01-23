const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item');

  const tabsClose = () => {
    chItems.forEach((item) => {
      item.querySelector('.characteristics__title').classList.remove('active');
      item.querySelector('.characteristics__description').classList.remove('open');
      //el.querySelector('.characteristics__description').classList.remove('active');
      item.querySelector('.characteristics__description').style.height = '';
    });
  };
  tabsClose();

  chItems.forEach((item) => {
    const chButton = item.querySelector('.characteristics__title');
    const chContent = item.querySelector('.characteristics__description');

    chButton.addEventListener('click', () => {
      // chItems.forEach((item) => {
      //   const chButton = item.querySelector('.characteristics__title');
      //   const chContent = item.querySelector('.characteristics__description');

      //   chContent.style.height = '';
      //   chButton.classList.remove('active');
      //   chContent.classList.remove('open');
      // });

      if (chContent.classList.contains('open')) {
        chContent.style.height = '';
      } else {
        tabsClose();
        chContent.style.height = chContent.scrollHeight + 'px';
      }
      chButton.classList.toggle('active');
      chContent.classList.toggle('open');
    });
  });
};
accordeon();
