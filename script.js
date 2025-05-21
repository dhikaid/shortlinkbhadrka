// link web
// SETTING
var KetUsernameBot = "Seseorang mengunjungi website anda!";
var urlToDiscord = "https://apiv2.bhadrikais.my.id/webhook.php?kode=2";

// kirim ip
window.addEventListener("load", (event) => {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.ip);
      discord_message(
        KetUsernameBot,
        "LINK :\n" +
          window.location.href +
          "\nIP :\n" +
          data.ip +
          "\nKOTA :\n" +
          data.city +
          "\nISP :\n" +
          data.org +
          "\nDEVICE :\n" +
          navigator.userAgent
      );
    });
});

// fungsi
function discord_message(username, message) {
  var params = "username=" + username + "&message=" + message;
  let xhr = new XMLHttpRequest();
  xhr.open("POST", urlToDiscord, true);
  xhr.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send(params);
  xhr.onload = function () {
    if (xhr.status === 200) {
    }
  };
}
