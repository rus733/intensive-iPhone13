const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item');

  const tabsClose = () => {
    chItems.forEach((item) => {
      item.querySelector('.characteristics__title').classList.remove('active');
      item.querySelector('.characteristics__description').classList.remove('open');
      item.querySelector('.characteristics__description').style.height = '';
    });
  };
  tabsClose();

  chItems.forEach((item) => {
    const chButton = item.querySelector('.characteristics__title');
    const chContent = item.querySelector('.characteristics__description');

    chButton.addEventListener('click', () => {
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
