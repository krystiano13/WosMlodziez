const toChooseBtn = document.querySelector('.ChooseBtn');
const toAboutBtn = document.querySelector('.aboutBtn');

let toChoose = new Promise((resolve)=>{
    toChooseBtn.addEventListener('click',()=>{
        resolve();
    });
});
let toAbout = new Promise((resolve)=>{
    toAboutBtn.addEventListener('click',()=>{
        resolve();
    });
});

toChoose.then(NavigateToChoose);
toAbout.then(NavigateToAbout);

function NavigateToChoose(){
    window.location.href = 'Choose.html';
}
function NavigateToAbout(){
    window.location.href = 'About.html';
}