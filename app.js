//------------------------------variables and dom object area-----------------
const inputF = $("#input-field");
const outputF = $("#output-field");
const convertBtn = $("#convert");
const copyBtn = $("#copy-btn");
const reMorseChk = $("#re-morse-check");

let inputStr = "";
let outputStr = "";

//--------------------------main code araa------------------------------------
convertBtn.click(() => {
  inputStr = inputF[0].value;
  let lenStr = inputStr.length;

  //--------------Morse Code Converstion--------------
  //--------------------------------------------------
  //----------------Alphabet Morse Codes-----------------
  for (let counter = 0; counter < lenStr; counter++) {
    if (inputStr[counter] === "A" || inputStr[counter] === "a") {
      outputStr += ".- ";
    } else if (inputStr[counter] === "B" || inputStr[counter] === "b") {
      outputStr += "-... ";
    } else if (inputStr[counter] === "C" || inputStr[counter] === "c") {
      outputStr += "-.-. ";
    } else if (inputStr[counter] === "D" || inputStr[counter] === "d") {
      outputStr += "-.. ";
    } else if (inputStr[counter] === "E" || inputStr[counter] === "e") {
      outputStr += ". ";
    } else if (inputStr[counter] === "F" || inputStr[counter] === "f") {
      outputStr += "..-. ";
    } else if (inputStr[counter] === "G" || inputStr[counter] === "g") {
      outputStr += "--. ";
    } else if (inputStr[counter] === "H" || inputStr[counter] === "h") {
      outputStr += ".... ";
    } else if (inputStr[counter] === "I" || inputStr[counter] === "i") {
      outputStr += ".. ";
    } else if (inputStr[counter] === "J" || inputStr[counter] === "j") {
      outputStr += ".--- ";
    } else if (inputStr[counter] === "K" || inputStr[counter] === "k") {
      outputStr += "-.- ";
    } else if (inputStr[counter] === "L" || inputStr[counter] === "l") {
      outputStr += ".-.. ";
    } else if (inputStr[counter] === "M" || inputStr[counter] === "m") {
      outputStr += "-- ";
    } else if (inputStr[counter] === "N" || inputStr[counter] === "n") {
      outputStr += "-. ";
    } else if (inputStr[counter] === "O" || inputStr[counter] === "o") {
      outputStr += "--- ";
    } else if (inputStr[counter] === "P" || inputStr[counter] === "p") {
      outputStr += ".--. ";
    } else if (inputStr[counter] === "Q" || inputStr[counter] === "q") {
      outputStr += "--.- ";
    } else if (inputStr[counter] === "R" || inputStr[counter] === "r") {
      outputStr += ".-. ";
    } else if (inputStr[counter] === "S" || inputStr[counter] === "s") {
      outputStr += "... ";
    } else if (inputStr[counter] === "T" || inputStr[counter] === "t") {
      outputStr += "- ";
    } else if (inputStr[counter] === "U" || inputStr[counter] === "u") {
      outputStr += "..- ";
    } else if (inputStr[counter] === "V" || inputStr[counter] === "v") {
      outputStr += "...- ";
    } else if (inputStr[counter] === "W" || inputStr[counter] === "w") {
      outputStr += ".-- ";
    } else if (inputStr[counter] === "X" || inputStr[counter] === "x") {
      outputStr += "-..- ";
    } else if (inputStr[counter] === "Y" || inputStr[counter] === "y") {
      outputStr += "-.-- ";
    } else if (inputStr[counter] === "Z" || inputStr[counter] === "z") {
      outputStr += "--.. ";
    }

    //----------Digit Morse Codes----------
    else if (inputStr[counter] === "1") {
      outputStr += ".---- ";
    } else if (inputStr[counter] === "2") {
      outputStr += "..---";
    } else if (inputStr[counter] === "3") {
      outputStr += "...-- ";
    } else if (inputStr[counter] === "4") {
      outputStr += "....- ";
    } else if (inputStr[counter] === "5") {
      outputStr += "..... ";
    } else if (inputStr[counter] === "6") {
      outputStr += "-.... ";
    } else if (inputStr[counter] === "7") {
      outputStr += "--... ";
    } else if (inputStr[counter] === "8") {
      outputStr += "---.. ";
    } else if (inputStr[counter] === "9") {
      outputStr += "----. ";
    } else if (inputStr[counter] === "0") {
      outputStr += "----- ";
    }
  }

  //----------Reverse Morse Check for More Security----------
  if (reMorseChk[0].checked) {
  }

  //----------Reset Things----------
  inputF[0].value = "";
  outputF[0].value = outputStr;
  outputStr = "";
});

//-------------------Copy Button-------------------
copyBtn.click(()=>{
    
})