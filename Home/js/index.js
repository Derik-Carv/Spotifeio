const sidebar = document.querySelector('.sidebar');
const btnDiscography = document.querySelector('.close');
const seta = document.querySelector('.seta');
const btnIntoDiscography = document.querySelector('.find-into-discography img');
const inputFindDiscography = document.querySelector('.open-find-discography');
const view = document.querySelector('.discography-view');

// expand discography
btnDiscography.addEventListener('click', ()=>{
    if(btnDiscography.className === 'close'){
        sidebar.style.width = '40%';
        seta.style.transform = 'rotate(180deg)';
        sidebar.style.transition = 'width 0.5s ease-in-out';
        btnDiscography.className = 'open';
    }
    else {
        sidebar.style.width = '20%';
        seta.style.transform = 'rotate(0deg)';
        btnDiscography.className = 'close';
    }
});

// open input find into disgraphy
btnIntoDiscography.addEventListener('click', async ()=>{
    btnIntoDiscography.style.transition = 'opacity 0.5s ease, width 0.5s ease';
    btnIntoDiscography.style.opacity = '0';
    btnIntoDiscography.style.width = '0px'
    inputFindDiscography.style.display = 'flex'
    view.style.transition = 'margin-left 1s ease-in-out'
    view.style.marginLeft = 'auto'
    setTimeout(()=>{
        
        inputFindDiscography.style.transition = 'width 1s ease-in'
        inputFindDiscography.style.width = '70%'
        inputFindDiscography.style.overflow = 'hidden';
    }, 100);
});