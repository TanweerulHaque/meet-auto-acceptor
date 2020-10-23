function autoAdmit() {
    for (let element of document.getElementsByTagName('span')) {
        if (element.innerHTML === 'Admit') {
            element.click();
        }
    }
}
setInterval(autoAdmit, 500);
