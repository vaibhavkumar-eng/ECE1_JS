// console.log("Hello world");


//differnt datatypes 
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num=undefined;
// console.log(num);
// console.log(typeof(num));


//use of symbol (Uniqueness: Every time you call Symbol(), it creates a new, one-of-a-kind value.
//Immutability: Once created, a Symbol cannot be changed.
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("True");
}
else{
    console.log("False");
}





