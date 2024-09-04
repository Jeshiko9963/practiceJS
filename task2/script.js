const consoleLog = document.querySelector('#consoleLog');
const constAlert = document.querySelector('#alert');
const prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

constAlert.addEventListener(    'click', () => {
alert('Показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».');
})

 prompt.addEventListener('click', () => {
  alert('Пользователь может напечатать что-либо в поле ввода и нажать OK.');
})

