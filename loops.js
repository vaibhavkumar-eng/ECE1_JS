to use html in java script use the double quotes
let a;
write("Starting looop"+"<br />");
for(a=0;a<10;a=a+1){

    write("Current count:"+a);
    write("<br/>")
}
write("Loop stopped!")

syntax for in loop
for(key in object){
}

let x;
for(x in person){

}


const person={
    fname:"Ajay",
    lname:"Kumar",
    age:25

};
let x;
for(x in person){
    console.log("person details:"+x+":"+person[x])//we can also use person.x
}


while loop