// selecting all required elements
const images = document.querySelectorAll('.image-area'),
previewBox = document.querySelector('.background'),
previewImg = previewBox.querySelector('.image-show'),
closeIcon = previewBox.querySelector('.x-icon');

window.onload = () => {
    for (let i = 0; i < images.length; i++){
        images[i].onclick = ()=>{
            console.log(i);            
                function preview(){
                    let imageUrl = images[i].querySelector('img').src;
                    previewImg.src = imageUrl;
                    console.log(imageUrl);
                }
            previewBox.classList.add("show");     
            closeIcon.onclick = ()=>{                
                previewBox.classList.remove("show");
            }
            preview();               
        }
    }
}