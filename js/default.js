
for (var n = 1; n < 101 ; n++ ){
var li = docment.createElement('li');
if(n/3==1||n/5==1){
li.textContent='FizzBuss';
}
else if(n/3==1){
li.text='Fizz';
}
else if(n/5==1){
li.text='Buss';
}
else{
li.text='n';
}
