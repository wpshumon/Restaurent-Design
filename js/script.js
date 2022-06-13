// navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
    if(this.window.scrollY > 400){
        navbar.classList.add('fixed');
    } else{
        navbar.classList.remove('fixed');
    }
})

// fixed btn
const fixedBtn = document.querySelector('.fixed-btn');
window.addEventListener('scroll', function(){
    if(this.window.scrollY > 600){
        fixedBtn.classList.add('show');
    } else{
        fixedBtn.classList.remove('show');
    }
})