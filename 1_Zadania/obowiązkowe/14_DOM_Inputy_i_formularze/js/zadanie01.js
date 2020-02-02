document.addEventListener('DOMContentLoaded', function() {

    const invoiceCheckbox = document.querySelector('#invoice');
    const invoiceData = document.querySelector('#invoiceData');
    invoiceData.style.display = 'none';

    invoiceCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            invoiceData.style.display = 'block';
        } else {
            invoiceData.style.display = 'none';
        }
    });

});