
for (var i = 1; i < 101 ; i++ ){
var li = document.createElement('li');
 
if(i%3==0&&i%5==0){
li.textContent='FizzBuss';
}
 
else if(n%3==0){
li.textContent='Fizz';
}
 
else if(i%5==0){
li.textContent='Buss';
}
 
else{
li.textContent=i;
}
 
 document.getElementById('list').appendChild(li);
}
