// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Generate random RGB values (0–255)
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  // Apply the color
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  keyPressDisplay.textContent = `Key pressed: ${event.key}`
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')

  textInputDisplay.textContent = `You typed: ${textInput.value}`
}

// Attach Event Listeners
function setupEventListeners() {
  // Button click → change background color
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Double click → reset background color
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Key press → display key
  document.addEventListener('keydown', displayKeyPress)

  // Input typing → live display
  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}