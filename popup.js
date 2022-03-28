$(function () {
  var div = document.createElement("div");

  $("#fontColor").wrap("<div class='new'></div>");

  var color = $("#fontColor").val();

  $("#fontColor").on("change paste keyup", function () {
    color = $("#fontColor").val();
  });

  console.log(color);

  $("#change").on("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeColor",
        clickedColor: color,
      });
      console.log(clickedColor);
    });
  });
});
