document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementById('remove');
    btn.addEventListener('click', function(){
        this.parentElement.removeChild(this);
    })
})