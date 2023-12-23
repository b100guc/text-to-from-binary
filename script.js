function binaryToText() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var binaryArray = input.split(" ");
    var text = "";
    for (var i = 0; i < binaryArray.length; i++) {
      text += String.fromCharCode(parseInt(binaryArray[i], 2));
    }
    output.innerHTML = text;
  }
  
  function textToBinary() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var binary = "";
    for (var i = 0; i < input.length; i++) {
      binary += input[i].charCodeAt(0).toString(2) + " ";
    }
    output.innerHTML = binary;
  }
  