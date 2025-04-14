window.onload = function() {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        const inputText = document.getElementById('inputText').value;
        const resultDiv = document.getElementById('result');
        const regex = /<script>ALERT\([^)]*\)/i;
        if (regex.test(inputText)) {
            // Obfuscated flag
            const encodedFlag = 'ZmxhZ19IUEZwb3Jrb25zYWxl';
            resultDiv.textContent = atob(encodedFlag);
        } else {
            resultDiv.textContent = 'Keep thinking!This question is about web security.';
        }
    });
  };
