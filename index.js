sum()
let heart = Array.from(document.querySelectorAll('.fa-heart'))
for(let x of heart)
{
    x.addEventListener('click',(e)=>{
        e.target.classList.toggle('heartcolor')
      })
}
let cross = Array.from(document.querySelectorAll('.fa-times'))

for(let i of cross){
 i.addEventListener('click',(e)=>{
e.target.parentElement.parentElement.remove(e.target)})
 }
 let decrement= Array.from(document.querySelectorAll('.decrement'))
 let pu = [20,30,40]
for(let i =0 ;i< decrement.length;i++){ 
    decrement[i].addEventListener('click',(e)=>{
     if(e.target.nextElementSibling.innerText>0)
     {
    e.target.nextElementSibling.innerText--  
    e.target.parentElement.nextElementSibling.children[0].innerText = e.target.nextElementSibling.innerText * pu[i]
    sum()
     }    
 })
}
let increment= Array.from(document.querySelectorAll('.increment'))
for(let i =0 ;i< increment.length;i++){ 
 increment[i].addEventListener('click',(e)=>{
    e.target.previousElementSibling.innerText++

   e.target.parentElement.nextElementSibling.children[0].innerText = e.target.previousElementSibling.innerText * pu[i]
   sum()

 })
}
function sum()
{
    let element=0;
    let sumarticle= document.getElementById('sum')
    let price= Array.from(document.querySelectorAll('.price'))
    for (let x = 0; x < price.length; x++) {
         element = Number(element) + Number(price[x].innerText) ;
         sumarticle.innerText = element +"$"
    }
}

