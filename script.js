//#20C997

function showHide() {
  var select = document.getElementById("mySelect");
  var selectedValue = select.value;
  var element = document.getElementById("elementToShowHide");
  if (selectedValue === "replace") {
    element.style.display = "block";
  } else if (selectedValue === "vowel") {
    element.style.display = "none";
  } else if (selectedValue === "first") {
    element.style.display = "none";
  }
}



function Filter(arr) {
  var RemoveWhitespace = document.getElementById('RemoveWhitespace');
  var ConvertLowercase = document.getElementById('ConvertLowercase');
  if (RemoveWhitespace.checked){
    arr = arr.map(string => string.trim());
  }
  if (ConvertLowercase.checked){
    arr = arr.map(string => string.toLowerCase());
  }
  return arr;
}




function ReplaceAllButFirst_simple(str){
  var chars = str.split('');
  for (var i = 1; i < chars.length; i++) {
    chars[i] = '_ ';
  }
  str = chars.join('');
  str = str.trim();
  return str;
}

function ReplaceAllButFirst(str){
  var subArr = str.split(" ");
  subArr = subArr.map(string => ReplaceAllButFirst_simple(string));
  str = subArr.join(' ');
  return str;
}



function ReplaceCustom(str) {
  var findChar = document.getElementById("findChar").value;
  var replaceChar = document.getElementById("replaceChar").value;
  var chars = str.split('');
  for (var i = 1; i < chars.length; i++) {
    if (chars[i] === findChar) {
      chars[i] = replaceChar;
    }
  }
  str = chars.join('');
  str = str.trim();
  return str;
}



function ShowHint() {
  var input = document.getElementById('input');
  var output = document.getElementById('output');

  var lines = input.value.split('\n');
  lines = Filter(lines);
  
  var replacedLines = [];

  var select = document.getElementById("mySelect");
  var selectedOption = select.options[select.selectedIndex];
  var selectedValue = selectedOption.value;

  switch (selectedValue) {
    case "first":
      for (var i = 0; i < lines.length; i++) {
        var replacedLine = ReplaceAllButFirst(lines[i]);
        replacedLines.push(replacedLine);
      }
      break;
    case "vowel":
      for (var i = 0; i < lines.length; i++) {
        var replacedLine = lines[i].replace(/[aeiouAEIOU]/g, '_');
        replacedLines.push(replacedLine);
      }
      break;
    case "replace":
      for (var i = 0; i < lines.length; i++) {
        var replacedLine = ReplaceCustom(lines[i]);
        replacedLines.push(replacedLine);
      }
      //console.log("This is a mango.");
      break;
  }
  output.value = replacedLines.join('\n');
}