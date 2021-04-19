// selecting all required elements
const gallery = document.querySelectorAll('.grid-container .images'),
previewBox = document.querySelector('.background');

window.onload = () => {
    for (let i = 0; i < gallery.length; i++){
        gallery[i].onclick = ()=>{
            console.log(i);
            previewBox.classList.add("show");
        }
    }
}