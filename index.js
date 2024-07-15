// Write your code here!
// Remove the <main> element with id 'main'
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to a variable 'newHeader'
const newHeader = document.createElement('h1');

// Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the <h1> element
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with your actual name

// Append the new <h1> element to the body
document.body.append(newHeader);
