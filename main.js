document.addEventListener('DOMContentLoaded', function() { 

// Find HTML elements using their IDs 

const button = document.getElementById('demoButton'); 
const messageArea = document.getElementById('messageDisplay'); 

// Add click event listener to the button 
button.addEventListener('click', function() { 
    const currentTime = new Date().toLocaleDateString(); 
    const message = 'Hello! You click the button at ' + currentTime; 

    // Display message in our HTML 
    messageArea.textContent = message; 

    // Change button text temporarily 
    button.textContent = 'Thanks for clicking! Wow what a wonderful life we live!'; 
    }); 
}); 