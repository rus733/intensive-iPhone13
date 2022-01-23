const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item');

  console.log(); //characteristics__description active
  chItems.forEach((item) => {
    const chButton = item.querySelector('.characteristics__title');
    const chContent = item.querySelector('.characteristics__description');
    //console.log(chContent);

    chButton.addEventListener('click', () => {
      if (chContent.classList.contains('open')) {
        chContent.style.height = '';
      } else {
        //console.log(chContent.scrollHeight);//высота раскрываемого блока
        chContent.style.height = chContent.scrollHeight + 'px';
      }
      chButton.classList.toggle('active');
      chContent.classList.toggle('open');
    });
  });
};
accordeon();
