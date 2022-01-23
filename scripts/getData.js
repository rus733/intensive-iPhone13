const getData = () => {
  const data = fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      // в response  как в обьекте есть свойство ok : false
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Данные были получены с ошибкой!!!');
      }
    })
    .then((data) => console.log(data)) // в случае шибки этот метод вообще не отработает
    // мы можем еще обработать ошибку
    //в случае ошибки отработает catch получит в аргумент некий error
    // мы не получим пустой массив
    .catch((error) => {
      console.error(error.message); //'данные были получены с ошибкой'
    })
    .finally(() => {
      console.log('finally'); // отработает в любом случае есть или нет ошибки
      //можем выполнить любой функционал в любом случае
    });
};
getData();
