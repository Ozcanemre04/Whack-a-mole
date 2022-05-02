
let section =document.querySelector('.section')
let section2 = document.querySelector('.section2')
let h1 =document.querySelector('h1')
let h2 =document.querySelector('h2')
let score= 0;
let second=180;
h1.innerHTML="score:"+score ;
h2.innerHTML="time left: "+ second
let random;
let h3 =document.querySelector('h3')

let button = document.createElement('button')
section2.appendChild(button)


for(let i =0;i<12;i++){
   let div=document.createElement('div')
   section.appendChild(div)
   
   div.addEventListener('click',()=>{
      if(div.classList.contains('red')){
         div.classList.remove('red')
         
         score++
         h1.innerHTML="score:" + score;
         
         
      }
      else if(!div.classList.contains('red')){
         score--
         h1.innerHTML='score:' +score;
         second-=5;
         h2.innerHTML='time left: '+second
      }
      
      
   })
   
   setInterval(()=>{
      div.classList.remove('red')
   },2500)
  
}






let divv =document.querySelectorAll('div')


function randomize(){
   
   random =Math.floor(Math.random()*divv.length)
   
   divv[random].classList.add('red');
   
}


let myinterval;
h3.addEventListener('click',function hello(){

   myinterval=setInterval(randomize,1000)
   
   
   setInterval(time,1000)
})


function time(){
   second--
   h2.innerHTML='time left:'+second
   if(second<0){
      h2.innerHTML="";
      clearInterval(myinterval)
      button.style.display="inline-block"
      button.innerHTML='try again';
      

      button.addEventListener('click',()=>{
         document.location.reload(true)
   
      })
   }}
