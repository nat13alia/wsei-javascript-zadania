document.addEventListener('DOMContentLoaded', function() {

    const btns = document.querySelectorAll('.deleteBtn');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let row = this.parentElement.parentElement;
            let table = row.parentElement;
            table.removeChild(row);
        });
    });

}); 