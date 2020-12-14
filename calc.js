console.log('This is a calcultor');
let screen=document.getElementById('screen');
let svalue='';

let button=document.querySelectorAll('button');
// console.log(button);

for(item of button)
{
    // console.log(item);
     item.addEventListener('click',(e)=>{
    buttontext=e.target.innerText;
    // console.log(buttontext);
    if(buttontext=='X')
    {
        buttontext='*';
        svalue=buttontext;
        screen.value+=svalue;
    }
    else if(buttontext=='C')
    {
        screen.value=null;

    }
    else if(buttontext=='D')
    {
        screen.value=screen.value.substr(0,screen.value.length-1);

    }
    else if(buttontext=='=')
    {
        screen.value=eval(screen.value);
    }
    else{
        svalue=buttontext;
        screen.value+=svalue;
    }
})
    
}