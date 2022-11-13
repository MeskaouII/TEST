const balle=document.querySelector(".balle")
const space=document.querySelector(".container")
const over=document.querySelector('.gameover')
const sc=document.querySelector(".score")
let score=0;
let timmes=20200;
let i;
function updateposition(e){
   if(score<0){
        clearInterval(i);
        balle.style.display="none"
        over.style.display="block";
    } 
    /* }
    else if(score ==4){
        timmes-=100;*/
        balle.style.left=Math.random() * space.clientwidth +"px"
        balle.style.top=Math.random( ) * space.clientheight+"px"
   // }
}
i=setInterval(updateposition,70)
balle.addEventListener("click",(e)=>{
    e.stopPropagation();
     score++;
     sc.textContent=score;   
})
balle.addEventListener("mouseup",(e)=>{
    balle.style.backgroundColor="red";
}
)
balle.addEventListener("mousedown",(e)=>{
    balle.style.backgroundColor="blue";
})
space.addEventListener("click",(e)=>{
    score--;
    sc.textContent=score; 
})