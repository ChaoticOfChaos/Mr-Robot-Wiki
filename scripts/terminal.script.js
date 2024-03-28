var inp = document.getElementById('terminal');
inp === null || inp === void 0 ? void 0 : inp.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('Enter');
    }
});
