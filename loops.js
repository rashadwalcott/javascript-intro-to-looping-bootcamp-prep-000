<<<<<<< HEAD
//First Ex.
function forLoop(array){
for(let i=0; i<25;i++){
  if (i===1){
    array.push("I am 1 strange loop.");
  }
  else
  {
    array.push(`I am ${i} strange loops.`);
=======
function forLoop(array){
for(let i=0; i<25;i++){
  if (i===1){
    array[1] ="I am 1 strange loop.";
  }
  else
  {
    array[i]="I am " + [i] + "strange loops.";
>>>>>>> a92efca794c115e162ca9f838ad1edf1dc956290
  }
}
return array;
}
<<<<<<< HEAD
//Second Ex.
function whileLoop(n){
  while (n >0){
    console.log(--n);
  }
  return 'done';
}
//Third Ex.
function doWhileLoop(num){
var i =0;
  function incrementVariable(){
    i= i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.");
  }
  while(incrementVariable() < num);
  }
=======

function whileLoop(num=15){
  while (num >0){
    console.log(--num);
  }
  return console.log("Done");
}
>>>>>>> a92efca794c115e162ca9f838ad1edf1dc956290
