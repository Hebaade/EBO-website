window.onscroll=function(){
    if(document.body.scrollTop===30 || document.documentElement.scrollTop > 30){
        document.getElementById("header").style.display = "flex"
    }
    else{
        document.getElementById("header").style.display = "none"
}
}
document.getElementById("iconHam").onclick=function(){
    document.getElementsByClassName("nav")[0].style.display = "flex"
    document.getElementById("iconHam").style.display = "none"
    document.getElementsByClassName('fa-xmark')[0].style.display = "inline-block"
}
document.getElementsByClassName('fa-xmark')[0].onclick=function(){
    document.getElementsByClassName("nav")[0].style.display = "none"
    document.getElementById("iconHam").style.display = "inline-block"
    document.getElementsByClassName('fa-xmark')[0].style.display = "none"
}