document.getElementById('fetchMessage').addEventListener('click', function() {
    fetch('http://localhost:8080/hello')
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerText = data;
        })
        .catch(error => console.error('Error fetching message:', error));
});
