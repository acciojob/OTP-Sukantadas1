//your JS code here. If required.
 function handleInput(input) {
            const nextInput = input.nextElementSibling;
            const prevInput = input.previousElementSibling;

            if (input.value !== '') {
                if (nextInput) {
                    nextInput.focused();
                }
            } else {
                if (prevInput) {
                    prevInput.focused();
                }
            }
        }