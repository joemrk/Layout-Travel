window.addEventListener('scroll', function(e){
    let nav = document.getElementById('nav')
    if(document.body.scrollTop || document.documentElement.scrollTop >= 60){
        nav.classList.add('nav-opacity')
    }else{
        nav.classList.remove('nav-opacity')
    }
})