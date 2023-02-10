$(".click").on("click", function () {
  alert("Начал!");
  var form_data = $(".form").serialize(); // Собираем все данные из формы
  $.ajax({
      type: "POST", // Метод отправки
      url: "test.php", // Путь до php файла отправителя
      data: form_data,
      success: function () {
          // Код в этом блоке выполняется при успешной отправке сообщения
          alert("Ваше сообщение отправлено!");
          console.log(form_data);
      }
  });
});
