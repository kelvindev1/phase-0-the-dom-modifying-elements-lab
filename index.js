// Write your code here!
const mainElement = document.getElementById('main');
mainElement.parentNode.removeChild(mainElement);

let newHeader = document.createElement('h1');
newHeader.textContent = "This is the new header";


document.body.appendChild(newHeader)

newHeader = document.createElement('h1');
newHeader.textContent = "This is the new header";


newHeader.id = 'victory';


document.body.appendChild(newHeader);

newHeader = document.createElement('h1');
newHeader.textContent = "kelvin mutugi is the champion";

newHeader.id = 'victory';

document.body.appendChild(newHeader);