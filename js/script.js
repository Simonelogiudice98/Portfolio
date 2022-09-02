var id = null;

function muoviAngular(){
    let direction = true;
    let iconaAngular = document.getElementById('angularIcon')
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame(){
        if(pos == 350){
            direction = false;
        }else if(pos == 0){
            direction = true;
        }
        if(direction == true){
            pos++;
            
            iconaAngular.style.top = pos + 'px';
            iconaAngular.style.left = pos + 'px';
            
        }else{
            pos--;
            iconaAngular.style.top = pos + 'px';
            iconaAngular.style.left = pos + 'px';

        }
    }
}


