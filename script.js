document.getElementById('nameInput').addEventListener('input', function() {
    const name = this.value;
    document.getElementById('nameOutput').textContent = name;
});
