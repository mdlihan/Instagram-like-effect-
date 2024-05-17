/*axios('https://openapi.programming-hero.com/api/course/curriculum')
.then((res)=>{console.log(res.data)})
.catch((err)=>{console.log(err)})*/


let img = document.querySelector('img');
let icon = document.querySelector('#icon');
img.addEventListener('dblclick',()=>{
  
icon.style.transform = "translate(-50%,-50%) scale(1)";
icon.style.opacity = 0.8;

setTimeout(()=>{
  icon.style.transform = "translate(-50%,-50%) scale(0)";
},1200)

setTimeout(()=>{
  icon.style.opacity=0;
},1000)
});


console.log(typeof (Worker))