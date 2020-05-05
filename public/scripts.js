const InfoContainers = document.getElementsByClassName('info-container')

for (let InfoContainer of InfoContainers){
    let ButtonHide = InfoContainer.querySelector('.button-hide')
    let ButtonShow = InfoContainer.querySelector('.button-show')
    let details = InfoContainer.querySelector('.details')
    
    ButtonHide.addEventListener('click', function(){
        ButtonHide.textContent = "";
        ButtonShow.textContent = "MOSTRAR";
        details.classList.add('hide')
    })

    ButtonShow.addEventListener('click', function(){
        ButtonHide.textContent = "ESCONDER";
        ButtonShow.textContent = "";
        details.classList.remove('hide')
    })    
}
