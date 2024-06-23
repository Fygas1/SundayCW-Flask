    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.copy2-icon').forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action

                // Get the code from the data-code attribute
                const code = this.getAttribute('data-code');

                // Create a temporary input element
                const tempInput = document.createElement('input');
                tempInput.value = code;
                document.body.appendChild(tempInput);

                // Select the text and copy it to the clipboard
                tempInput.select();
                document.execCommand('copy');

                // Remove the temporary input element
                document.body.removeChild(tempInput);

                // Optionally, you can add some feedback to the user here
                alert('Code copied to clipboard!');
            });
        });
    });