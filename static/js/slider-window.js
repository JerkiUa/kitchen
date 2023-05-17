const slide_img1 = document.getElementById('slide__img1')
const slide_img2 = document.getElementById('slide__img2')
const slide_img3 = document.getElementById('slide__img3')
let slider = document.querySelector('.slider')

window.addEventListener('resize', event => {
    if(event.target.window.innerWidth > 1100)response0();
})
window.addEventListener('resize', event => {
    if(event.target.window.innerWidth < 1100)response1();
})
window.addEventListener('resize', event => {
    if(event.target.window.innerWidth < 730)response2();
})
function response0 (){
    if(window.innerWidth > 2100 ){
        slide_img1.classList.remove('slider__img');
        slide_img2.classList.remove('slider__img');
        slide_img3.classList.remove('slider__img');
        slide_img1.classList.add('slider__img');
        slide_img3.classList.add('slider__img');
        slider.style.width='1080px';
    }
}

function response1 (){
    if(window.innerWidth > 730 && window.innerWidth < 1100){
        slide_img1.classList.remove('slider__img');
        slide_img3.classList.remove('slider__img');
        slide_img1.classList.add('slider__img');
        slide_img2.classList.add('slider__img');
        slide_img3.classList.add('slider__img');
        slider.style.width='720px';
        
    }
};



function response2 (){
    if(window.innerWidth < 730){
        slide_img1.classList.remove('slider__img');
        slide_img3.classList.remove('slider__img');
        slide_img1.classList.add('slider__img');
        slider.style.width='360px';
    }
};
window.addEventListener('resize', event => {
    if(event.target.window.innerWidth < 1100)response1();
})
window.addEventListener('resize', event => {
    if(event.target.window.innerWidth > 1100)response0();
})

window.addEventListener('resize', event => {
    if(event.target.window.innerWidth < 730)response2();
})