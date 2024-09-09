document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('themeSelect');

    themeSelect.addEventListener('change', function() {
        const selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
    });
});