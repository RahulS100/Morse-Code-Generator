//------------------------------variables and dom object area-----------------
//----------------input section objects---------------------
const inputF = $("#input-field")[0];
const convertBtnMorse = $("#convert-to-morse-btn");
const copyBtnTxt = $("#copy-txt-btn");
const reMorseChk_txt = $("#re-morse-check-txt")[0];

//-----------------output section objects-------------------
const outputF = $("#output-field")[0];
const reMorseChk_Morse = $("#re-morse-check-morse")[0];
const copyBtnMorse = $("#copy-morse-btn");
const convertBtnTxt = $("#convert-to-txt-btn");

//---------------IO Container's---------------
let inputStr = "";
let outputStr = "";
let tempStr = "";

//--------------------------main code araa------------------------------------
convertBtnMorse.click(() => {
  inputStr = inputF.value;
  let lenStr = inputStr.length;

  //--------------Morse Code Converstion (Text to Morse)--------------
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
    } else if (inputStr[counter] === " ") {
      outputStr += " ";
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
  if (reMorseChk_txt.checked) {
    let outStrLen = outputStr.length - 1;
    tempStr = "";
    for (let counter = outStrLen; counter >= 0; counter--) {
      tempStr += outputStr[counter];
    }
    outputStr = tempStr;
    tempStr = "";
  }

  //----------Reset Things----------
  inputF.value = "";
  outputF.value = outputStr;
  outputStr = "";
  inputStr = "";
});

//-------------------Morse Code Copy Button-------------------
copyBtnMorse.click(() => {
  outputF.select();
  navigator.clipboard.writeText(outputF.value);
  outputF.value = "";
});

//-----------------------------------Morse Code Converstion (Morse to Text)--------------------------
//---------------------------------------------------------------------------------------------------
convertBtnTxt.click(() => {
  outputStr = outputF.value;
  let outStrLen = outputStr.length;

  //-----Place a Space in the back of String-----
  outputStr += " ";

  //----------Reverse Morse Removal----------
  if (reMorseChk_Morse.checked) {
    tempStr = "";
    for (let counter = outStrLen; counter >= 0; counter--) {
      tempStr += outputStr[counter];
    }
    outputStr = tempStr;
    tempStr = "";
  }

  //--------------------------Morse to text Comparison-------------------
  for (let counter = 0; counter < outStrLen; counter++) {
    tempStr += outputStr[counter];
    if (outputStr[counter + 1] === " ") {
      tempStr = tempStr.trim();

      //----------digit morse codes----------

      if (tempStr === ".-") inputStr += "A";
      else if (tempStr === "-...") inputStr += "B";
      else if (tempStr === "-.-.") inputStr += "C";
      else if (tempStr === "-..") inputStr += "D";
      else if (tempStr === ".") inputStr += "E";
      else if (tempStr === "..-.") inputStr += "F";
      else if (tempStr === "--.") inputStr += "G";
      else if (tempStr === "....") inputStr += "H";
      else if (tempStr === "..") inputStr += "I";
      else if (tempStr === ".---") inputStr += "J";
      else if (tempStr === "-.-") inputStr += "K";
      else if (tempStr === ".-..") inputStr += "L";
      else if (tempStr === "--") inputStr += "M";
      else if (tempStr === "-.") inputStr += "N";
      else if (tempStr === "---") inputStr += "O";
      else if (tempStr === ".--.") inputStr += "P";
      else if (tempStr === "--.-") inputStr += "Q";
      else if (tempStr === ".-.") inputStr += "R";
      else if (tempStr === "...") inputStr += "S";
      else if (tempStr === "-") inputStr += "T";
      else if (tempStr === "..-") inputStr += "U";
      else if (tempStr === "...-") inputStr += "V";
      else if (tempStr === ".--") inputStr += "W";
      else if (tempStr === "-..-") inputStr += "X";
      else if (tempStr === "-.--") inputStr += "Y";
      else if (tempStr === "--..") inputStr += "Z";

      //----------digit morse codes----------
      else if (tempStr === ".----") inputStr += "1";
      else if (tempStr === "..---") inputStr += "2";
      else if (tempStr === "...--") inputStr += "3";
      else if (tempStr === "....-") inputStr += "4";
      else if (tempStr === ".....") inputStr += "5";
      else if (tempStr === "-....") inputStr += "6";
      else if (tempStr === "--...") inputStr += "7";
      else if (tempStr === "---..") inputStr += "8";
      else if (tempStr === "----.") inputStr += "9";
      else if (tempStr === "-----") inputStr += "0";
    //   else inputStr = "Not a vaild morse pattern?"

      //----------Reset String----------
      tempStr = "";

      //-----------space chk and adding a space-----------
      if (outputStr[counter + 2] === " ") {
        inputStr += " ";
      }
    }
  }

  //----------Morse to Text Output----------
  inputF.value = inputStr;
  inputStr = "";
  outputStr = "";
  outputF.value = "";
});

//-------------------Txt Copy Button-------------------
copyBtnTxt.click(() => {
  inputF.select();
  navigator.clipboard.writeText(inputF.value);
  inputF.value = "";
});
