var btn = document.getElementById('counter');

btn.onclick=function (){
   var request = new XMLHttpRequest();
   request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE) {
           if(request.status === 200) {
               var counter= requst.responseText;
               var span = document.getElementById('count');
               span.innerHTML=counter.toString();
           }
       }
   };
   request.open('GET','http://thayyilmanojkumar.imad.hasura-app.io/counter',true);
   request.send(null);
    
};