console.log('---------main.js--------')
let pikachubtn = document.getElementById("evolucionaPikachu");
let pikachucard = document.getElementById("picachucard");
let pikachuCardImg = pikachucard.childNodes[1]
let spinnerBtn =document.getElementById("newSpinner");
let spinnerDiv =document.getElementById("spinnerInModal");
let clickCounter =document.getElementById("clickCounter");
let resetClickCounter =document.getElementById("resetClickCounter");
let clickCounterNumber = 0; 

const spinnerTypeArray =['primary','secondary','success','danger','warning','info','light','dark'];
// console.log('picachubtn : ', pikachubtn)
// console.log('pikachucard : ', pikachucard)
 //console.log('pikachuCardImg : ', pikachuCardImg)



function changeImg(event){
    if(pikachubtn.innerHTML == "Evoluciona"){
        pikachuCardImg.setAttribute("src","assets/imagesIndex/raichu.png")
        pikachubtn.innerHTML="Pikachu"
    }else{
        pikachuCardImg.setAttribute("src","assets/imagesIndex/pikachu.png")
        pikachubtn.innerHTML="Evoluciona"
    }
    console.log('pikachuCardImg2 : ', pikachuCardImg)    
}
function changeSpinner(event){
    const newSpinner = "spinner-border text-"+spinnerTypeArray[Math.floor(Math.random() * spinnerTypeArray.length)]
    spinnerDiv.setAttribute("class",newSpinner)
}
function clickCounterF (event){
    clickCounterNumber++;
    event.target.childNodes[1].innerHTML=clickCounterNumber;
}
function clickCounterF (event){
    clickCounterNumber++;
    event.target.childNodes[1].innerHTML=clickCounterNumber;
    resetClickCounter.childNodes[1].setAttribute("class","position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle")
}

function resetClickCounterF (event){
    clickCounterNumber = 0;
    clickCounter.childNodes[1].innerHTML=clickCounterNumber;
    resetClickCounter.childNodes[1].setAttribute("class","")
    
}

pikachubtn.addEventListener('click',changeImg)
spinnerBtn.addEventListener('click',changeSpinner)
clickCounter.addEventListener('click',clickCounterF)
resetClickCounter.addEventListener('click',resetClickCounterF)