const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

// Create and modify 'newHeader' element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Manasses is the champion"; 

document.body.appendChild(newHeader);
