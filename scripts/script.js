const clickable = document.querySelectorAll("div h3 span");

clickable.forEach(function (el) {
  el.addEventListener("click", function () {
    copy(el.innerText);
    notification("copied to clipboard", el.innerText);
  });
});

function copy(str) {
  let tmp = document.createElement("INPUT"), // Создаём новый текстовой input
    focus = document.activeElement; // Получаем ссылку на элемент в фокусе (чтобы не терять фокус)

  tmp.value = str; // Временному input вставляем текст для копирования

  document.body.appendChild(tmp); // Вставляем input в DOM
  tmp.select(); // Выделяем весь текст в input
  document.execCommand("copy"); // Магия! Копирует в буфер выделенный текст (см. команду выше)
  document.body.removeChild(tmp); // Удаляем временный input
  focus.focus(); // Возвращаем фокус туда, где был
}

function notification(message, string) {
  const notificationWrapper = document.querySelector(".notificationWrapper");
  const notificationText = document.querySelector(".notificationWrapper p");
  const notificationContent = document.querySelector(
    ".notificationWrapper span"
  );
  notificationText.innerText = message;
  notificationContent.innerText = string;
  notificationWrapper.classList.add("visibleNotification");

  setTimeout(() => {
    notificationWrapper.classList.remove("visibleNotification");
  }, "3000");
}
