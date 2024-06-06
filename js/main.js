let boo = true;
let brg = document.querySelector('#burger');
let hdroite = document.querySelector('.hDroite');

brg.addEventListener('click',()=>{
    if (boo) {
        hdroite.classList.add('active');
        burger.className='fa fa-chevron-right';
        boo = false;
    }else{
        hdroite.classList.remove('active');
        boo = true;
        burger.className='fas fa-bars';
    }
})

function revealCard() {
    let desc=document.querySelectorAll('.animsect2');
    var contenu =document.querySelectorAll('.txtsect2');
    var images =document.querySelectorAll('.imgsect2');

    for (let i = 0; i < contenu.length; i++) {
        var cardtop = desc[i].getBoundingClientRect().top;
        var winHeight = window.innerHeight;
        var cardPoint = 175;
        if (cardtop < winHeight - cardPoint) {
            contenu[i].style= 'top:0; opacity: 1;'
            images[i].style= 'top:0; opacity: 1;'
        } else {
            contenu[i].style= 'top: 10em; opacity: 0;'
            images[i].style= 'top: 10em; opacity: 0;'
        }            
    }    
}
window.addEventListener('scroll',revealCard);

function scroll(){
    let profil=document.querySelector('.profil')
    let nom=document.querySelector('.nom')
    let post=document.querySelector('.post')
    let header=document.querySelector('header')
    let circleUp=document.querySelector('.circleUp')
    let y=window.scrollY;
    if (y<130) {
        profil.style= 'opacity:1;'
        nom.style= 'right:0em;opacity:1;'
        post.style= 'left:0em;opacity:1;'
        header.style= 'background:transparent;box-shadow:0 0 0;'
        circleUp.style= 'top:110vh;'
    }else{
        profil.style= 'opacity:0;'
        nom.style= 'opacity:0;right:-4em;'
        post.style= 'opacity:0;left:-4em;'
        header.style= 'box-shadow: 0 0 10px black;background: rgb(0, 2, 17)'
        circleUp.style= 'top:88vh;'
    }
}

setInterval (scroll,100);


function revealCardsect3() {
    let niveaux= document.querySelectorAll('.vniveaux');
    let valueniveaux= document.querySelectorAll('.value');
        
    
    for (let i = 0; i < niveaux.length; i++) {



        var cardtop = niveaux[i].getBoundingClientRect().top;
        var winHeight = window.innerHeight;
        var cardPoint = 0;
        
        if (cardtop < winHeight - cardPoint) {
            niveaux[i].style=`width:${valueniveaux[i].innerText};`
        } else {
            niveaux[i].style=`width:0;`
        }            
    }
}
window.addEventListener('scroll',revealCardsect3);

let lienSary = document.querySelectorAll('.nope');
let maso = document.querySelectorAll('.maso');
let fullimage = document.querySelector('.fullimage');

if (lienSary) {
    for (let i = 0; i < maso.length; i++) {
        maso[i].addEventListener('click',()=>{
            fullimage.src = lienSary[i].textContent;
        })
    }
}















