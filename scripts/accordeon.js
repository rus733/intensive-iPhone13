const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item');
  // открыты й первый  блок
  /*
  const chItem = document.querySelector('.characteristics__item');

  chItem.querySelector('.characteristics__title').classList.add('active');
  chItem.querySelector('.characteristics__description').classList.add('open');
  chItem.querySelector('.characteristics__description').style.height = chItem.querySelector('.characteristics__description').scrollHeight + 'px';
*/
  //
  chItems.forEach((item) => {
    const chButton = item.querySelector('.characteristics__title');
    const chContent = item.querySelector('.characteristics__description');

    chButton.addEventListener('click', (e) => {
      chItems.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title');
        const chContent = item.querySelector('.characteristics__description');
        chContent.style.height = '';
        chButton.classList.remove('active');
        chContent.classList.remove('open');
      });

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
