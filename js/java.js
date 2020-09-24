var nav = document.getElementById("myHeader");
var sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}