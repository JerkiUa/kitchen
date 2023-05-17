const btnNext = document.querySelector('.btnNext1');

let mySelect = document.getElementById("mySelect");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

btnNext.addEventListener('click', function() {
  let selectedValue = mySelect.querySelector('input:checked').value;
  
  if (selectedValue === 'U-shaped') {
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'flex';
  } else if (selectedValue === 'Corner') {
    img1.style.display = 'none';
    img2.style.display = 'flex';
    img3.style.display = 'none';
  } else if (selectedValue === 'Direct') {
    img1.style.display = 'flex';
    img2.style.display = 'none';
    img3.style.display = 'none';
  }
});

