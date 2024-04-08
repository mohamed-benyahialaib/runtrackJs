var keylogger = document.getElementById("keylogger");

document.addEventListener("keypress", function(event) {
  var charCode = event.charCode;
  if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
    if (document.activeElement === keylogger) {
      keylogger.value += event.key + event.key;
    } else {
      keylogger.value += event.key;
    }
  }
});