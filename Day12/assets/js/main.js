let fSize=document.getElementById("fontSizeSelector");
let fName=document.getElementById("selectFont");
let tArea=document.getElementById("textAreaBox");


fSize.onchange= function(){
    tArea.style.fontSize  = fSize.value + "px";
};

fName.onchange=function(){
    let slcFont = fName.options[fName.selectedIndex].text;
    tArea.style.fontFamily = slcFont;
};
let isItalic = false;
function makeitalic(){
    if(!isItalic){
    tArea.style.fontStyle = "italic";
    isItalic= true;}else if(isItalic){
     tArea.style.fontStyle = "normal";   
    isItalic= false;
    }  
}
let isBold = false;
function makebold(){
    if(!isBold){
    tArea.style.fontWeight = "bold";
    isBold= true;}else if(isBold){
     tArea.style.fontWeight = "normal";   
    isBold= false;
    }  
}
let isUnderlined = false;
function makeunderlined(){
    if(!isUnderlined){
    tArea.style.textDecoration = "underline";
    isUnderlined= true;}else if(isUnderlined){
     tArea.style.textDecoration = "none";   
    isUnderlined= false;
    }  
}

function makeleftalign(){
    tArea.style.textAlign = "left";
}
function makecenteralign(){
    tArea.style.textAlign = "center";
}
function makerightalign(){
    tArea.style.textAlign = "right";
}

function previewFile() {
  const content = document.querySelector('.textarea');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // this will then display a text file
    content.innerText = reader.result;
  }, false);

  if (file) {
    reader.readAsText(file);
  }
}

function inputFile(){
    let fi = document.getElementById("fileinput");
    fi.click();
}

function saveDynamicDataToFile() {

            var userInput = document.getElementById("textAreaBox").value;
			
            var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
            saveAs(blob, "textfile.txt");
        }