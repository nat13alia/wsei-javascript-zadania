document.addEventListener('DOMContentLoaded', function(){
    const btns = document.querySelectorAll('.button');
    console.log(btns);
    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            if (this.nextElementSibling != null) {
                if (this.nextElementSibling.style.display == "none") {
                  this.nextElementSibling.style.display = "block";
                } else {
                  this.nextElementSibling.style.display = "none";
                }
              }
        })
    })
})
