
        let display = document.querySelector('.input');
        let buttons = document.querySelectorAll('.btn');
        let currentInput = '';
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                
                if (value === 'AC') {
                    currentInput = '';
                    display.value = '0';
                } else if (value === 'Del') {
                    currentInput = currentInput.slice(0, -1);
                    display.value = currentInput || '0';
                } else if (value === '=') {
                    try {
                        currentInput = eval(currentInput).toString();
                        display.value = currentInput;
                    } catch {
                        display.value = 'Error';
                        currentInput = '';
                    }
                } else {
                    currentInput += value;
                    display.value = currentInput;
                }
            });
        });