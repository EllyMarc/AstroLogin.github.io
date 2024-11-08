document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById("username");
    const userLabel = document.getElementById("labelu");
    const userError = document.getElementById("userError");
    const passInput = document.getElementById("password");
    const passLabel = document.getElementById("labelp");
    const passError = document.getElementById("passError");
    const btn = document.getElementById("btn");
  
    btn.addEventListener('click', function(event) {
      event.preventDefault();
  
      
      if (!usernameInput.value) {
        userError.style.display = 'inline'; 
        userLabel.classList.add('error');  

      } else {
        userError.style.display = 'none';
        userLabel.classList.remove('error');
      }
      
      if (!passInput.value) {
        passError.style.display = 'inline';
        passLabel.classList.add('error');
      } else {
        passError.style.display = 'none';
        passLabel.classList.remove('error');
      }
    });
  });
  