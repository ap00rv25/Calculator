let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if(buttonText=='Del'){
            if(screenValue!=""){
                var temp = screenValue;
                screenValue="";
                for(var i=0; i<temp.length-1; i++)
                {
                    screenValue+=temp[i];
                }
            }
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}