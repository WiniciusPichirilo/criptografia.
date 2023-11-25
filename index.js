document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.getElementById('textcode');
    const alertMessage = document.querySelector('.content-text-alert');
    const answerTitle = document.querySelector('.content-answer-title');
    const answerText = document.querySelector('.content-answer-text');
    const encryptButton = document.querySelector('.button-one');
    const decryptButton = document.querySelector('.button-two');

    encryptButton.addEventListener('click', function () {
        const originalText = textArea.value.toLowerCase();
        const encryptedText = criptografar(originalText);

        displayResult(encryptedText);
    });

    decryptButton.addEventListener('click', function () {
        const originalText = textArea.value.toLowerCase();
        const decryptedText = descriptografar(originalText);

        displayResult(decryptedText);
    });

    function displayResult(result) {
        answerTitle.textContent = 'Resultado:';
        answerText.textContent = result;
    }

    function criptografar(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function descriptografar(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }
});