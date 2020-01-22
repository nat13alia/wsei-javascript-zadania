document.addEventListener('DOMContentLoaded', function(e){
    const btn1 = document.getElementById('button1');
    const btn2 = document.getElementById('button2');
    const btn3 = document.getElementById('button3');
    let counters = document.getElementsByClassName('counter');

    btn1.addEventListener('click', function(e){
        counters[0].innerHTML++;
    })

    btn2.addEventListener('click', function(e){
        counters[1].innerHTML++;
    })

    btn3.addEventListener('click', function(e){
        counters[2].innerHTML++;
    })
})