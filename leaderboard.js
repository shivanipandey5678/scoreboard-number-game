let score=document.getElementById('scorebox');
(score.innerText)='';
let keybox=document.getElementsByClassName('box');
for(let i=0;i<keybox.length;i++){
    keybox[i].addEventListener("click",function(){
        score.innerText+= keybox[i].innerText;
    })
}
let minnumber=document.getElementById('min');
let maxnumber=document.getElementById('max');
let enter=document.getElementById('enter');
enter.addEventListener("click",function(){
    
    if(Number(score.innerText)<Number(minnumber.innerText)){
        minnumber.innerText=score.innerText;
        
    }
     else if(Number(score.innerText)>Number(maxnumber.innerText)){
        
        maxnumber.innerText=score.innerText;
        
     } 
    
})
