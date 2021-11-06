let navbar = document.querySelector('.menu');
let content = document.querySelector('.content');
let sticky = navbar.offsetTop;

window.onscroll = () => {
    
    if (window.pageYOffset >= sticky) {
       navbar.classList.add('sticky');
       content.style.margin = "150px auto";
        
    }else{
        navbar.classList.remove('sticky');
       content.style.margin = "100px auto";
    }

}