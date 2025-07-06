document.addEventListener('DOMContentLoaded', function() { 

// Find HTML elements using their IDs 

const button = document.getElementById('demoButton'); 
const messageArea = document.getElementById('messageDisplay'); 

// Add click event listener to the button 
button.addEventListener('click', function() { 
    const currentTime = new Date().toLocaleDateString(); 
    const message = 'Hello! You click the button at ' + currentTime; 

    // Display message in our HTML and ensure it's white
    messageArea.textContent = message;
    messageArea.style.color = '#fff';

    // Change button text temporarily 
    button.textContent = 'Thanks for clicking! Wow what a wonderful life we live!'; 

    setTimeout(function() {                                // Run a function after a delay
            button.textContent = 'Click Me!';
            messageArea.textContent = ' ' ;                 // Change button text back to original
        }, 2000);                                              // Wait 2000 milliseconds (2 seconds)

    }); 
}); 

// Add 200 sparkles at random positions
for (let i = 0; i < 200; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.top = Math.random() * 100 + 'vh';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDelay = (Math.random() * 1.5) + 's';
  document.body.appendChild(sparkle);
}