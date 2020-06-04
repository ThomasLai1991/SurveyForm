
function toggleTextArea() {
    var checkBox = document.getElementById("otherAllergiesCheckBox");
    var textArea = document.getElementById("otherAllergiesTextArea");
    
    if (checkBox.checked == true){
      textArea.style.display = "block";
    } else {
      textArea.style.display = "none";
    }
  }