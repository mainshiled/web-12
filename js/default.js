
for (var n = 1; n < 101 ; n++ ){
var li = docment.createElement('li');
if(n/3==1||n/5==1){
li.textContent='FizzBuss';
}
else if(n/3==1){
li.textContent='Fizz';
}
else if(n/5==1){
li.textContent='Buss';
}
else{
li.textContent='n';
}
