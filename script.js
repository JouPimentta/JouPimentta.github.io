// selecting all required elements
const images = document.querySelectorAll('.image-area'),
previewBox = document.querySelector('.background'),
previewImg = previewBox.querySelector('.image-show'),
closeIcon = previewBox.querySelector('.x-icon');

window.onload = () => {
    for (let i = 0; i < images.length; i++){
        let newIndex = i;
        let clickImgIndex;
        images[i].onclick = ()=>{
            clickImgIndex = newIndex;
            console.log(i);            
                function preview(){
                    let imageUrl = images[newIndex].querySelector('img').src;
                    previewImg.src = imageUrl;
                    console.log(imageUrl);
                }
                //previous and next button
                const prevBtn = document.querySelector(".prev");
                const nextBtn = document.querySelector(".next");
                if (newIndex == 0) {
                    prevBtn.style.display = "none";                    
                }
                if (newIndex >= images.length - 1) {
                    nextBtn.style.display = "none";                    
                }
                prevBtn.onclick = ()=>{
                    newIndex--;
                    if (newIndex == 0) {
                        preview();
                        prevBtn.style.display = "none";
                        nextBtn.style.display = "block";
                    } else {
                        preview();
                        prevBtn.style.display = "block";
                        nextBtn.style.display = "block"; 
                    }
                }
                nextBtn.onclick = ()=>{
                    newIndex++;
                    if (newIndex >= images.length - 1) {
                        preview();
                        nextBtn.style.display = "none";
                        prevBtn.style.display = "block";
                    } else {
                        preview();
                        prevBtn.style.display = "block";
                        nextBtn.style.display = "block"; 
                    }
                }
            previewBox.classList.add("show");   

            closeIcon.onclick = ()=>{       
                clickImgIndex = newIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";         
                previewBox.classList.remove("show");
            }     
            preview();      
        }
    }
}