// Обработка текста
function processText() {
  const textInput = document.getElementById('textInput').value;
  const historyList = document.getElementById('historyList');
  const listItem = document.createElement('li');
  listItem.textContent = textInput;
  historyList.appendChild(listItem);
}

// Регистрация пользователя
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = this.elements.username.value;
  const password = this.elements.password.value;
  // Ваш код для отправки данных на сервер и обработки регистрации
});

// Авторизация пользователя
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = this.elements.username.value;
  const password = this.elements.password.value;
  // Ваш код для отправки данных на сервер и обработки авторизации
});