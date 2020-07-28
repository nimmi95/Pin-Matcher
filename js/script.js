document.getElementById("generate").addEventListener("click", function () {
  var newPin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  document.getElementById("pin").value = newPin;
  document.getElementById("try").innerText = "3";
  document.getElementById("try-left").style.display = "block";
  document.getElementById("give-pin").value = "";
  clearMsg();
});

function clearMsg() {
  document.getElementById("no").style.display = "none";
  document.getElementById("yes").style.display = "none";
}

function dis(val) {
  document.getElementById("give-pin").value += val;
}

function match() {
  clearMsg();
  count = parseInt(document.getElementById("try").innerText);
  if (count < 1) {
    alert("You can not Enter!Generate the pin again!");
    location.reload();
  } else {
    count--;
  }
  var pinCode = document.getElementById("give-pin").value;
  var givenCode = document.getElementById("pin").value;
  document.getElementById("try-left").style.display = "block";
  if (pinCode != 0) {
    if (pinCode == givenCode) {
      document.getElementById("give-pin").value = "";
      document.getElementById("pin").value = "";
      document.getElementById("yes").style.display = "block";
      document.getElementById("no").style.display = "none";
      document.getElementById("try-left").style.display = "none";
    } else {
      document.getElementById("no").style.display = "block";
      document.getElementById("yes").style.display = "none";

      document.getElementById("try").innerHTML = count;
    }
  } else {
    alert("Generate the pin");
    location.reload();
    
  }
}

function backspace() {
  var pinStr = document.getElementById("give-pin").value;
  document.getElementById("give-pin").value = pinStr.substring(
    0,
    pinStr.length - 1
  );
  clearMsg();
}

function clearIn() {
  document.getElementById("give-pin").value = "";
  clearMsg();
}
