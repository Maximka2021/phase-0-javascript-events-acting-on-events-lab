// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    const leftNUmbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNUmbers);

    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown', function(e){
   if(e.key = 'ArrowLeft'){
    moveDodgerLeft();
   } 
})

function moveDodgerRight(){
    const leftNUmbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNUmbers);

    if(left < 400){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }
})