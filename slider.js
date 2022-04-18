// const $ = document.querySelector.bind(document)
console.log("Clcik");
window.addEventListener('load' , function(e){
    e.preventDefault();
    const slider = document.getElementsByClassName('slideshow')
    var vt = 0; 
    slider[0].classList.add("slider-active")
    function remove(){
        for(let i = 0; i < slider.length; i++){
            slider[i].classList.remove("slider-active")

        }
    }
    document.getElementById('btnNext').addEventListener('click' , (e) => {
        e.preventDefault();
        vt++;
        remove();
        if(vt >= slider.length){
            vt= 0;
        }
        slider[vt].classList.add("slider-active")
    })
    document.getElementById('btnPrev').addEventListener('click' , (e) => {
        alert("Clcik")
        e.preventDefault();
        const size = slider.length
        vt--;
        remove();
        if(vt <= 0){
            vt= size - 1;
        }
        slider[vt].classList.add("slider-active")
    })
})
