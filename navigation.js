const toChooseBtn = document.querySelector('.ChooseBtn');
const toAboutBtn = document.querySelector('.aboutBtn');
const PapierosyBtn = document.querySelector('.container');
const AlkoholeBtn = document.querySelector('.container1');
const NarkotykiBtn = document.querySelector('.container2');
const WandalizmBtn = document.querySelector('.container3');

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

let papierosy = new Promise((resolve)=>{
    PapierosyBtn.addEventListener('click',(event)=>{
        resolve();
    });
});
let alkohole = new Promise((resolve)=>{
    AlkoholeBtn.addEventListener('click',(event)=>{
        resolve();
    });
});
let narkotyki = new Promise((resolve)=>{
    NarkotykiBtn.addEventListener('click',(event)=>{
        resolve();
    });
});
let wandalizm = new Promise((resolve)=>{
    WandalizmBtn.addEventListener('click',(event)=>{
        resolve();
    });
});


toChoose.then(NavigateToChoose);
toAbout.then(NavigateToAbout);
papierosy.then(NavigateToPapierosy);
alkohole.then(NavigateToAlkohole);
narkotyki.then(NavigateToNarkotyki);
wandalizm.then(NavigateToWandalizm);

function NavigateToChoose(){
    window.location.href = 'Choose.html';
}
function NavigateToAbout(){
    window.location.href = 'About.html';
}
function NavigateToPapierosy(){
    window.location.href = 'papierosy.html';
}
function NavigateToAlkohole(){
    window.location.href = 'alkohol.html';
}
function NavigateToNarkotyki(){
    window.location.href = 'narkotyki.html';
}
function NavigateToWandalizm(){
    window.location.href = 'wandalizm.html';
}
