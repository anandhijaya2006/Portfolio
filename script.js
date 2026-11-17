(function(){var l=document.querySelectorAll('nav a'),s=[].map.call(l,function(a){return document.querySelector(a.getAttribute('href'))});
function f(){var y=window.scrollY+160,i=0;s.forEach(function(e,n){if(e&&e.offsetTop<=y)i=n});l.forEach(function(a,n){a.classList.toggle('on',n===i)})}
window.addEventListener('scroll',f,{passive:true});f()})();
(function(){var b=document.getElementById('copy'),t='anandhijaya2006@gmail.com';
function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy email address'},2000)}
function fb(){var x=document.createElement('textarea');x.value=t;document.body.appendChild(x);x.select();try{document.execCommand('copy');done()}catch(e){b.textContent='Select the address above and copy it'}document.body.removeChild(x)}
b.addEventListener('click',function(){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,fb)}else{fb()}})})();
