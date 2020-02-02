document.addEventListener('DOMContentLoaded', function() {

    const orderId = document.getElementById('orderId');
    const item = document.getElementById('item');
    const quantity = document.getElementById('quantity');
    const addBtn = document.getElementById('addBtn');
    const ordersTable = document.getElementById('orders');

    addBtn.addEventListener('click', function() {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerText = orderId.value;
        td2.innerText = item.value;
        td3.innerText = quantity.value;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        ordersTable.appendChild(tr);
        
        orderId.value = '';
        item.value = '';
        quantity.value = '';
    })

});