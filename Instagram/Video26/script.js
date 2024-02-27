document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.radio-menu input[type="radio"]');
    const content = document.getElementById('content');
    
    options.forEach(option => {
      option.addEventListener('change', function() {
        if (this.checked) {
          content.innerHTML = `Content of ${this.id}`;
        }
      });
    });
  });
  