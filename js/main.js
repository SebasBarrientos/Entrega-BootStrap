console.log('---------main.js--------')
let pikachubtn = document.getElementById("evolucionaPikachu");
let pikachucard = document.getElementById("picachucard");
let pikachuCardImg = pikachucard.childNodes[1]
console.log('picachubtn : ', pikachubtn)
console.log('pikachucard : ', pikachucard)
console.log('pikachuCardImg : ', pikachuCardImg)



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

pikachubtn.addEventListener('click',changeImg)
