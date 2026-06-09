const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')})},{threshold:.18});
reveals.forEach(el=>io.observe(el));
const lb=document.querySelector('.lightbox');
if(lb){document.querySelectorAll('.gallery-item img').forEach(img=>img.addEventListener('click',()=>{lb.querySelector('img').src=img.src;lb.classList.add('open')}));lb.querySelector('button').addEventListener('click',()=>lb.classList.remove('open'));lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')})}
