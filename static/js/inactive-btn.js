/* const inp = document.querySelector('.inp_block');
let btn_block = document.querySelector('.btn_block');
btn_block.setAttribute('disabled',true)
inp.oninput = function(){
    if (inp.value.length < 1){
        btn_block.setAttribute('disabled', true);
        
    } else {
        btn_block.removeAttribute('disabled');
    }

} */

/* let elements = [...document.querySelectorAll('classname')].forEach(item => { 
    item.addEventListener('click', ()=>{
      console.log('1');
      });
}); */

/* const form = document.querySelector('.form-1');
const inputs = form.querySelectorAll('.inp-block');
let btn_block = document.querySelectorAll('.btn-block');
btn_block.forEach ((btn_block)=> {btn_block.setAttribute('disabled', true)})


inputs.forEach(el => el.addEventListener('oninput', () => {
    if (inp.value.length < 1){
        btn_block.forEach ((btn_block)=> {btn_block.setAttribute('disabled', true)})

        
    } else {
        btn_block.forEach ((btn_block)=> {btn_block.removeAttribute('disabled')})
    }
})) */






  /* const form = document.querySelector('.form-1')
  const inputs = form.querySelectorAll('.inp-block')

  const btn_blocks = document.querySelector('.btn-block')
  
  inputs.forEach(el => el.addEventListener('input', () => {
    if (el.value.length > 1) {
        btn_block.removeAttribute('disabled', true)
    }
  })) */
 

/* validationForm('.form-1', '.inp-block', '.btn-block')




/*     let mail = document.querySelector(".inp-block");
    let button = document.querySelector(".btn-block");

    mail.addEventListener("input", ButtonED);

    function ButtonED(){
    if (mail.value == ""){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
    }
    ButtonED() */



/*     let mail1 = document.querySelector(".inp-block1");
    let button1 = document.querySelector(".btn-block1");

    mail1.addEventListener("input", ButtonED1);

    function ButtonED1(){
    if (mail1.value == ""){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
    }
    ButtonED1() */
    

/* let mail1 = document.querySelector(".inp-block1");
let button1 = document.querySelector(".btn-block1");

mail1.addEventListener("input", ButtonED1);

function ButtonED1(){
  if (mail1.value == ""){
    button1.setAttribute.disabled = true;
  } else {
    button1.setAttribute.disabled = false;
  }
}
ButtonED1() */


let btn_blocks = document.querySelectorAll('.btn_block');
let inp_blocks = document.querySelectorAll('.inp_block');

for(btn_block of btn_blocks) {
    
    btn_blocks.addEventListener('click',function(){
        let btn_blocks = document.querySelectorAll('.btn_block'); 
        for(inp_block of inp_blocks){
            if (inp_blocks.value.length < 1){
                btn_blocks.setAttribute('disabled', true);
                
            } else {
                btn_blocks.removeAttribute('disabled');
            }    
        }
    })
}