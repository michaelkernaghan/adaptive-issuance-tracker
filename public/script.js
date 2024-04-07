// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/fetchAdaptiveIssuance')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = `<pre>${data.output}</pre>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('dataContainer').innerHTML = 'Failed to load data.';
        });
});
