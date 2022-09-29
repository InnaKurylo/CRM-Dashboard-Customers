let menu= document.querySelector('.nav__list');
let footer = document.querySelector ('.footer__pages');
let activePage = document.querySelector('.active-btn');
let activeMenu = document.querySelector('.active');

menu.addEventListener('click',(ev)=>{
    activeMenu.classList.toggle('active');
    const el = ev.target.closest('.nav__list--items');
    if(el){
        el.classList.toggle('active');
        activeMenu = el;
    }
})
      

