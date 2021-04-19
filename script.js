// selecting all required elements
const gallery = document.querySelectorAll('.grid-container .images'),
previewBox = document.querySelector('.background'),
closeIcon = document.querySelector('.x-icon');

window.onload = () => {
    for (let i = 0; i < gallery.length; i++){
        gallery[i].onclick = ()=>{
            console.log(i);
            function preview(){
                let selectedImgUrl = gallery[i].querySelector("img").src
                console.log(selectedImgUrl)
            }
            previewBox.classList.add("show");

            closeIcon.onclick = ()=>{                
                previewBox.classList.remove("show");
            }
        }
    }
}